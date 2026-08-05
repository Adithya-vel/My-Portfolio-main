import { useState, useEffect } from "react";
import { navItems } from "@/constants/portfolio";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
        <a href="#home" className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-brand-blue">
          AV<span className="text-brand-blue">.</span>
        </a>
        <nav className="hidden md:block">
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
        <a
          href="#contact"
          className="hidden md:inline-flex rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
