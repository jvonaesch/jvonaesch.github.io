document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.spoiler').forEach((spoiler, index) => {
        const title = spoiler.firstElementChild;

        if (!title) {
            return;
        }

        const content = Array.from(spoiler.children).slice(1);
        const contentId = `spoiler-content-${index}`;
        const toggle = document.createElement('button');

        toggle.className = 'spoiler__toggle';
        toggle.type = 'button';
        toggle.setAttribute('aria-label', 'Show spoiler');
        toggle.setAttribute('aria-expanded', 'false');

        if (content.length > 0) {
            const contentWrapper = document.createElement('div');
            contentWrapper.id = contentId;
            contentWrapper.className = 'spoiler__content';

            content.forEach(element => contentWrapper.appendChild(element));
            spoiler.appendChild(contentWrapper);
            toggle.setAttribute('aria-controls', contentId);
        }

        toggle.addEventListener('click', () => {
            const isOpen = spoiler.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(isOpen));
            toggle.setAttribute('aria-label', isOpen ? 'Hide spoiler' : 'Show spoiler');
        });

        spoiler.insertBefore(toggle, title);
    });
});
