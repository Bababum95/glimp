import { addPageLike, removePageLike } from './index';

export const handlePageLikeButton = (button) => {
    if (button.hasAttribute('data-listener-attached')) return;

    button.setAttribute('data-listener-attached', true);
    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        const postId = button.getAttribute('data-post-id');
    
        if (button.classList.contains('active')) {
            button.classList.remove('active');
            removePageLike(postId)
                .then((data) => {
                    button.textContent = data.data.likes_count;
                })
                .catch(() => {
                    button.classList.add('active');
                })
        } else {
            button.classList.add('active');
            addPageLike(postId)
                .then((data) => {
                    button.textContent = data.data.likes_count;
                })
                .catch(() => {
                    button.classList.remove('active');
                })
        }
    });
}
