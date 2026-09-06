import { type Theme, useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';

const themes: { id: Theme; label: string; color: string }[] = [
  { id: 'default', label: 'Indigo',  color: 'bg-[oklch(0.62_0.19_268)]' },
  { id: 'aurora',  label: 'Aurora',  color: 'bg-[oklch(0.72_0.14_195)]' },
  { id: 'ember',   label: 'Ember',   color: 'bg-[oklch(0.70_0.17_45)]'  },
  { id: 'daylight',label: 'Daylight',color: 'bg-[oklch(0.55_0.2_265)]'  },
  { id: 'sunrise', label: 'Sunrise', color: 'bg-[oklch(0.65_0.18_35)]'  },
  { id: 'frost',   label: 'Frost',   color: 'bg-[oklch(0.6_0.14_220)]'   },
];

export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open ]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Change theme"
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur-sm transition-all',
          'hover:border-brand-blue/50 hover:text-foreground hover:shadow-[0_0_16px_-4px_var(--color-brand-blue)]',
          open && 'border-brand-blue/50 text-foreground'
        )}
      >
        <Palette aria-hidden="true" className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* click-away / keyboard-dismissable backdrop */}
            <button
              aria-label="Close theme menu"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[149] cursor-default bg-transparent"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -6 }}
              transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
              role="listbox"
              aria-label="Color theme"
              className="absolute right-0 top-12 z-[150] w-44 overflow-hidden rounded-2xl border border-border bg-card/90 p-2 shadow-xl backdrop-blur-xl"
            >
              <p aria-hidden="true" className="px-2 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Theme
              </p>
              {themes.map(t => (
                <button
                  key={t.id}
                  role="option"
                  aria-selected={theme === t.id}
                  onClick={() => { setTheme(t.id); setOpen(false); }}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors',
                    theme === t.id
                      ? 'bg-brand-blue/15 text-foreground font-medium'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <span aria-hidden="true" className={cn('h-3 w-3 flex-shrink-0 rounded-full', t.color)} />
                  {t.label}
                  {theme === t.id && (
                    <span aria-hidden="true" className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
