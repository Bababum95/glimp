const glimpAccount = document.querySelector('.glimp-login');

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
