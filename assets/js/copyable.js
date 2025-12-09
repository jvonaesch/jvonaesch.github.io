
document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener('click', async e => {
        const el = e.target.closest('.highlighter-rouge');
        if (!el) return;

        const text = el.innerText;

        try {
            await navigator.clipboard.writeText(text);
            el.dataset.copied = 'true';
            setTimeout(() => delete el.dataset.copied, 1500);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    });
});
