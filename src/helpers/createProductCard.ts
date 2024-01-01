import { IProductData } from "../interfaces";
import { addToCart } from "./addToCart";

type CardType = 'simple' | 'big';

type ClassNames = {
    [key in 'simple' | 'big']: {
        card: string,
        bottom: string,
        rating: string,
        button: string
    };
};

const buttonContent = {
    simple: {
        variable:   `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2" fill="none">
                        <path d="M2 1L-7.45058e-09 1" stroke="#9C48F7" stroke-width="1.5"/>
                        <path d="M5 1L3 1" stroke="#9C48F7" stroke-width="1.5"/>
                        <path d="M8 1L6 1" stroke="#9C48F7" stroke-width="1.5"/>
                    </svg>`,
        single: '+'
    },
    big: {
        variable:   `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2" fill="none">
                        <path d="M2 1L-7.45058e-09 1" stroke="#9C48F7" stroke-width="1.5"/>
                        <path d="M5 1L3 1" stroke="#9C48F7" stroke-width="1.5"/>
                        <path d="M8 1L6 1" stroke="#9C48F7" stroke-width="1.5"/>
                    </svg>`,
        single: 'In den Warenkorb'
    },
    like:   `<svg width="32px" height="32px" viewBox="0 0 20.00 20.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.49228C11.4641 3.87207 16.5 4.78701 16.5 8.57245C16.5 11.1012 14.3333 13.4103 10 15.5C5.66667 13.4103 3.5 11.1012 3.5 8.57245C3.5 4.78701 8.5359 3.87207 10 6.49228Z" fill="none"/>
            </svg>`
}

const classNames: ClassNames = {
    simple: {
        card: 'glimp-product-card',
        bottom: 'glimp-product-card__bottom',
        rating: 'glimp-product-card__rating',
        button: 'glimp-product-card__button',
    },
    big: {
        card: 'glimp-product-big-card',
        bottom: 'glimp-product-big-card__main',
        rating: 'glimp-product-big-card__rating',
        button: 'glimp-product-big-card__button',

    }
}

const getImage = (src: string, alt: string, defaultClass: string): HTMLElement => {
    const imageDiv = document.createElement('div');
    const img = document.createElement('img');
    imageDiv.className = `${defaultClass}__image`;
    img.src = src;
    img.alt = alt;

    imageDiv.appendChild(img);
    return imageDiv;
}

function generateTables(data: { [key: string]: string[] }): HTMLTableElement[] {
    const tables: HTMLTableElement[] = [];
    const keys = Object.keys(data);
    const firstTableData = keys.slice(0, 4).reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
    }, {} as { [key: string]: string[] });
    
    if (keys.length > 4) {
        const secondTableData = keys.slice(4).reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {} as { [key: string]: string[] });

        tables.push(createTable(firstTableData));
        tables.push(createTable(secondTableData));
    } else {
        tables.push(createTable(firstTableData));
    }

    return tables;
}

function createTable(data: { [key: string]: string[] }): HTMLTableElement {
    const table = document.createElement('table');
    table.classList.add('glimp-product-big-card__table');

    for (const label in data) {
        if (data.hasOwnProperty(label)) {
            const values = data[label];
            const row = table.insertRow();

            const labelCell = row.insertCell();
            labelCell.classList.add('glimp-product-big-card__table-label');
            labelCell.textContent = label;

            const valueCell = row.insertCell();
            valueCell.classList.add('glimp-product-big-card__table-value');
            valueCell.textContent = values.join(', ');
        }
    }

    return table;
}


const getAddToFavoritesButton = (data: IProductData): HTMLElement => {
    const button = document.createElement('button');
    button.className = `add-to-favorites${data.is_favorite ? ' active' : ''}`;
    button.dataset.id = data.id.toString();
    button.innerHTML = buttonContent.like;

    return button;
};


