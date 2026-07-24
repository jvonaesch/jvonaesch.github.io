
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('[class^="language-"]').forEach(div => {
        div.classList.add('copyable-block');
        div.classList.add('code-block');
    });

    fetch('/assets/html/copy-button.html')
        .then(response => response.text())
        .then(html => {
            const template = document.createElement('template');
            template.innerHTML = html.trim();

            document.querySelectorAll('.copyable-block').forEach(copyable => {
                const button = template.content.firstElementChild.cloneNode(true);
                
                button.addEventListener('click', async () => {
                    try {
                        const codeEl = copyable.querySelector('code');
                        const textToCopy = codeEl ? codeEl.innerText : copyable.innerText;
                        await navigator.clipboard.writeText(textToCopy);

                        button.classList.add('is-copied');

                        setTimeout(() => button.classList.remove('is-copied'), 2000);
                    } catch (err) {
                        console.error('Failed to copy: ', err);
                    }
                });

                copyable.appendChild(button);
            });
        });
});

