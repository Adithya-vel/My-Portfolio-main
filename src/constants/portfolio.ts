export const profile = {
  name: "Adithya Vel M",
  role: "CSE Undergraduate & Aspiring Full Stack Developer",
  tagline: "Turning ideas into real products — one project at a time.",
  location: "Chengalpattu, Tamil Nadu, India",
  email: "adithyamuralikrishnan512@gmail.com",
  phone: "+91 98409 48132",
  summary:
    "A passionate Computer Science undergraduate with a keen interest in full stack web development, AI/ML, and open-source. Currently in my second year, I'm actively building projects, participating in hackathons, and sharpening my skills every day.",
  socials: [
    { label: "GitHub", href: "https://github.com/Adithya-vel", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adithyavelm", icon: "linkedin" },
    { label: "X", href: "https://x.com", icon: "twitter" },
    { label: "Email", href: "mailto:adithyamuralikrishnan512@gmail.com", icon: "mail" },
  ],
};

export const stats = [
  { value: "3rd", label: "Year of B.Tech CSE" },
  { value: "10+", label: "Projects built" },
  { value: "3+", label: "Hackathons joined" },
  { value: "100%", label: "Drive to learn" },
];

export const skills = [
  { name: "Frontend Development", level: 75, icon: "layout", blurb: "React, HTML, CSS, Tailwind CSS" },
  { name: "Backend & APIs", level: 25, icon: "server", blurb: "Node.js, Express, Java Spring Boot" },
  { name: "AI & Machine Learning", level: 60, icon: "gauge", blurb: "Python, NumPy, scikit-learn, basics of deep learning" },
  { name: "Databases", level: 50, icon: "database", blurb: "MySQL, MongoDB, Firebase" },
  { name: "Cloud & DevOps", level: 40, icon: "cloud", blurb: "Git, GitHub Actions, Vercel, basic Docker" },
  { name: "Programming Languages", level: 50, icon: "shield", blurb: "Java, Python, JavaScript, C" },
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
    role: "B.Tech Computer Science & Engineering",
    company: "SRM University",
    detail:
      "Pursuing a Bachelor of Technology in Computer Science. Studying core subjects including Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks alongside modern development skills.",
    tags: ["Java", "Python", "C", "Data Structures", "DBMS"],
  },
];

export const projects = [
  {
    title: "HomeSure Management",
    featured: true,
    summary:
      "A modern property and home warranty management platform featuring multi-role authentication, tenant & contractor management, service requests, and an analytics dashboard.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Router"],
    github: "",
    demo: "https://home-sure-management.vercel.app/",
    accent: "from-[color-mix(in_oklab,var(--brand-blue)_60%,transparent)]",
  },
  {
    title: "SPAREV",
    summary:
      "A smart parking management system with an integrated EV charging option, providing users with a seamless and modern parking experience.",
    tech: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/Adithya-vel/SPAREV",
    demo: "",
  },
  {
    title: "Finance Track",
    summary:
      "A personal finance tracking application that helps users monitor expenses, manage budgets, and visualize their financial data over time.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Adithya-vel/finance-track",
    demo: "",
  },
  {
    title: "ZT IoT Guard",
    summary:
      "A Zero Trust security solution for Internet of Things (IoT) devices. Implements robust authentication and monitoring to secure IoT networks.",
    tech: ["TypeScript", "IoT", "Security"],
    github: "https://github.com/Adithya-vel/ZT-Iot-Guard",
    demo: "",
  },
  {
  title: "URL Shortener",
  summary:
    "A full-stack URL shortening service with JWT authentication, MongoDB persistence, click tracking, protected URL management, and production deployment.",
  tech: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
  github: "https://github.com/Adithya-vel/My-Portfolio-main",
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
  { id: "toolbox", label: "Toolbox" },
  { id: "contact", label: "Contact" },
];
