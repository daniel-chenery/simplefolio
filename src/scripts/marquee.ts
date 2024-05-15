export function initialiseMarquee() {
    const contents = document.querySelectorAll('.marquee .marquee__content');

    contents.forEach(content => {
        const cloned = content.cloneNode(true) as HTMLElement;
        cloned.setAttribute('aria-hidden', 'true');
        cloned.classList.add('marquee__cloned');

        content.insertAdjacentElement('afterend', cloned);
    });
}