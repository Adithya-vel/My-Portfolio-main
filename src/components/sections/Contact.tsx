import { profile } from "@/constants/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Github, Linkedin, Mail, Check, Copy, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(profile.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  }

  function handleCopyPhone() {
    navigator.clipboard.writeText(profile.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
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

          {/* Email + Phone Card */}
          <Reveal delay={100}>
            <GlassCard className="flex h-full flex-col justify-center gap-8 p-10 text-center sm:p-14" tilt>
              {/* Email */}
              <div className="flex flex-col items-center gap-3">
                <Mail className="h-10 w-10 text-brand-blue" />
                <h3 className="font-display text-2xl font-bold text-foreground">Email Me</h3>
                <p className="text-sm text-muted-foreground">My inbox is always open.</p>
                <div className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-5 py-3 backdrop-blur-sm">
                  <span className="font-mono text-sm text-foreground select-all">{profile.email}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCopyEmail}
                    aria-label="Copy email"
                    className="ml-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue transition-colors hover:bg-brand-blue/25"
                  >
                    {emailCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </motion.button>
                </div>
                {emailCopied && <p className="font-mono text-xs text-emerald-400">Copied!</p>}
              </div>

              <div className="border-t border-border/40" />

              {/* Phone */}
              <div className="flex flex-col items-center gap-3">
                <Phone className="h-10 w-10 text-emerald-400" />
                <h3 className="font-display text-2xl font-bold text-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground">Feel free to call or WhatsApp.</p>
                <div className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-5 py-3 backdrop-blur-sm">
                  <span className="font-mono text-sm text-foreground select-all">{profile.phone}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCopyPhone}
                    aria-label="Copy phone"
                    className="ml-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400 transition-colors hover:bg-emerald-400/25"
                  >
                    {phoneCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </motion.button>
                </div>
                {phoneCopied && <p className="font-mono text-xs text-emerald-400">Copied!</p>}
              </div>
            </GlassCard>
          </Reveal>

          {/* Social Links Card */}
          <Reveal delay={200}>
            <GlassCard className="flex h-full flex-col justify-center p-10 text-center sm:p-14" tilt>
              <h3 className="font-display text-3xl font-bold text-foreground">Find me on</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Connect with me across the web.
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <motion.a
                  href="https://github.com/Adithya-vel"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:text-foreground hover:bg-foreground/10"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/adithyavelm"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
              </div>
              <p className="mt-10 font-mono text-xs text-muted-foreground/60">
                Open to networking &amp; new opportunities
              </p>
            </GlassCard>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
