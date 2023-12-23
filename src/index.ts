import { addToCart } from './helpers/addToCart';
import { addToFavorites } from './helpers/addToFavorites';
const addToCartButtons = document.querySelectorAll('button[data-action="add-to-cart"]');
const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');
const header = document.querySelector('header');

let prevScrollPos = window.pageYOffset;

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

window.addEventListener('scroll', () => {
    if (!header) return;

    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 100) {
        header.classList.remove('hidden');
    } else {
        currentScrollPos > prevScrollPos ? header.classList.add('hidden') : header.classList.remove('hidden');
    }
    prevScrollPos = currentScrollPos;
});