import { useState } from "react";

export function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="relative border-t border-border bg-background px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          {logoFailed ? (
            <div
              aria-hidden="true"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-950 to-indigo-950 text-white font-bold text-lg tracking-wider shadow-sm"
            >
              AV
            </div>
          ) : (
            <img
              src="/logo.portfolio.png"
              alt="AV Logo"
              width={40}
              height={40}
              loading="lazy"
              className="w-10 h-10 object-contain rounded-xl shadow-sm"
              onError={() => setLogoFailed(true)}
            />
          )}
          <span className="text-muted-foreground">&copy; {new Date().getFullYear()} Adithya Vel M. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
