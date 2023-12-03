const filterItems = document.querySelectorAll('.wp-block-glimp-filters-item__label');


if(filterItems.length > 0) {
    filterItems.forEach(item => {
        item.parentElement.style.setProperty(
            '--height-content', `${item.parentElement.clientHeight}px`
        );
        item.addEventListener('click', () => {
            item.parentElement.classList.toggle('hidden');
        })
    })
}