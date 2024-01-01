import { handleScroll } from '../assets/utils';
const sidebar = document.querySelector('.wp-block-glimp-sidebar');
const links = document.querySelectorAll('.wp-block-glimp-sidebar__navlink');
const headerHeight = document.querySelector('header').clientHeight;

sidebar.style.setProperty('--header-height-full', `${headerHeight}px`);

handleScroll(sidebar, 'top');

if (links.length) {
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
				top: section.offsetTop - 160,
				behavior: 'smooth',
			});
		});
	});
}