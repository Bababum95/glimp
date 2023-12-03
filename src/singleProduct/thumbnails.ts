let thumbnailsContainer: HTMLElement;
let thumbnails: HTMLElement[];
let currentPosition = 0;
let currentImageIndex = 0;

function scrollThumbnail(currentIndex: number) {
    currentImageIndex = currentIndex;
    setCurrentPosition(currentImageIndex * 122);
    thumbnails.forEach((thumbnail, index) => {
      setPosition(thumbnail);
      setActive(thumbnail, index);
    });
  }

export function initThumbnails(container: HTMLElement) {
  thumbnailsContainer = container;
  thumbnails = Array.from(thumbnailsContainer.querySelectorAll('.wc-block-product-gallery-thumbnails__thumbnail'));
  if (thumbnails.length === 0) return false;
  thumbnails[0].classList.add('active');
  createScrollButton('top');
  createScrollButton('bottom');

  return scrollThumbnail;
}

function setCurrentPosition(position: number) {
    currentPosition = Math.min(position, thumbnailsContainer.scrollHeight - thumbnailsContainer.clientHeight);
}

function setPosition(thumbnail: HTMLElement) {
  thumbnail.style.transform = `translateY(-${currentPosition}px)`;
}

function setActive(thumbnail: HTMLElement, index: number) {
    thumbnail.classList.toggle('active', index === currentImageIndex);
}

function setEventListeners(button: HTMLButtonElement, type: 'top' | 'bottom') {
  button.addEventListener('click', () => {
    const offset = type === 'top' ? -122 : 122;
    setCurrentPosition(Math.max(currentPosition + offset, 0))
    thumbnails.forEach((thumbnail) => {
        setPosition(thumbnail);
	});
  });
}

function createScrollButton(type: 'top' | 'bottom') {
  const button = document.createElement('button');
  button.classList.add(`button-scroll-${type}`);
  setEventListeners(button, type);
  thumbnailsContainer.append(button);
}
