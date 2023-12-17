import { handlePageLikeButton } from '../../assets/utils';

const likeButtons = document.querySelectorAll('button[data-action="like"]');
const commentButtons = document.querySelectorAll('.wp-block-glimp-page-card__comments');

likeButtons.forEach(button => {
    handlePageLikeButton(button);
});

commentButtons.forEach(button => {
    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        window.location.href = button.getAttribute('data-href');
    })
})