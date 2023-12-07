import { addPageLike, removePageLike } from '../assets/utils';

const likeButtons = document.querySelectorAll('button[data-action="like"]');

likeButtons.forEach(button => {
    const postId = button.getAttribute('data-post-id');
    button.addEventListener('click', (evt) => {
        evt.preventDefault();

        if(button.classList.contains('active')) {
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
});
