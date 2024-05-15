import ScrollReveal from 'scrollreveal';

export default function initScrollReveal(
  targetElements: Array<{ element: string, animation: scrollReveal.ScrollRevealObjectOptions }>,
  defaultProps: scrollReveal.ScrollRevealObjectOptions) {
  if (!targetElements.length) return;

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}
