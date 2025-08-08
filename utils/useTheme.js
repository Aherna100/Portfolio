import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    const onToggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    const isDarkTheme = (theme === 'dark');

    return { isDarkTheme, onToggleTheme, theme }
}