# Personal Portfolio

## Project Overview
A handcrafted, production‑ready portfolio site for **Adithya Vel M**, a Computer Science undergraduate passionate about full‑stack development, AI/ML, and open‑source contributions. The site showcases skills, projects, certifications, and provides smooth, interactive experiences using modern web technologies.

## Features
- **Responsive design** with premium glassmorphism cards and subtle micro‑animations
- **Theme switching** (Indigo, Aurora, Ember, Light) persisted via `localStorage`
- **Smooth scroll animations** and scroll‑progress indicator
- **Animated gradient background** and floating blurred blobs for visual flair
- **Interactive project cards** with hover lift and transition effects
- **Accessible, semantic HTML** with improved typography using Google Fonts (Inter, Outfit, JetBrains Mono)
- **Contact form** (email link) and social links
- **Section navigation** with animated navbar
- **Performance‑optimized build** via Vite and Tailwind CSS

## Tech Stack
- **React** (TypeScript)
- **Vite** – fast dev server & bundler
- **Tailwind CSS** – utility‑first styling
- **Framer Motion** – declarative animations
- **Lucide‑react** – icon set
- **Google Fonts** – Inter, Outfit, JetBrains Mono
- **Git & GitHub** – version control & deployment

## Installation
```bash
# Clone the repository
git clone <repository‑url>

# Change into the project directory
cd My-Portfolio-main

# Install dependencies
npm install

# Run the development server
npm run dev
```
Open http://localhost:5173 (or the port shown in the console) to view the site locally.

## Folder Structure
```
src/
 ├─ assets/          # Images, icons, and static assets
 ├─ components/      # Reusable UI components (ui, layout, sections)
 │   ├─ layout/      # Navbar, Footer, etc.
 │   ├─ sections/    # Page sections (Hero, About, Skills, Projects, ...)
 │   └─ ui/          # Atomic UI primitives (GlassCard, Reveal, SectionHeading)
 ├─ constants/       # Portfolio data (profile, projects, skills, etc.)
 ├─ hooks/           # Custom React hooks (useTheme, useReveal)
 ├─ pages/           # Optional route pages (if using Vite router)
 ├─ App.tsx          # Root component with layout and routing
 └─ main.tsx         # Entry point initializing React
```

## Deployment
The site can be deployed to any static‑hosting platform (Vercel, Netlify, GitHub Pages). Build the production bundle with:
```bash
npm run build
```
Then serve the generated `dist/` folder.

## License
Distributed under the **MIT License**. See `LICENSE` for more information.

## Author
**Adithya Vel M** – Computer Science Undergraduate, aspiring full‑stack developer.

---
*Feel free to replace the placeholder sections (e.g., project URLs, social links) with your own content.*