import { profile } from "@/constants/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

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
    label: "X / Twitter",
    href: "https://x.com",
    icon: Twitter,
    color: "hover:text-foreground hover:bg-foreground/10",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    color: "hover:text-brand-blue hover:bg-brand-blue/10",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect."
          description="I'm always open to exciting projects, internship opportunities, or just a good conversation about tech."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {/* Email Card */}
          <Reveal delay={100}>
            <GlassCard className="flex h-full flex-col justify-center p-10 text-center sm:p-14" tilt>
              <Mail className="mx-auto h-12 w-12 text-brand-blue" />
              <h3 className="mt-6 font-display text-3xl font-bold text-foreground">Email Me</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                My inbox is always open.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${profile.email}`}
                className="mt-8 mx-auto inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-5px_var(--color-brand-blue)] transition-shadow hover:shadow-[0_0_40px_-5px_var(--color-brand-blue)]"
              >
                {profile.email}
              </motion.a>
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
                    target={s.label !== "Email" ? "_blank" : undefined}
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
