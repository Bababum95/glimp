export function singleProductAddToCart(form: HTMLFormElement, button: HTMLButtonElement, cartButton: boolean = false) {
	const formData = new FormData(form);
	formData.append(button.getAttribute('name')!, button.getAttribute('value')!);

	const quantity = [...formData.entries()].reduce(
		(total, [key, value]) =>
			total +
			(typeof value === 'string' && key.indexOf('quantity') > -1
				? parseInt(value, 10)
				: 0),
		0
	);

	if (quantity === 0) {
		return;
	}

	button.classList.remove('added');
	button.classList.add('loading');

	fetch(form.action, {
		method: form.getAttribute('method') || 'POST',
		body: formData,
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return response.text()
		})
		.then(() => {
			const event = new Event('wc-blocks_added_to_cart', { bubbles: true, cancelable: true });
			document.body.dispatchEvent(event);
			let goToCartButton = form.querySelector('.go-to-cart-button') as HTMLButtonElement;

			if (!goToCartButton && cartButton) {
				goToCartButton = document.createElement('button');
				goToCartButton.type = 'button';
				goToCartButton.innerText = 'Warenkorb anzeigen';
				goToCartButton.classList.add('go-to-cart-button', 'button');

				goToCartButton.addEventListener('click', () => {
					window.location.href = '/warenkorb';
				});

				button.after(goToCartButton);
			}
		})
		.finally(() => button.classList.remove('loading'))
}
