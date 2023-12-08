import { createPopup } from "../helpers/popup";

const glimpAccount = document.querySelector('.glimp-login');
const openLoginPopup = document.querySelector('.wp-block-glimp-account[data-action="login"]');
const popupElement = document.querySelector('.wp-block-glimp-account__popup');
const popup = popupElement ? createPopup(popupElement as HTMLElement) : null;

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

// popupElement?.addEventListener('click', () => {
//     console.log(popupElement)
// })

if(openLoginPopup && popup) {
    popup.setEventListeners();
    openLoginPopup.addEventListener('click', () => {
        popup.open();
    });
}
