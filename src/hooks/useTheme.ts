import { useState, useEffect, useCallback } from 'react';

export type Theme = 'default' | 'aurora' | 'ember' | 'daylight' | 'sunrise' | 'frost';

const STORAGE_KEY = 'portfolio-theme';
const THEMES: Theme[] = ['default', 'aurora', 'ember', 'daylight', 'sunrise', 'frost'];

function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && (THEMES as string[]).includes(value);
}

function readStoredTheme(): Theme {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (isTheme(raw)) return raw;
  } catch {
    // private mode / quota / SSR — fall through to default
  }
  return 'default';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'default') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // storage unavailable — theme still applies for this session
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'default';
    return readStoredTheme();
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const cycleTheme = useCallback(() => {
    setTheme((prev) => THEMES[(THEMES.indexOf(prev) + 1) % THEMES.length]);
  }, []);

  return { theme, setTheme, cycleTheme };
}
