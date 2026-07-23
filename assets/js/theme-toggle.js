(() => {
    const themeKey = 'theme';
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // read theme from local storage, return null if not set or invalid
    const readSavedTheme = () => {
        try {
            const theme = localStorage.getItem(themeKey);
            return theme === 'light' || theme === 'dark' ? theme : null;
        } catch (error) {
            return null;
        }
    };

    // set data-theme
    const applyTheme = (theme) => {
        
        root.dataset.theme = theme;
        root.style.colorScheme = theme;
    };

    // get data-theme
    const getTheme = () => root.dataset.theme === 'dark' ? 'dark' : 'light';

    // set theme, optionally via button and persist to local storage
    const setTheme = (button, theme, persist = false) => {
        applyTheme(theme);

        // create label text
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        const label = `Switch to ${nextTheme} mode`;

        // apply label text to button
        if (button) {
            button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
            button.setAttribute('aria-label', label);
            button.setAttribute('title', label);
        }
        
        // save theme
        if (persist) {
            try {
                localStorage.setItem(themeKey, theme);
            } catch (error) {}
        }
    };

    window.ThemeToggle = {
        toggle(button) {
            setTheme(button, getTheme() === 'dark' ? 'light' : 'dark', true);
        }
    };

    applyTheme(readSavedTheme() || (prefersDark.matches ? 'dark' : 'light'));
})();