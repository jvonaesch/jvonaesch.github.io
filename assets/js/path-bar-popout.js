document.addEventListener('DOMContentLoaded', () => {
    const pinnedClass = 'path-bar-pinned';

    const element = document.getElementById('path-bar');
    const toggle = document.getElementById('page-wrapper');
    const placeholder = document.getElementById('path-bar-frame');

    const thresholdPx = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--base-margin').trim());

    function fixPathBar() {
        placeholder.style.height = `${element.getBoundingClientRect().height}px`;
        element.classList.add(pinnedClass);
    }

    function unfixPathBar() {
        placeholder.style.height = 'fit-content';
        element.classList.remove(pinnedClass);
    }

    function onScroll() {
        const rect = toggle.getBoundingClientRect();

        if (rect.top <= thresholdPx) {
            if (!element.classList.contains(pinnedClass)) fixPathBar();
        }
        else {
            if (element.classList.contains(pinnedClass)) unfixPathBar()
        }
    }

    onScroll();
    window.addEventListener('scroll', onScroll);
});