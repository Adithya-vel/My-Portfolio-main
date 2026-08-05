import { profile } from "@/constants/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center px-6 pt-24 pb-12 sm:pt-32 overflow-hidden">
      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="flex flex-col items-start gap-8">
          <Reveal delay={100}>
            <div className="inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue backdrop-blur-md shadow-[0_0_20px_-5px_var(--color-brand-blue)]">
              <span className="mr-2 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-blue"></span>
              </span>
              Open to internships & collaborations
            </div>
          </Reveal>

          <div className="max-w-4xl space-y-6">
            <Reveal delay={200}>
              <h1 className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                Hi, I'm {profile.name}.
                <br />
                <span className="text-gradient inline-block">
                  I build for the web.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={340}>
              <p className="font-mono text-sm text-muted-foreground/70">
                📍 {profile.location} &nbsp;·&nbsp; 🎓 B.Tech CSE — 3rd Year
              </p>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_40px_-10px_var(--color-primary)]"
              >
                <span>Get in touch</span>
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-border bg-card/50 px-8 py-4 font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted/80 hover:border-muted-foreground/30"
              >
                See my work
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

