const buttonShare = document.querySelector('.wp-block-glimp-share__button');
const buttonCopyLink = document.querySelector('.wp-block-glimp-share__copy');

const closePopup = (evt) => {
    if(
        evt.target.classList.contains('open')
        || evt.target.classList.contains('wp-block-glimp-share__copy')
        || evt.target.classList.contains('wp-block-glimp-share__link')
    ) return;
    buttonShare.parentElement.classList.remove('open');
    document.removeEventListener('click', closePopup);
}

buttonShare.addEventListener('click', (evt) => {
    evt.stopPropagation();
    buttonShare.parentElement.classList.toggle('open');
    if(buttonShare.parentElement.classList.contains('open')) {
        document.addEventListener('click', closePopup);
    }
})

buttonCopyLink.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
})
