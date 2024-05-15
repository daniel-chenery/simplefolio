const target = document.querySelector('[href="#list-view"]');
target?.addEventListener('click', () => {
    document.querySelector('skill__list')?.classList.add('skill__list--stacked');
});