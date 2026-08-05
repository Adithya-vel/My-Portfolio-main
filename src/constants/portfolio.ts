export const profile = {
  name: "Adithya Vel M",
  role: "CSE Undergraduate & Aspiring Full Stack Developer",
  tagline: "Turning ideas into real products — one project at a time.",
  location: "Chengalpattu, Tamil Nadu, India",
  email: "adithya@example.com",
  summary:
    "A passionate Computer Science undergraduate with a keen interest in full stack web development, AI/ML, and open-source. Currently in my second year, I'm actively building projects, participating in hackathons, and sharpening my skills every day.",
  socials: [
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "X", href: "https://x.com", icon: "twitter" },
    { label: "Email", href: "mailto:adithya@example.com", icon: "mail" },
  ],
};

export const stats = [
  { value: "2nd", label: "Year of B.E. CSE" },
  { value: "10+", label: "Projects built" },
  { value: "3+", label: "Hackathons joined" },
  { value: "100%", label: "Drive to learn" },
];

export const skills = [
  { name: "Frontend Development", level: 75, icon: "layout", blurb: "React, HTML, CSS, Tailwind CSS" },
  { name: "Backend & APIs", level: 65, icon: "server", blurb: "Node.js, Express, Java Spring Boot" },
  { name: "AI & Machine Learning", level: 60, icon: "gauge", blurb: "Python, NumPy, scikit-learn, basics of deep learning" },
  { name: "Databases", level: 68, icon: "database", blurb: "MySQL, MongoDB, Firebase" },
  { name: "Cloud & DevOps", level: 50, icon: "cloud", blurb: "Git, GitHub Actions, Vercel, basic Docker" },
  { name: "Programming Languages", level: 72, icon: "shield", blurb: "Java, Python, JavaScript, C" },
];

export const experience = [
  {
    period: "2026 — Present",
    role: "Full Stack Developer",
    company: "HomeSure Management (Ongoing)",
    detail:
      "Building a modern property and home warranty management platform for a client under our FA. The system features multi-role authentication, tenant & contractor management, service requests, warranty tracking, and an analytics dashboard.",
    tags: ["React", "TypeScript", "Vite", "TanStack Router", "Tailwind CSS"],
  },
  {
    period: "2026",
    role: "Winner",
    company: "ULTRON 9.0 Hackathon",
    detail:
      "Participated and won the ULTRON 9.0 hackathon with our team. We built and showcased 'TIDY WINDOW', an innovative application developed under strict time pressure.",
    tags: ["Hackathon", "Rapid Prototyping", "Team Collaboration"],
  },
  {
    period: "2024 — Present",
    role: "B.E. Computer Science & Engineering",
    company: "University",
    detail:
      "Pursuing a Bachelor of Engineering in Computer Science. Studying core subjects including Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks alongside modern development skills.",
    tags: ["Java", "Python", "C", "Data Structures", "DBMS"],
  },
];

export const projects = [
  {
    title: "Portfolio Website",
    featured: true,
    summary:
      "This portfolio — built from scratch with React, Vite, Tailwind CSS, and Framer Motion. Features theme switching, smooth animations, glassmorphism cards, and a fully responsive layout.",
    tech: ["React", "Vite", "Tailwind CSS", "TypeScript", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com",
    accent: "from-[color-mix(in_oklab,var(--brand-blue)_60%,transparent)]",
  },
  {
    title: "AI Chat Interface",
    summary:
      "A clean, minimal chat interface that connects to an AI API. Built to explore LLM integration, streaming responses, and building conversational UIs with React.",
    tech: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Manager App",
    summary:
      "A full stack task management application with user authentication, drag-and-drop task boards, and real-time updates using Firebase.",
    tech: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Java Spring Boot REST API",
    summary:
      "A RESTful API project built as part of learning Java full stack development. Implements CRUD operations, JWT authentication, and MySQL persistence.",
    tech: ["Java", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "ML Sentiment Analyser",
    summary:
      "A machine learning project that classifies the sentiment of user reviews as positive or negative using a trained Naive Bayes model and a simple Flask web UI.",
    tech: ["Python", "scikit-learn", "Flask", "NLTK"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export const certifications = [
  { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024" },
  { title: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", year: "2024" },
  { title: "React — The Complete Guide", issuer: "Udemy", year: "2024" },
  { title: "Python for Data Science & AI", issuer: "IBM / Coursera", year: "2023" },
];

export const techStack = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Spring Boot",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Git",
  "GitHub",
  "Figma",
  "Docker",
  "Vercel",
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
