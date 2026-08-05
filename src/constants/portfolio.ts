export const profile = {
  name: "Aarav Mehta",
  role: "Senior Software Engineer",
  tagline: "Building fast, resilient products for the web.",
  location: "Bengaluru, India",
  email: "hello@aaravmehta.dev",
  summary:
    "I design and engineer distributed systems and interfaces that stay quick under pressure. Nine years across fintech, developer tooling and large-scale platforms — most of it spent shipping to millions of users.",
  socials: [
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "X", href: "https://x.com", icon: "twitter" },
    { label: "Email", href: "mailto:hello@aaravmehta.dev", icon: "mail" },
  ],
};

export const stats = [
  { value: "9+", label: "Years shipping" },
  { value: "40+", label: "Projects delivered" },
  { value: "12M", label: "Users served" },
  { value: "99.98%", label: "Uptime maintained" },
];

export const skills = [
  { name: "Frontend Architecture", level: 95, icon: "layout", blurb: "React, TypeScript, design systems" },
  { name: "Backend & APIs", level: 90, icon: "server", blurb: "Node, Go, GraphQL, gRPC" },
  { name: "Cloud & Infra", level: 86, icon: "cloud", blurb: "AWS, Kubernetes, Terraform" },
  { name: "Databases", level: 88, icon: "database", blurb: "Postgres, Redis, ClickHouse" },
  { name: "Performance", level: 92, icon: "gauge", blurb: "Profiling, caching, Core Web Vitals" },
  { name: "Security", level: 80, icon: "shield", blurb: "Threat modelling, OWASP, zero-trust" },
];

export const experience = [
  {
    period: "2023 — Present",
    role: "Senior Software Engineer",
    company: "Northwind Systems",
    detail:
      "Lead engineer for the payments platform. Re-architected the ledger service to event sourcing, cutting reconciliation time from hours to seconds and taking p99 latency below 40ms.",
    tags: ["Go", "Kafka", "Postgres", "Kubernetes"],
  },
  {
    period: "2020 — 2023",
    role: "Full-Stack Engineer",
    company: "Lumen Labs",
    detail:
      "Built the design system and app shell used by nine product teams. Shipped a streaming dashboard handling 200k events per minute with sub-second render budgets.",
    tags: ["React", "TypeScript", "GraphQL", "AWS"],
  },
  {
    period: "2018 — 2020",
    role: "Product Engineer",
    company: "Cobalt Studio",
    detail:
      "Owned client delivery end to end — from discovery to production. Introduced CI/CD and automated testing that dropped release cycles from two weeks to daily.",
    tags: ["Node.js", "Next.js", "Docker"],
  },
  {
    period: "2017 — 2018",
    role: "Software Engineer",
    company: "Bitmark",
    detail:
      "Started on internal tooling, ended up rewriting the reporting pipeline in a way that still runs today. Learned to obsess over the details that users feel.",
    tags: ["Python", "Airflow", "Redis"],
  },
];

export const projects = [
  {
    title: "Atlas Ledger",
    featured: true,
    summary:
      "A double-entry ledger engine with deterministic replay, built for regulated fintech workloads. Handles 12k transactions per second with full auditability.",
    tech: ["Go", "Kafka", "Postgres", "gRPC", "Terraform"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-[color-mix(in_oklab,var(--brand-blue)_60%,transparent)]",
  },
  {
    title: "Prism UI",
    summary:
      "An accessible React component library with token-driven theming, used across nine internal products.",
    tech: ["React", "TypeScript", "Radix", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Pulse Analytics",
    summary:
      "Realtime event analytics with a columnar backend and a dashboard that renders a million points without dropping frames.",
    tech: ["ClickHouse", "Node.js", "WebSockets"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Forge CLI",
    summary:
      "Developer tooling that scaffolds, tests and deploys services in one command. Cut onboarding from days to minutes.",
    tech: ["Rust", "Docker", "GitHub Actions"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Vault Guard",
    summary:
      "Zero-trust secret rotation service with hardware-backed keys and full policy-as-code support.",
    tech: ["Go", "Vault", "OPA", "AWS KMS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export const certifications = [
  { title: "AWS Solutions Architect — Professional", issuer: "Amazon Web Services", year: "2024" },
  { title: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2023" },
  { title: "Google Professional Cloud Architect", issuer: "Google Cloud", year: "2022" },
  { title: "MongoDB Associate Developer", issuer: "MongoDB", year: "2021" },
];

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "Rust",
  "Python",
  "GraphQL",
  "PostgreSQL",
  "Redis",
  "ClickHouse",
  "Kafka",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "Vitest",
  "Playwright",
  "Tailwind CSS",
  "gRPC",
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];
