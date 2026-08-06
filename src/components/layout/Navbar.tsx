import { useState, useEffect } from "react";
import { navItems } from "@/constants/portfolio";
import { cn } from "@/utils/cn";
import { ThemePicker } from "@/components/ui/ThemePicker";

const RESUME_URL = "https://drive.google.com/uc?export=download&id=1y4mGl2cG8BJ3UP7AphBI_BhTK2W74hYZ";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-[100] w-full transition-all duration-300",
        scrolled ? "bg-background/80 py-4 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="transition-transform hover:scale-105 active:scale-95 flex items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-950 to-indigo-950 text-white font-bold text-xl tracking-widest shadow-md select-none">
            AV
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "nav-underline text-sm font-medium transition-colors hover:text-foreground",
                    activeSection === item.id ? "text-foreground" : "text-muted-foreground"
                  )}
                  data-active={activeSection === item.id}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemePicker />
          {/* Resume Download */}
          <a
            href={RESUME_URL}
            download="Adithya_Vel_Resume.pdf"
            aria-label="Download Resume"
            className="group inline-flex items-center gap-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-400/60 hover:shadow-[0_0_20px_-6px_rgba(99,102,241,0.7)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block text-base font-medium transition-colors hover:text-foreground",
                      activeSection === item.id ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-3 pt-2 border-t border-border/30">
            <a
              href={RESUME_URL}
              download="Adithya_Vel_Resume.pdf"
              aria-label="Download Resume"
              onClick={() => setMobileOpen(false)}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-5 py-2.5 text-sm font-semibold text-indigo-300 transition-all duration-300 hover:bg-indigo-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
