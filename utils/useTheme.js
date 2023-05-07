import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme]);

    const onToggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    const isDarkTheme = (theme === 'dark');

    return { isDarkTheme, onToggleTheme }
}