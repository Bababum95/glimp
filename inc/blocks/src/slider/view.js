const sliders = document.querySelectorAll('.wp-block-glimp-slider');

sliders?.forEach((slider) => {
    const buttons = slider.querySelectorAll('.wp-block-glimp-slider__button');
    const wrapper = slider.querySelector('.wp-block-glimp-slider__wrapper');
    if(!wrapper || wrapper.children.length <= 1) {
        return;
    }
    const offset = wrapper?.children[0].clientWidth + parseFloat(window.getComputedStyle(wrapper).gap);

    const checkShowButton = (x) => {
        buttons.forEach((button) => {
            if (button.classList.contains('left')) {
                wrapper.scrollLeft + x <= 0  ? button.classList.add('hide') : button.classList.remove('hide');
            } else {
                wrapper.scrollWidth <= wrapper.scrollLeft + wrapper.clientWidth + x
                    ? button.classList.add('hide')
                    : button.classList.remove('hide');
            }
        })
    }

    if (buttons.length > 0) {
        buttons.forEach((button) => {
            checkShowButton(0);
            button.addEventListener('click', () => {
                if (button.classList.contains('left')) {
                    wrapper.scrollLeft -= offset;
                    checkShowButton(-offset);
                } else {
                    wrapper.scrollLeft += offset;
                    checkShowButton(offset);
                }
            })
        })
    }
})