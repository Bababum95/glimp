import { products, getFavorites } from '../helpers/api';
import { ICurrentFilters, IProductData, IFilterResult, IFilterResultPair, IResponseProducts } from '../interfaces';
import { createProductCard } from '../helpers/createProductCard';

const productsContainer = document.querySelector('.wp-block-glimp-all-products');
const filterSelects = document.querySelectorAll('.wp-block-glimp-filters-attribute__dropdown');
const filterButtonsContainers = document.querySelectorAll('.wp-block-glimp-filters-attribute__buttons');
const inStockElement = document.querySelector('.wp-block-glimp-filters-availability__input');
const loadingTrigger = document.querySelector('.loading-observer');
const currentPageTaxonomy = productsContainer?.getAttribute('data-taxonomy');
const currentPageTerm = productsContainer?.getAttribute('data-term');

const currentFilters: ICurrentFilters = {
  sort: 'date',
  offset: 0,
  in_stock: false,
  attributes: [],
};
let isLoading = false;
let productCount: string | number = productsContainer
  ?.querySelector('.wp-block-glimp-all-products__count')
  ?.getAttribute('data-count') as string;
let favoritesList: number[] = [];
const filterResultsMap = new Map<string, IFilterResultPair>();
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadNewProduct();
    }
  });
}, {
  rootMargin: '800px 0px',
  threshold: 1.0
});
if (loadingTrigger) observer.observe(loadingTrigger);

const getFilterKey = (filter: ICurrentFilters): string => {
  return JSON.stringify(filter);
};

const fetchProductsIfNotCached = (filter: ICurrentFilters) => {
  const filterKey = getFilterKey(filter);

  const setData = (data: IResponseProducts) => {
    if (loadingTrigger) observer.observe(loadingTrigger);
    setProductsList(data.products);
    setFiltersElements(data.filters);
    productCount = data.product_count;
  }

  if (filterResultsMap.has(filterKey)) {
    const cachedResult = filterResultsMap.get(filterKey);
    if (!cachedResult) return;
    setData(cachedResult.data);
  } else {
    products(filter).then(data => {
      filterResultsMap.set(filterKey, { filter, data });
      setData(data);
    });
  }
};

const loadNewProduct = () => {
  if (isLoading) return;
  isLoading = true;
  products({...currentFilters, offset: productCount})
  .then(data => {
    const newProducts = getProductsList(data.products);
    productsContainer?.appendChild(newProducts);
    productCount = Number(data.product_count) + Number(productCount);
  })
  .catch(() => {
    if (loadingTrigger) observer.unobserve(loadingTrigger);
  })
  .finally(() => {
    isLoading = false;
  })
}

const getProductsList = (data: IProductData[]) => {
  const fragment = document.createDocumentFragment();
  data.forEach((product: IProductData) => {
    if (favoritesList.includes(product.id)) product.is_favorite = true;
    const card = createProductCard(product);
    fragment.appendChild(card);
  });
  return fragment;
}

const setProductsList = (data: IProductData[]) => {
  const productsList = getProductsList(data);
  productsContainer?.replaceChildren(productsList);
}

const setFiltersElements = (data: IFilterResult) => {
  filterSelects.forEach((select) => {
    const taxonomy = select.getAttribute('data-slug');
    if (!taxonomy) return;
    const options = select.parentElement?.parentElement?.querySelectorAll('.choices__item');
    options?.forEach((option) => {
      option.classList.add('hidden');
      data[taxonomy]?.find((term) => {
        if (
          term.term_id.toString() === option.getAttribute('data-value') ||
          option.getAttribute('data-value') === '0'
        ) option.classList.remove('hidden');
      })
    })
  })

  filterButtonsContainers?.forEach((container) => {
    const taxonomy = container.getAttribute('data-slug');
    if (!taxonomy) return;
    const buttons = container.querySelectorAll('.wp-block-glimp-filters-attribute__button');
    buttons?.forEach((button) => {
      button.classList.add('hidden');
      data[taxonomy]?.find((term) => {
        if ( term.term_id.toString() === button.getAttribute('data-id') ) {
          button.classList.remove('hidden');
        }
      })
    })
  })
}

if (currentPageTaxonomy && currentPageTerm) {
  currentFilters.attributes.push({ taxonomy: currentPageTaxonomy, exclude: false, value: [currentPageTerm] });
}

if (inStockElement && inStockElement instanceof HTMLInputElement) {
  inStockElement.addEventListener('change', () => {
    currentFilters.in_stock = inStockElement.checked;
    fetchProductsIfNotCached(currentFilters);
  })
}

getFavorites()
  .then((data) => {
    if (data) {
      favoritesList = data.data;
    }
  });
filterSelects?.forEach((select) => {
  const taxonomy = select.getAttribute('data-slug');

  if (!taxonomy || !(select instanceof HTMLSelectElement)) return;

  currentFilters.attributes.push({ taxonomy, exclude: true, value: [] })

  select.addEventListener('change', () => {
    currentFilters.attributes = currentFilters.attributes.map((attribute) => {
      if (attribute.taxonomy === taxonomy) {
        attribute.value = select.value === '0' ? [] : [select.value];
      }
      return attribute;
    });
    fetchProductsIfNotCached(currentFilters);
  });
});

filterButtonsContainers?.forEach((container) => {
  const taxonomy = container.getAttribute('data-slug');
  if (!taxonomy) return;
  currentFilters.attributes.push({ taxonomy, exclude: false, value: [] })
  const buttons = container.querySelectorAll('.wp-block-glimp-filters-attribute__button');
  buttons.forEach((button) => {
    const term = button.getAttribute('data-id');
    if (!term) return;
    button.addEventListener('click', () => {
      currentFilters.attributes = currentFilters.attributes.map((attribute) => {
        if (attribute.taxonomy === taxonomy) {
          if (attribute.value.includes(term)) {
            attribute.value = attribute.value.filter((value) => value !== term);
            button.classList.remove('active');
          } else {
            attribute.value.push(term);
            button.classList.add('active');
          }
        }
        return attribute;
      });
      fetchProductsIfNotCached(currentFilters);
    })
  })
})
