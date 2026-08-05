import { useState, useEffect, useCallback } from 'react';

export type Theme = 'default' | 'aurora' | 'ember' | 'daylight';

const STORAGE_KEY = 'portfolio-theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'default';
    return (localStorage.getItem(STORAGE_KEY) as Theme) ?? 'default';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'default') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const cycleTheme = useCallback(() => {
    const themes: Theme[] = ['default', 'aurora', 'ember', 'daylight'];
    setTheme(prev => {
      const idx = themes.indexOf(prev);
      return themes[(idx + 1) % themes.length];
    });
  }, []);

  return { theme, setTheme, cycleTheme };
}
