export const handleScroll = (element: Element, className: string = 'hidden') => {
    let prevScrollPos = window.pageYOffset;
    
    window.addEventListener('scroll', () => {
        if (!element) return;
    
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos < 100) {
            element.classList.remove(className);
        } else {
            currentScrollPos > prevScrollPos ? element.classList.add(className) : element.classList.remove(className);
        }
        prevScrollPos = currentScrollPos;
    });

}
