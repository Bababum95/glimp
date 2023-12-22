import { createPopup } from '../assets/utils';

const popupVerifiedElement = document.querySelector('.wp-block-glimp-verified-popup');
const popupVerifiedButtons = document.querySelectorAll('span[data-type="open-verified-popup"]');
const popupVerified = createPopup(popupVerifiedElement);

if(popupVerifiedButtons.length > 0) {
    popupVerified.setEventListeners();
    popupVerifiedButtons.forEach(button => {
        button.addEventListener('click', () => {
            popupVerified.open();
        });
    });
};
