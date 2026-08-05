import { profile } from "@/constants/portfolio";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const iconMap = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail } as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">AM</span>
            <span className="text-muted-foreground">&copy; {new Date().getFullYear()} Aarav Mehta.</span>
          </div>
          <div className="flex gap-4">
            {profile.socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform hover:scale-110 hover:bg-brand-blue hover:text-white"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
