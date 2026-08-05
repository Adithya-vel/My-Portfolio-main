import { certifications, techStack } from "@/constants/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionDivider";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications."
          description="Formal proof of knowing what I'm doing."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 100}>
              <GlassCard className="h-full p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10">
                  <span className="text-xl font-bold text-brand-blue">{cert.year.substring(2)}'</span>
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold text-foreground">{cert.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="mt-4 font-mono text-xs text-brand-blue">{cert.year}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStack() {
  return (
    <section id="stack" className="relative px-6 py-20 pb-28 sm:pb-36">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-foreground">Technologies & Tools</h3>
          <p className="mt-4 text-muted-foreground">The ecosystem I operate in.</p>
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <Reveal key={tech} delay={i * 30}>
              <span className="inline-flex rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue">
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
