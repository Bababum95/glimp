import { addToCart as fetch } from './api';

const noticeAddedToCart = () => {
    const notice = document.createElement('div');
    const noticeText = document.createElement('p');
    const noticeMark = document.createElement('span');
    notice.className = 'notice-added-to-cart';
    noticeText.textContent = 'Produkt wurde in den Warenkorb gelegt';
    notice.appendChild(noticeMark);
    notice.appendChild(noticeText);
    document.body.appendChild(notice);
    setTimeout(() => {
        notice.remove();
    }, 3000);
}

export const addToCart = (evt: Event, button: HTMLButtonElement) => {
    evt.preventDefault();
    const id = button.getAttribute('data-product') as string;
    const variationId = button.getAttribute('data-variation');
    button.classList.remove('added');
    button.classList.add('loading');
    fetch(id, 1, variationId)
        .then(() => {
            const event = new Event('wc-blocks_added_to_cart', { bubbles: true, cancelable: true });
            document.body.dispatchEvent(event);
            noticeAddedToCart();
            button.classList.add('added');
        })
        .finally(() => {
            button.classList.remove('loading');
        })
}
