export function createPopup(popup: HTMLElement) {
    const handleEscape = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
            close();
        }
    };

    const close = () => {
        popup.classList.remove('open');
        document.querySelector('body')?.classList.remove('no-scroll');
        document.removeEventListener('keydown', handleEscape);
    };

    const open = () => {
        popup.classList.add('open');
        document.querySelector('body')?.classList.add('no-scroll');
        document.addEventListener('keydown', handleEscape);
    };

    const setEventListeners = () => {
        popup.addEventListener('click', (evt: MouseEvent) => {
            if ((evt.target as Element).classList.contains('open')) {
                close();
            }
        });
    };

    return { open, close, setEventListeners };
}
