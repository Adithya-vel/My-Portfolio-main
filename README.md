# Adithya Vel M - Senior Software Engineer Portfolio

A premium, modern developer portfolio built to showcase experience, projects, and skills with clean architecture and highly polished UI.

## Project Overview

This portfolio is a single-page React application designed for high performance and visual excellence. It features glassmorphism design elements, smooth framer-motion animations, custom gradient typography, and an interactive layout that feels both professional and handcrafted.

## Features

- **Smooth Scroll Animations**: Buttery smooth section reveals using `framer-motion` and custom intersection observers.
- **Glassmorphism UI**: Refined translucent cards with subtle glow and backdrop blurring.
- **Dynamic Backgrounds**: Floating gradient blobs that follow the color tokens of the brand.
- **Interactive Project Cards**: Hover effects that elevate content and emphasize interactivity.
- **Responsive Design**: Beautifully adapts to mobile, tablet, and desktop screens with consistent spacing.
- **Modern Typography**: Integrated with Google Fonts (Outfit, Inter, JetBrains Mono) for a sharp, developer-focused aesthetic.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Folder Structure

```
src/
├── assets/
│   └── styles/
│       └── index.css         # Global styles and Tailwind tokens
├── components/
│   ├── fx/                   # Visual effect components (Backgrounds, Loaders)
│   ├── layout/               # Structural components (Navbar, Footer)
│   ├── sections/             # Main portfolio sections (Hero, About, Projects)
│   └── ui/                   # Reusable primitive components (Cards, Reveals)
├── constants/
│   └── portfolio.ts          # Centralized data and content
├── hooks/
│   └── useScroll.ts          # Custom hooks for scroll tracking
├── pages/
│   └── Home.tsx              # Main assembly page
├── utils/
│   └── cn.ts                 # Classname merge utility
├── App.tsx                   # Root component
└── main.tsx                  # Application entry point
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. To build for production:
   ```bash
   npm run build
   ```

## Deployment

This project is a static site built with Vite. It can be easily deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider.

To deploy on Vercel:
1. Push the code to a GitHub repository.
2. Import the project in Vercel.
3. The default build settings (`npm run build` and `dist` directory) will be automatically detected.

## License

MIT License. See the [LICENSE](LICENSE) file for details.

## Author


- GitHub: https://github.com)
- LinkedIn: [Adithya Vel M](https://linkedin.com)
