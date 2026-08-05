import { projects } from "@/constants/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionDivider";
import { ArrowUpRight, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects."
          description="A mix of professional work and personal experiments."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <GlassCard className="group flex h-full flex-col p-8 sm:p-10 transition-transform hover:-translate-y-2 hover:shadow-2xl" tilt>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-foreground transition-colors group-hover:text-brand-blue">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-muted-foreground transition-colors group-hover:text-foreground">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5 transition-transform hover:scale-110" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Demo">
                        <ArrowUpRight className="h-5 w-5 transition-transform hover:scale-110" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-brand-blue/10 px-3 py-1 font-mono text-xs text-brand-blue transition-colors group-hover:bg-brand-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
