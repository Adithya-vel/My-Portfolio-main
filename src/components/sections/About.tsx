import { Cloud, Database, Gauge, Layout, Server, Shield } from "lucide-react";
import { skills, stats } from "@/constants/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReveal } from "@/hooks/useScroll";
import profilePhoto from "@/assets/images/profile.jpg";

const iconMap = { layout: Layout, server: Server, cloud: Cloud, database: Database, gauge: Gauge, shield: Shield } as const;

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">

          {/* Left — Photo + Heading */}
          <Reveal delay={60}>
            <div className="flex flex-col items-center lg:items-start gap-8">

              {/* ── Profile Photo ── */}
              <div className="relative flex-shrink-0">
                {/* Spinning gradient ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-brand opacity-80 blur-sm animate-spin-slow" />
                {/* Static solid ring */}
                <div className="absolute -inset-[3px] rounded-full bg-gradient-brand opacity-60" />

                {/* Photo circle */}
                <div className="relative h-40 w-40 rounded-full overflow-hidden ring-4 ring-background shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Adithya Vel M"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Online badge */}
                <span className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-background ring-2 ring-background">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_theme(colors.emerald.400/50%)]" />
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-4 text-center lg:text-left">
                <span className="text-sm font-semibold tracking-widest text-brand-blue uppercase">
                  About
                </span>
                <h2 className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl leading-tight">
                  About<br />
                  <span className="text-gradient">Me.</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground">
                  Here's a little about who I am and what I'm working towards.
                </p>

                {/* Stats strip */}
                <dl className="mt-10 grid grid-cols-2 gap-6">
                  {stats.map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <dt className="font-display text-gradient text-3xl font-semibold">
                        {s.value}
                      </dt>
                      <dd className="mt-1 text-xs tracking-wide text-muted-foreground">
                        {s.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          {/* Right — About Me card */}
          <Reveal delay={160}>
            <GlassCard className="h-full p-8 sm:p-10" tilt>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Hi there! I am Adithya Vel.M, an aspiring computer science student who loves to study Data related stuffs, building my skills step by step through entry-level courses and projects.
                </p>
                <p>
                  Along the way, I've explored related areas like cloud computing, cybersecurity, and digital marketing, which have given me a broad introduction to the tech field.
                </p>
                <p>
                  I'm eager to keep learning, improve my problem-solving abilities, and gain practical experience.
                </p>
                <p>
                  Open to networking and new opportunities !!!
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-border/40 pt-6">
                {[
                  ["📍 Location", "Chengalpattu, Tamil Nadu, India"],
                  ["🎓 Degree", "B.E. Computer Science & Engineering"],
                  ["💼 Open to", "Internships & Collaborations"],
                ].map(([k, v]) => (
                  <div key={k} className="w-full flex items-center justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="text-right font-medium text-foreground">{v}</span>
                  </div>
                ))}
              </div>
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
          title="What I work with."
          description="Technologies and tools I'm actively learning and building with."
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
