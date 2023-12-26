import { throttle } from '../helpers/throttle';
import { singleProductAddToCart } from './singleProductAddToCart';
import { initThumbnails } from './thumbnails';

const formwrapper = document.querySelector('.wp-block-add-to-cart-form');
const form = formwrapper?.querySelector('form');
const button = form?.querySelector('button.button') as HTMLButtonElement;
const tabButton = document.querySelector('.wp-block-glimp-tabs__add-to-cart')
const largeImageContainer = document.querySelector('.wc-block-product-gallery-large-image__container');
const thumbnailsContainer = document.querySelector('.wc-block-product-gallery-thumbnails');
const quantity = form?.querySelectorAll('.quantity');


quantity?.forEach((el) => {
	const input = el.querySelector('input');
	const quantityDecrease = el.querySelector('.quantity__decrease');
	const quantityIncrease = el.querySelector('.quantity__increase');
	quantityDecrease?.addEventListener('click', () => {
		input!.value = Math.max((parseInt(input!.value, 10) - 1), 1).toString();
	})
	quantityIncrease?.addEventListener('click', () => {
		input!.value = (parseInt(input!.value, 10) + 1).toString();
	})
})

if (largeImageContainer && thumbnailsContainer) {
	const scrollThumbnail = initThumbnails(thumbnailsContainer as HTMLElement);

	if (typeof scrollThumbnail === 'function') {
		const setThumbnail = () => {
			const currentImageIndex = Math.round(largeImageContainer.scrollLeft / largeImageContainer.clientWidth);
			scrollThumbnail(currentImageIndex);
		};
		largeImageContainer.addEventListener('scroll', throttle(setThumbnail, 300));
	}
}

form?.addEventListener('submit', (e) => {
	e.preventDefault()
	singleProductAddToCart(form, button, true);
});


if (tabButton && form && button) {
	const name = button.getAttribute('name')
	const value = button.getAttribute('value')
	if(name) tabButton.setAttribute('name', name)
	if(value) tabButton.setAttribute('value', value)

	tabButton.addEventListener('click', () => {
		if (!button.classList.contains('disabled')) {
			singleProductAddToCart(form, tabButton as HTMLButtonElement);
		} else {
			const currentPosition = window.scrollY || document.documentElement.scrollTop;

			window.scrollTo({
				top: form.getBoundingClientRect().top + currentPosition - 160,
				behavior: 'smooth'
			});
		}
	})
}