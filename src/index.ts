import { addToCart } from './helpers/addToCart';
import { addToFavorites, removeFromFavorites } from './helpers/api';
const addToCartButtons = document.querySelectorAll('button[data-action="add-to-cart"]');
const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        addToCart(evt, button as HTMLButtonElement);
    })
})

addToFavoritesButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        evt.preventDefault()
        const id = button.getAttribute('data-id')
        if (!id) return
        if (button.classList.contains('active')) {
            button.classList.remove('active')
            removeFromFavorites(id)
                .then((data) => {
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                    button.classList.add('active')
                })
        } else {
            button.classList.add('active')
            addToFavorites(id)
                .then((data) => {
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                    button.classList.remove('active')
                })
        }
    })
})
