import { experience } from "@/constants/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionDivider";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been."
          description="A timeline of companies and teams I've helped grow."
        />
        <div className="mt-14 max-w-3xl">
          <div className="relative border-l border-border/50 pb-8 pl-8 sm:pl-12">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative mb-12 last:mb-0">
                  <div className="absolute -left-10 flex h-4 w-4 items-center justify-center rounded-full bg-background sm:-left-14">
                    <div className="h-2 w-2 rounded-full bg-brand-blue" />
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {job.role} <span className="text-muted-foreground">@ {job.company}</span>
                    </h3>
                    <span className="font-mono text-sm text-brand-blue">{job.period}</span>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {job.detail}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
