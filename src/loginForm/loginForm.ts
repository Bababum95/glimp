import { createPopup } from "../helpers/popup";

const glimpAccount = document.querySelector('.glimp-login');
const openLoginPopup = document.querySelector('.wp-block-glimp-account[data-action="login"]');
const popupElement = document.querySelector('.wp-block-glimp-account__popup');
const popup = popupElement ? createPopup(popupElement as HTMLElement) : null;
const openSimpleLoginPopupButtons = document.querySelectorAll('.wp-block-glimp-page-card__likes[data-action="login"]');

if (glimpAccount) {
    const headings = Array.from(glimpAccount.querySelectorAll('h2'));

    if (headings.length > 0) {
        headings[0].addEventListener('click', () => {
            glimpAccount.classList.remove('flipped');
        });
        headings[1].addEventListener('click', () => {
            glimpAccount.classList.add('flipped');
        });
    }
}

if(openLoginPopup && popup) {
    popup.setEventListeners();
    openLoginPopup.addEventListener('click', () => {
        popupElement?.classList.remove('simple')
        popup.open();
    });
}

if(openSimpleLoginPopupButtons.length > 0 && popup) {
    openSimpleLoginPopupButtons.forEach(button => {
        button.addEventListener('click', (evt) => {
            evt.preventDefault();
            popupElement?.classList.add('simple')
            popup.open();
        });
    });
}