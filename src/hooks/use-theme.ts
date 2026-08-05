import { useCallback, useEffect, useState } from "react";

export const themes = [
  { id: "midnight", label: "Midnight", swatch: ["#3b82f6", "#6366f1", "#a855f7"] },
  { id: "aurora", label: "Aurora", swatch: ["#22d3ee", "#2dd4bf", "#34d399"] },
  { id: "ember", label: "Ember", swatch: ["#fb923c", "#f43f5e", "#f59e0b"] },
  { id: "daylight", label: "Daylight", swatch: ["#2563eb", "#7c3aed", "#0ea5e9"] },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

const STORAGE_KEY = "portfolio-theme";

function apply(id: ThemeId) {
  const root = document.documentElement;
  root.setAttribute("data-theme", id);
  root.classList.toggle("light-theme", id === "daylight");
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>("midnight");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    const next = themes.some((t) => t.id === stored) ? (stored as ThemeId) : "midnight";
    setThemeState(next);
    apply(next);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeState(id);
    apply(id);
    window.localStorage.setItem(STORAGE_KEY, id);
  }, []);

  return { theme, setTheme };
}
