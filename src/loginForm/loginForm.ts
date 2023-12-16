import { createPopup } from "../helpers/popup";
import { auth, forgotPassword } from "../helpers/api";

const glimpAccounts = document.querySelectorAll('.glimp-login');
const loginForms = document.querySelectorAll('.glimp-login__form');
const openLoginPopup = document.querySelector('.wp-block-glimp-account[data-action="login"]');
const popupElement = document.querySelector('.wp-block-glimp-account__popup');
const popup = popupElement ? createPopup(popupElement as HTMLElement) : null;
const openSimpleLoginPopupButtons = document.querySelectorAll('.wp-block-glimp-page-card__likes[data-action="login"]');

if (glimpAccounts.length > 0) {
    glimpAccounts.forEach(glimpAccount => {
        const headings = Array.from(glimpAccount.querySelectorAll('h2'));
        const forgotButton = glimpAccount.querySelector('.glimp-login__forgot');
        const backButton = glimpAccount.querySelector('.glimp-login__back');

        if (headings.length > 0) {
            headings[0].addEventListener('click', () => {
                glimpAccount.classList.remove('flipped');
            });
            headings[1].addEventListener('click', () => {
                glimpAccount.classList.add('flipped');
            });
        }

        if (forgotButton) {
            forgotButton.addEventListener('click', () => {
                glimpAccount.classList.add('forgot');
            });
        }

        if (backButton) {
            backButton.addEventListener('click', () => {
                glimpAccount.classList.remove('forgot');
            });
        }
    })
}

if (openLoginPopup && popup) {
    popup.setEventListeners();
    openLoginPopup.addEventListener('click', () => {
        popupElement?.classList.remove('simple')
        popup.open();
    });
}

if (openSimpleLoginPopupButtons.length > 0 && popup) {
    openSimpleLoginPopupButtons.forEach(button => {
        button.addEventListener('click', (evt) => {
            evt.preventDefault();
            popupElement?.classList.add('simple')
            popup.open();
        });
    });
}

const handleError = (error: string, form: HTMLFormElement) => {
    const errorElement = form.querySelector('.glimp-login__error') as HTMLElement;
    const errorMessage = errorElement.querySelector('.glimp-login__error-message') as HTMLElement;
    errorMessage.innerHTML = error;
    errorElement.classList.add('show');
}

const loading = (button: HTMLButtonElement) => {
    button.disabled = true;
    button.classList.add('loading');
}

const loaded = (button: HTMLButtonElement) => {
    button.disabled = false;
    button.classList.remove('loading');
}

const handleSubmit = (form: HTMLFormElement, type: string, button: HTMLButtonElement) => {
    const formData = new FormData(form);
    loading(button);
    auth(formData, type)
        .then(() => {
            window.location.reload();
        })
        .catch((err) => {
            loaded(button);
            if (err.error) {
                handleError(err.error, form)
            }
        })
}

const handleForgotPassword = (button: HTMLButtonElement, form: HTMLFormElement) => {
    const input = form.querySelector('input') as HTMLInputElement;
    const notice = form.querySelector('.glimp-login__notice') as HTMLElement;

    loading(button);
    forgotPassword(input.value)
        .then(() => {
            notice.classList.add('show');
        })
        .catch((err) => {
            if (err.error) {
                handleError(err.error, form)
            }
        })
        .finally(() => {
            loaded(button);
        })
}

if (loginForms.length > 0) {
    loginForms.forEach(form => {
        const button = form.querySelector('.glimp-login__submit');
        const type = form.getAttribute('data-type');

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            if (form instanceof HTMLFormElement && button instanceof HTMLButtonElement && type) {
                if (type === 'lost-password') {
                    handleForgotPassword(button, form)
                    return;
                }
                handleSubmit(form, type, button);
            }
        })
    });
}
