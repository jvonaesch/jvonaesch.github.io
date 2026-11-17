(() => {
    const themeStyleId = 'site-notebook-theme';
    const themeStylesheet = new URL('../css/notebook-theme.css', document.currentScript.src).href;
    const sharedThemeVariables = [
        '--bg-base', '--bg-ui', '--bg-accent', '--bg-code',
        '--text', '--subtle-text', '--title', '--code'
    ];

    const syncIframe = (iframe, theme) => {
        try {
            const documentElement = iframe.contentDocument.documentElement;
            const parentStyles = getComputedStyle(document.documentElement);
            let style = iframe.contentDocument.getElementById(themeStyleId);

            if (!style) {
                style = iframe.contentDocument.createElement('link');
                style.id = themeStyleId;
                style.rel = 'stylesheet';
                style.href = themeStylesheet;
                iframe.contentDocument.head.appendChild(style);
            }

            documentElement.dataset.siteTheme = theme;
            sharedThemeVariables.forEach((variable) => {
                documentElement.style.setProperty(variable, parentStyles.getPropertyValue(variable));
            });
        } catch (error) {
            console.warn('Could not sync notebook theme:', error);
        }
    };

    const syncNotebooks = (theme = document.documentElement.dataset.theme) => {
        document.querySelectorAll('.notebook-embed').forEach((iframe) => {
            if (iframe.contentDocument?.readyState === 'complete') {
                syncIframe(iframe, theme);
            }

            iframe.addEventListener('load', () => syncIframe(iframe, theme), { once: true });
        });
    };

    window.addEventListener('site-theme-change', (event) => {
        syncNotebooks(event.detail.theme);
    });

    syncNotebooks();
})();