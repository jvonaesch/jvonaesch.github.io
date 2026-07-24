document.addEventListener('DOMContentLoaded', () => {
    const pinnedClass = 'path-bar-pinned';

    const element = document.getElementById('path-bar');
    const nav = document.getElementById('path-bar__nav');
    const toggle = document.getElementById('page-wrapper');
    const placeholder = document.getElementById('path-bar-frame');

    const thresholdPx = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--base-margin').trim());

    function fixPathBar() {
        placeholder.style.height = `${element.getBoundingClientRect().height}px`;
        element.classList.add(pinnedClass);
        nav.classList.add('path-bar__nav-pinned');
    }

    function unfixPathBar() {
        placeholder.style.height = 'fit-content';
        element.classList.remove(pinnedClass);
        nav.classList.remove('path-bar__nav-pinned');
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