import { 
    removeFromFavorites,
    addToFavorites as fetchAddToFavorites,
} from './api';

export const addToFavorites = (evt: Event, button: HTMLButtonElement) => {
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
        fetchAddToFavorites(id)
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
                button.classList.remove('active')
            })
    }
}