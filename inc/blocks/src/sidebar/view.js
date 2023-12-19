window.addEventListener('load', function () {
	const links = document.querySelectorAll(
		'.wp-block-glimp-sidebar__navlink'
	);
	if (!links.length) return;
	links.forEach((li) => {
		const link = li.querySelector('a');
		if (!link) return;
		const href = link.getAttribute('href');
		if (href[0] !== '#') return;
		const id = href.substring(1);
		link.addEventListener('click', (event) => {
			event.preventDefault();
			const section = document.getElementById(id);
			window.scrollTo({
				top: section.offsetTop - 140,
				behavior: 'smooth',
			});
		});
	});
});
