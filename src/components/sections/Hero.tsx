import { profile } from "@/constants/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center px-6 pt-24 pb-12 sm:pt-32">
      <div className="mx-auto max-w-6xl w-full">
        <div className="flex flex-col items-start gap-8">
          <Reveal delay={100}>
            <div className="inline-flex items-center rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-sm font-medium text-brand-blue backdrop-blur-md">
              <span className="mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue"></span>
              </span>
              Available for new opportunities
            </div>
          </Reveal>
          
          <div className="max-w-4xl space-y-6">
            <Reveal delay={200}>
              <h1 className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                Hi, I'm {profile.name}.
                <br />
                <span className="text-gradient inline-block animate-shimmer bg-[length:200%_auto]">
                  {profile.role}.
                </span>
              </h1>
            </Reveal>
            
            <Reveal delay={300}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {profile.tagline}
              </p>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-[0_0_40px_-10px_var(--color-primary)] active:scale-95"
              >
                <span>Let's talk</span>
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-border bg-background px-8 py-3.5 font-medium text-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95"
              >
                View Work
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
