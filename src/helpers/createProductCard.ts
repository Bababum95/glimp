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

const getAddToFavoritesButton = (data: IProductData): HTMLElement => {
    const button = document.createElement('button');
    button.className = `add-to-favorites${data.is_favorite ? ' active' : ''}`;
    button.dataset.id = data.id.toString();

    button.innerHTML = `
        <svg width="32px" height="32px" viewBox="0 0 20.00 20.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.49228C11.4641 3.87207 16.5 4.78701 16.5 8.57245C16.5 11.1012 14.3333 13.4103 10 15.5C5.66667 13.4103 3.5 11.1012 3.5 8.57245C3.5 4.78701 8.5359 3.87207 10 6.49228Z" fill="none"/>
        </svg>
    `;

    return button;
};


const getAddToCartButton = (data: IProductData): HTMLButtonElement => {
    const button = document.createElement('button');
    button.className = 'glimp-product-card__button';

    if (!data.is_in_stock) {
        button.classList.add('out-of-stock');
        button.dataset.action = 'permalink';
    } else {
        button.dataset.action = 'add-to-cart';
    }


    if (data.is_variation) {
        button.dataset.variation = data.id.toString();
        button.dataset.product = data.parent_id.toString();
    } else {
        button.dataset.product = data.id.toString();
    }

    if (data.is_variable) {
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2" fill="none">
                <path d="M2 1L-7.45058e-09 1" stroke="#9C48F7" stroke-width="1.5"/>
                <path d="M5 1L3 1" stroke="#9C48F7" stroke-width="1.5"/>
                <path d="M8 1L6 1" stroke="#9C48F7" stroke-width="1.5"/>
            </svg>`;
        button.dataset.action = 'permalink';
    } else {
        button.textContent = '+';
    }

    if (button.dataset.action === 'add-to-cart') {
        button.addEventListener('click', (evt) => {
            addToCart(evt, button as HTMLButtonElement);
        })
    }

    return button;
}

const getPrice = (data: IProductData): HTMLElement => {
    const priceSpan = document.createElement('span');
    priceSpan.className = 'glimp-product-card__price';
    if (data.is_on_sale) {
      const originalPrice = document.createElement('del');
      originalPrice.innerHTML = `<span class="woocommerce-Price-amount amount">
                                    <bdi>
                                        ${data.regular_price}
                                        <span class="woocommerce-Price-currencySymbol">€</span>
                                    </bdi>
                                 </span>`;
      priceSpan.appendChild(originalPrice);
    }

    const salePrice = document.createElement('ins');
    salePrice.innerHTML = `<span class="woocommerce-Price-amount amount">
                            <bdi>
                                ${data.price}
                                <span class="woocommerce-Price-currencySymbol">€</span>
                            </bdi>
                          </span>`;
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

    if (data.is_on_sale && data.is_in_stock) {
        const onSaleBadge = document.createElement('span');
        onSaleBadge.className = 'wc-block-components-product-badge__sale';
        badgesDiv.appendChild(onSaleBadge);
    }
    return badgesDiv;
}

const getCardTop = (data: IProductData) => {
    const cardTop = document.createElement('div');
    cardTop.className = 'glimp-product-card__top';

    if (data.rating != '0') {
        const ratingBadge = document.createElement('span');
        ratingBadge.className = 'glimp-product-card__rating';
        ratingBadge.dataset.rating = parseFloat(data.rating).toFixed(1);    
        cardTop.appendChild(ratingBadge);
    }

    const addToFavoritesButton = getAddToFavoritesButton(data)

    cardTop.appendChild(addToFavoritesButton);

    return cardTop;
}

const getInfo = (data: IProductData): HTMLElement => {
    const infoDiv = document.createElement('div');
    infoDiv.className = 'glimp-product-card__info';

    const cardTop = getCardTop(data);

    const titleH3 = document.createElement('h3');
    titleH3.className = 'glimp-product-card__title';
    titleH3.textContent = data.name;

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

    infoDiv.appendChild(cardTop);
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