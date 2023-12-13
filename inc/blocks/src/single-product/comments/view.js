import { createPopup } from '../../assets/utils';
import { createComment } from './createComment';
const popupElement = document.querySelector('.wp-block-glimp-comments__popup');
const popupVerifiedElement = document.querySelector('.wp-block-glimp-comments__popup_verified');
const form = popupElement.querySelector('.wp-block-glimp-comments__popup-form');
const selectDevices = form?.querySelector('.wp-block-glimp-comments__popup-card-select-input');
const authorName = form?.querySelector('input[name="author"]');
const authorEmail = form?.querySelector('input[name="email"]');
const saveName = form?.querySelector('.wp-block-glimp-comments__popup-checkbox-input');
const comment = form?.querySelector('.wp-block-glimp-comments__popup-textarea');
const submitButton = form?.querySelector('.wp-block-glimp-comments__popup-button');
const popupButton = document.querySelector('.wp-block-glimp-comments__ratings-button');
const popupVerifiedButtons = document.querySelectorAll('.wp-block-glimp-comments__comment-approved');
const stars = popupElement.querySelectorAll('.wp-block-glimp-comments__popup-stars-star');
const getRewiewsButton = document.querySelector('.wp-block-glimp-comments__content-button');
const commentsContainer = document.querySelector('.wp-block-glimp-comments__content');
const popup = createPopup(popupElement);
const popupVerified = createPopup(popupVerifiedElement);
const apiUrl = `${window.location.origin}/wp-json/glimp-api/v1`;
const productId = form.getAttribute('data-product');
let rating = 0;

const openPopup = () => {
    if(localStorage.getItem('authorName') && authorName.value === '') {
        authorName.value = localStorage.getItem('authorName');
    }
    if(localStorage.getItem('authorEmail') && authorEmail.value === '') {
        authorEmail.value = localStorage.getItem('authorEmail');
    }
    popup.open();
}

popup.setEventListeners();
popupButton.addEventListener('click', openPopup);

if(popupVerifiedButtons.length > 0) {
    popupVerified.setEventListeners();
    popupVerifiedButtons.forEach(button => {
        button.addEventListener('click', () => {
            popupVerified.open();
        })
    })
}

const selectStar = (evt) => {
    rating = evt.target.getAttribute('data-value');
    stars.forEach(star => {
        const value = star.getAttribute('data-value');
        if (value <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

stars.forEach(star => {
    star.addEventListener('click', selectStar);
});

getRewiewsButton?.addEventListener('click', () => {
    getRewiewsButton.classList.add('loading');
    fetch(`${apiUrl}/get-reviews`, {
        method: 'POST',
        body: JSON.stringify({
            product_id: productId
        })
    }).then(response => {
        return response.json();
    }).then(data => {
        if (data.length > 5) {
            const fragment = document.createDocumentFragment();
            data.splice(0, 5);
            data.forEach(comment => {
              const commentElement = createComment(comment);
              fragment.appendChild(commentElement);
            })
            commentsContainer.appendChild(fragment);
        }
    }).finally(() => {
        getRewiewsButton.classList.remove('loading');
        getRewiewsButton.classList.add('hidden');
    })
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    submitButton.classList.add('loading');
    if(saveName && saveName.checked) {
        localStorage.setItem('authorName', authorName.value);
        localStorage.setItem('authorEmail', authorEmail.value);
    }
    fetch(`${apiUrl}/add-review`, {
        method: 'POST',
        body: JSON.stringify({
            comment_post_ID: productId,
            comment_content: comment.value,
            comment_author: authorName.value,
            comment_author_email: authorEmail.value,
            comment_approved: 0,
            comment_type: 'review',
            comment_meta: {
                rating: rating,
                device: selectDevices?.value || null
            }
        })
    }).finally(() => {
        popup.close();
        submitButton.classList.remove('loading');
        comment.value = '';
    })
})