const getAddToCartButton = (data: IProductData, type: CardType): HTMLButtonElement => {
    const button = document.createElement('button');
    button.className = classNames[type].button;

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
        button.innerHTML = buttonContent[type].variable;
        button.dataset.action = 'permalink';
    } else {
        button.textContent = buttonContent[type].single;
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
                                        ${data.regular_price.replace('.', ',')} <!-- Заменяем точку на запятую -->
                                        <span class="woocommerce-Price-currencySymbol">€</span>
                                    </bdi>
                                 </span>`;
        priceSpan.appendChild(originalPrice);
    }

    const salePrice = document.createElement('ins');
    salePrice.innerHTML = `<span class="woocommerce-Price-amount amount">
                            <bdi>
                                ${data.price.replace('.', ',')} <!-- Заменяем точку на запятую -->
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

    if (data.nikotinfrei) {
        const nikotinfreiBadge = document.createElement('span');
        nikotinfreiBadge.className = 'wc-block-components-product-badge__nikotinfrei';
        badgesDiv.appendChild(nikotinfreiBadge);
    }

    if (data.is_on_sale && data.is_in_stock) {
        const onSaleBadge = document.createElement('span');
        onSaleBadge.className = 'wc-block-components-product-badge__sale';
        badgesDiv.appendChild(onSaleBadge);
    }
    return badgesDiv;
}

const getCardTop = (data: IProductData, type: CardType) => {
    const cardTop = type === 'simple'? document.createElement('div') : document.createDocumentFragment();
    if(cardTop instanceof HTMLDivElement) cardTop.className = 'glimp-product-card__top';

    if (data.rating != '0') {
        const ratingBadge = document.createElement('span');
        ratingBadge.className = classNames[type].rating;
        ratingBadge.dataset.rating = parseFloat(data.rating).toFixed(1);    
        cardTop.appendChild(ratingBadge);
    }

    const addToFavoritesButton = getAddToFavoritesButton(data)

    cardTop.appendChild(addToFavoritesButton);

    return cardTop;
}

const getInfo = (data: IProductData, type: CardType): HTMLElement => {
    const defaultClass = classNames[type].card;

    const infoDiv = document.createElement('div');
    infoDiv.className = `${defaultClass}__info`;

    const cardTop = getCardTop(data, type);

    const titleH3 = document.createElement('h3');
    titleH3.className = `${defaultClass}__title`;
    titleH3.textContent = data.name;

    const bottomDiv = document.createElement('div');
    bottomDiv.className = classNames[type].bottom;

    const priceSpan = getPrice(data);
    const button = getAddToCartButton(data, type);
    const badges = getBadges(data);
    const cardRight = type === 'big'? document.createElement('div') : document.createDocumentFragment();
    if (cardRight instanceof HTMLDivElement) cardRight.className = 'glimp-product-big-card__right';

    if (type === 'big') {
        infoDiv.appendChild(titleH3);
        const cardLeft = document.createElement('div');
        cardLeft.className = 'glimp-product-big-card__left';
        if (data.table) {
            const tables = generateTables(data.table);
            tables.forEach((table) => {
                cardLeft.appendChild(table);
            })
        }

        bottomDiv.appendChild(cardLeft);
    }

    if (badges.hasChildNodes()) {
        infoDiv.appendChild(badges);
    }

    infoDiv.appendChild(cardTop);

    if (type === 'simple') {
        infoDiv.appendChild(titleH3);
    }

    cardRight.appendChild(priceSpan);
    cardRight.appendChild(button);
    bottomDiv.appendChild(cardRight);
    infoDiv.appendChild(bottomDiv);

    return infoDiv;
}

export function createProductCard(data: IProductData, type: CardType = 'simple'): HTMLElement {
    const article = document.createElement('article');
    const defaultClass = classNames[type].card;
    article.className = defaultClass;

    const anchor = document.createElement('a');
    anchor.href = data.link;
    anchor.className = `${defaultClass}__link`;
    anchor.title = data.name;

    const image = getImage(data.image[0], data.name, defaultClass);
    const infoDiv = getInfo(data, type);

    anchor.appendChild(image);
    anchor.appendChild(infoDiv);
    article.appendChild(anchor);

    return article;
}