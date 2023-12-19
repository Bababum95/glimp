const startLoading = (cardLoader: Element, container: Element, count = 4) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
        const clonedLoader = cardLoader.cloneNode(true);
        fragment.appendChild(clonedLoader);
    }

    container.appendChild(fragment);
};

const endLoading = (container: Element, loaderSelector = '.wp-block-glimp-loader__card') => {
    const loaders = container.querySelectorAll(loaderSelector);
    loaders?.forEach(loader => {
        loader.remove();
    });
}

export { startLoading, endLoading }