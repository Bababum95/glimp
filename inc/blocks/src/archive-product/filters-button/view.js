const filters = document.querySelector('.wp-block-glimp-filters')
const popupContainer = filters?.querySelector('.wp-block-glimp-filters__container')
const button = document.querySelector('.wp-block-glimp-filters-button')
const resizer = document.querySelector('.wp-block-glimp-filters__resizer')
let isResizing = false;

const handleCloseFilters = (evt) => {
    if(evt.target.classList.contains('open') || evt.target.classList.contains('wp-block-glimp-filters__close')) {
        close()
    }
}

const close = () => {
    filters?.classList.remove('open')
    document.removeEventListener('click', handleCloseFilters)
}

button?.addEventListener('click', () => {
    filters?.classList.add('open')
    document.addEventListener('click', handleCloseFilters)
    
    if (window.innerWidth < 480) {
        popupContainer.style.top = '20px';
    }
})

resizer.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isResizing = true;
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', stopResize, { passive: false });
});

function handleMove(e) {
    if (!isResizing) {
        return;
    }
    let touchY = e.touches[0].clientY;
    if(touchY < 0) {
        touchY = 0
    }
    popupContainer.style.top = `${touchY}px`;
}

function stopResize() {
    isResizing = false;
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', stopResize);

    if (parseInt(popupContainer.style.top, 10) > 200) {
        close();
    }
}
