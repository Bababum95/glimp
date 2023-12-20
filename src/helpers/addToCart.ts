import { addToCart as fetch } from './api';

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
            button.classList.add('added');
        })
        .finally(() => {
            button.classList.remove('loading');
        })
}
