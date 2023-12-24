import { addToCart } from './helpers/addToCart';
import { addToFavorites } from './helpers/addToFavorites';
import { handleScroll } from './helpers/handleScroll';

const addToCartButtons = document.querySelectorAll('button[data-action="add-to-cart"]');
const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');
const header = document.querySelector('header');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        addToCart(evt, button as HTMLButtonElement);
    })
})

addToFavoritesButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        addToFavorites(evt, button as HTMLButtonElement);
    })
})

handleScroll(header as Element);