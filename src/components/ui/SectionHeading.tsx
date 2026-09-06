export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-sm font-semibold tracking-widest text-brand-blue uppercase">{eyebrow}</p>
      <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h2>
      <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
