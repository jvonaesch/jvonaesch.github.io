document.addEventListener('DOMContentLoaded', () => {
    const pinnedClass = 'path-bar-pinned';

    const element = document.getElementById('path-bar');
    const toggle = document.getElementById('page-wrapper');
    const placeholder = document.getElementById('path-bar-frame');

    if (!element || !toggle || !placeholder) {
        return;
    }

    const thresholdPx = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--base-margin').trim());

    function fixPathBar() {
        const wrapperRect = toggle.getBoundingClientRect();
        placeholder.style.height = `${element.getBoundingClientRect().height}px`;
        element.style.left = `${wrapperRect.left}px`;
        element.style.width = `${wrapperRect.width}px`;
        element.classList.add(pinnedClass);
    }

    function unfixPathBar() {
        placeholder.style.height = 'fit-content';
        element.style.left = '';
        element.style.width = '';
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

    function onResize() {
        if (element.classList.contains(pinnedClass)) {
            fixPathBar();
        }
        onScroll();
    }

    onScroll();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
});