
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('[class^="language-"]').forEach(div => {
        div.classList.add('copyable-block');
        div.classList.add('code-block');
    });

    const copyableDivs = document.querySelectorAll('.copyable-block');
    copyableDivs.forEach(div => {

        const button = document.createElement('button');
        button.textContent = 'Copy';
        button.className = 'copy-button';
        button.setAttribute('title', "copy code to clipboard")

        div.style.position = 'relative';
        div.appendChild(button);

        button.addEventListener('click', async () => {
            try {
                const codeEl = div.querySelector('code');
                const textToCopy = codeEl ? codeEl.innerText : div.innerText;
                await navigator.clipboard.writeText(textToCopy);

                div.dataset.copied = 'true';
                button.textContent = 'Copied'
                setTimeout(() => delete div.dataset.copied, 1000);
                setTimeout(() => button.textContent = "Copy", 2000);

            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        });
    });


});

