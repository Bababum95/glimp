import metadata from './block.json';

if(metadata.attributes.canClose) {
    const closeButton = document.querySelector('.wp-block-glimp-marquee__close');
    const marquee = document.querySelector('.wp-block-glimp-marquee__main');
    closeButton.addEventListener('click', () => {
        marquee.style.display = 'none';
    })
}