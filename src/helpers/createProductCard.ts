import { IProductData } from "../interfaces";
import { addToCart } from "./addToCart";

const getImage = (src: string, alt: string): HTMLElement => {
    const imageDiv = document.createElement('div');
    const img = document.createElement('img');
    imageDiv.className = 'glimp-product-card__image';
    img.src = src;
    img.alt = alt;

    imageDiv.appendChild(img);
    return imageDiv;
}

const getAddToCartButton = (data: IProductData): HTMLButtonElement => {
    const button = document.createElement('button');
    button.className = 'glimp-product-card__button';
    if (data.is_variation) {
        button.dataset.variation = data.id.toString();
        button.dataset.product = data.parent_id.toString();
    } else {
        button.dataset.product = data.id.toString();
    }

    button.textContent = '+';
    button.addEventListener('click', (evt) => {
        addToCart(evt, button as HTMLButtonElement);
    })
    return button;
}

const getPrice = (data: IProductData): HTMLElement => {
    const priceSpan = document.createElement('span');
    priceSpan.className = 'glimp-product-card__price';
  
    if (data.is_on_sale) {
      const originalPrice = document.createElement('del');
      originalPrice.innerHTML = `<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>${data.regular_price}</bdi></span>`;
      priceSpan.appendChild(originalPrice);
    }
  
    const salePrice = document.createElement('ins');
    salePrice.innerHTML = `<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>${data.price}</bdi></span>`;
    priceSpan.appendChild(salePrice);
  
    return priceSpan;
}

const getBadges = (data: IProductData): HTMLElement => {
    const badgesDiv = document.createElement('div');
    badgesDiv.className = 'wp-block-woocommerce-product-badge';

    if (!data.is_in_stock) {
        const inStockBadge = document.createElement('span');
        inStockBadge.className = 'wc-block-components-product-badge__out-of-stock';
        badgesDiv.appendChild(inStockBadge);
    }

    if (data.nikotinfrai) {
        const nikotinfraiBadge = document.createElement('span');
        nikotinfraiBadge.className = 'wc-block-components-product-badge__nikotinfrai';
        badgesDiv.appendChild(nikotinfraiBadge);
    }

    if (data.is_on_sale) {
        const onSaleBadge = document.createElement('span');
        onSaleBadge.className = 'wc-block-components-product-badge__on-sale';
        badgesDiv.appendChild(onSaleBadge);
    }
    return badgesDiv;
}

const getInfo = (data: IProductData): HTMLElement => {
    const infoDiv = document.createElement('div');
    infoDiv.className = 'glimp-product-card__info';

    const titleH3 = document.createElement('h3');
    titleH3.className = 'glimp-product-card__title';
    titleH3.textContent = data.name;

    const ratingBadge = document.createElement('span');
    ratingBadge.className = 'glimp-product-card__rating';
    ratingBadge.dataset.rating = parseFloat(data.rating).toFixed(1);

    const bottomDiv = document.createElement('div');
    bottomDiv.className = 'glimp-product-card__bottom';

    const priceSpan = getPrice(data);
    const button = getAddToCartButton(data);
    const badges = getBadges(data);

    bottomDiv.appendChild(priceSpan);
    bottomDiv.appendChild(button);

    if (badges.hasChildNodes()) {
        infoDiv.appendChild(badges);
    }

    if (data.rating != '0') {
        infoDiv.appendChild(ratingBadge);
    }

    infoDiv.appendChild(titleH3);
    infoDiv.appendChild(bottomDiv);

    return infoDiv;
}

export function createProductCard(data: IProductData): HTMLElement {
    const article = document.createElement('article');
    article.className = 'glimp-product-card';

    const anchor = document.createElement('a');
    anchor.href = data.link;
    anchor.className = 'glimp-product-card__link';
    anchor.title = data.name;

    const image = getImage(data.image[0], data.name);
    const infoDiv = getInfo(data);

    anchor.appendChild(image);
    anchor.appendChild(infoDiv);
    article.appendChild(anchor);

    return article;
}