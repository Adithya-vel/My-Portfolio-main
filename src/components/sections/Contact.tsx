import { profile } from "@/constants/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionDivider";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="Whether it's a new project, a staff role, or just a chat about distributed systems."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
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
          <Reveal delay={200}>
            <GlassCard className="flex h-full flex-col justify-center p-10 text-center sm:p-14" tilt>
              <MapPin className="mx-auto h-12 w-12 text-brand-purple" />
              <h3 className="mt-6 font-display text-3xl font-bold text-foreground">Location</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Based in <span className="text-foreground">{profile.location}</span>.
              </p>
              <p className="mt-8 font-mono text-sm text-brand-purple">
                Available for remote roles worldwide.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

