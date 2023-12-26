import { handlePageLikeButton } from '../../assets/utils';

const button = document.querySelector('.wp-block-glimp-social-actions-panel__likes');


button.addEventListener('click', () => {
    handlePageLikeButton(button);
})