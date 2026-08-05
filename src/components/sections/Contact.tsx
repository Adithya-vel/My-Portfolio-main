import { profile } from "@/constants/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Github, Linkedin, Mail, Phone, Check, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
    color: "hover:text-foreground hover:bg-foreground/10",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10",
  },
  {
    label: "Phone",
    href: "tel:+91XXXXXXXXXX",
    icon: Phone,
    color: "hover:text-emerald-400 hover:bg-emerald-400/10",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    color: "hover:text-brand-blue hover:bg-brand-blue/10",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect."
          description="I'm always open to exciting projects, internship opportunities, or just a good conversation about tech."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {/* Email Card — static display + copy */}
          <Reveal delay={100}>
            <GlassCard className="flex h-full flex-col justify-center p-10 text-center sm:p-14" tilt>
              <Mail className="mx-auto h-12 w-12 text-brand-blue" />
              <h3 className="mt-6 font-display text-3xl font-bold text-foreground">Email Me</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                My inbox is always open.
              </p>

              {/* Static email display + copy button */}
              <div className="mt-8 mx-auto flex items-center gap-2 rounded-full border border-border bg-muted/50 px-5 py-3 backdrop-blur-sm">
                <span className="font-mono text-sm text-foreground select-all">
                  {profile.email}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCopy}
                  aria-label="Copy email"
                  className="ml-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue transition-colors hover:bg-brand-blue/25"
                >
                  {copied
                    ? <Check className="h-3.5 w-3.5" />
                    : <Copy className="h-3.5 w-3.5" />
                  }
                </motion.button>
              </div>
              {copied && (
                <p className="mt-3 font-mono text-xs text-emerald-400">Copied to clipboard!</p>
              )}
            </GlassCard>
          </Reveal>

          {/* Social Links Card */}
          <Reveal delay={200}>
            <GlassCard className="flex h-full flex-col justify-center p-10 text-center sm:p-14" tilt>
              <h3 className="font-display text-3xl font-bold text-foreground">Find me on</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Connect with me across the web.
              </p>
              <div className="mt-10 flex items-center justify-center gap-5">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.label === "GitHub" || s.label === "LinkedIn" ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.92 }}
                    className={`flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur-sm transition-all duration-300 ${s.color}`}
                  >
                    <s.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
              <p className="mt-8 font-mono text-xs text-muted-foreground/60">
                Open to networking &amp; new opportunities
              </p>
            </GlassCard>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
