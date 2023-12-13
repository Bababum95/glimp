const buttons = document.querySelectorAll('.wp-block-glimp-tabs__button');

buttons.forEach((button) => {
    const sectionId = button.textContent.trim().toLowerCase().replace(/\s+/g, '-');
    const section = document.querySelector(`#${sectionId}`);

    button.addEventListener('click', () => {
        const sectionOffset = section.offsetTop;

        window.scrollTo({
            top: sectionOffset,
            behavior: 'smooth'
        });
    });
});
