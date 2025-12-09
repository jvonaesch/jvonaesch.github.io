
document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener('click', async e => {
        const el = e.target.closest('.copy-on-click');
        if (!el) return;

        const text = el.innerText;

        try {
            await navigator.clipboard.writeText(text);
            el.dataset.copied = 'true';
            setTimeout(() => delete el.dataset.copied, 700);

        } catch (err) {
            console.error('Copy failed:', err);
        }
    });

    document.querySelectorAll('.highlighter-rouge').forEach(elem => {
        elem.classList.add('copy-on-click');
        elem.classList.add('code-block');
    });

    document.querySelectorAll('.copy-on-click').forEach(elem => {
        elem.setAttribute('title', "copy to clipboard");
    })
});

