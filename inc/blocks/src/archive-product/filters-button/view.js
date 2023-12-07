const filters = document.querySelector('.wp-block-glimp-filters')
const button = document.querySelector('.wp-block-glimp-filters-button')

const closeFilters = (evt) => {
    if(evt.target.classList.contains('open') || evt.target.classList.contains('wp-block-glimp-filters__close')) {
        filters?.classList.remove('open')
        document.removeEventListener('click', closeFilters)
    }
}

button?.addEventListener('click', () => {
    filters?.classList.add('open')
    document.addEventListener('click', closeFilters)
})