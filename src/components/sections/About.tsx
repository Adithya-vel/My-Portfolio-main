import { Cloud, Database, Gauge, Layout, Server, Shield } from "lucide-react";
import { profile, skills, stats } from "@/constants/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/hooks/useScroll";

const iconMap = { layout: Layout, server: Server, cloud: Cloud, database: Database, gauge: Gauge, shield: Shield } as const;

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering with intent, not just output."
          description={profile.summary}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={80}>
            <GlassCard className="h-full p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-foreground/90">
                I care about the parts of software people never see — the migration that
                doesn't page anyone at 3am, the API that reads like prose, the interface that
                responds before you finish thinking.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Most of my work sits at the seam between product and platform: shaping systems
                that stay understandable as teams grow. I write a lot of design docs, delete a
                lot of code, and mentor engineers into owning their surfaces end to end.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-gradient text-3xl font-semibold">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs tracking-wide text-muted-foreground">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </GlassCard>
          </Reveal>

          <Reveal delay={160}>
            <GlassCard className="h-full p-8 sm:p-10" tilt>
              <h3 className="font-display text-lg font-semibold">Currently</h3>
              <ul className="mt-6 space-y-5 text-sm">
                {[
                  ["Role", profile.role],
                  ["Based in", profile.location],
                  ["Focus", "Distributed systems & DX"],
                  ["Open to", "Staff roles, advisory, consulting"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start justify-between gap-6">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="text-right font-medium">{v}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Depth where it counts."
          description="A working map of what I reach for, and how confidently."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  delay,
}: {
  skill: (typeof skills)[number];
  delay: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  const Icon = iconMap[skill.icon as keyof typeof iconMap];

  return (
    <div ref={ref} data-visible={visible} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <GlassCard className="group h-full p-7" tilt>
        <div className="flex items-start justify-between gap-4">
          <div className="bg-gradient-brand grid h-11 w-11 place-items-center rounded-2xl transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-6">
            <Icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
        </div>
        <h3 className="font-display mt-6 text-base font-semibold">{skill.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{skill.blurb}</p>
        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-[oklch(1_0_0/8%)]">
          <div
            className="bg-gradient-brand h-full rounded-full transition-[width] duration-[1400ms] ease-out"
            style={{ width: visible ? `${skill.level}%` : "0%", transitionDelay: `${delay + 200}ms` }}
          />
        </div>
      </GlassCard>
    </div>
  );
}
