const linksElements = document.querySelectorAll('.wp-block-glimp-page-card__link');

if (linksElements) {
    linksElements.forEach(link => {
        const commentsButton = link.querySelector('.wp-block-glimp-page-card__comments');
        commentsButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            window.location.href = link.href + '#comments';
        })
    })
}