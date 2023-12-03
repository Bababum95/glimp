import { addToCart as fetch } from './api';

export const addToCart = (evt: Event, button: HTMLButtonElement) => {
    if (button.getAttribute('data-action') === 'add-to-cart') {
        evt.preventDefault();
        const id = button.getAttribute('data-product') as string;
        const variationId = button.getAttribute('data-variation');
        fetch(id, 1, variationId)
            .then(() => {
                const event = new Event('wc-blocks_added_to_cart', { bubbles: true, cancelable: true });
                document.body.dispatchEvent(event);
            });
    }
}