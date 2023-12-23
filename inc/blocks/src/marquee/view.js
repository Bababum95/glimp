import metadata from './block.json';

if(metadata.attributes.canClose) {
    const closeButton = document.querySelector('.wp-block-glimp-marquee__close');
    const marquee = document.querySelector('.wp-block-glimp-marquee');
    closeButton.addEventListener('click', () => {
        marquee.classList.add('hide');
    })
}