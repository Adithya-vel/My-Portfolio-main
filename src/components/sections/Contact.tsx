import { profile } from "@/constants/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Check, Copy, Phone } from "lucide-react";
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
        <div className="mt-14 max-w-2xl mx-auto">

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

        </div>
      </div>
    </section>
  );
}
