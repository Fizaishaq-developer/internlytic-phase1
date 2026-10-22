# Fiza Ishaq — 3D Interactive Portfolio

A modern, responsive personal portfolio featuring interactive 3D effects, smooth animations, and a clean interface to showcase my projects, technical skills, education, and experience.

**[🚀 Live Demo — View My Portfolio](https://portfolio-fizaishaq-two-17.vercel.app/)**

## Project Overview

Developed as part of the **Internlytic Technologies Front-End Development Internship — Phase 1, Week 2 (2026)**, this portfolio presents my frontend development journey through an interactive, depth-inspired user experience.

The website features a layered hero section with a portrait that responds to mouse movement and scrolling. Dedicated sections highlight my background, projects, technical skills, education, experience, and contact information.

## Features

- **Interactive 3D Effects:** CSS-based perspective and mouse-tilt effects on the hero portrait, project cards, and skill cards.
- **Scroll-Based Parallax:** Layered hero elements, floating chips, and background orbs move at different speeds while scrolling.
- **Reveal Animations:** Content sections appear with smooth animations as users navigate the page.
- **Responsive Layout:** Designed for mobile phones, tablets, laptops, and desktop screens.
- **Résumé Download:** Provides access to a downloadable PDF résumé.
- **Accessible Interactions:** Respects `prefers-reduced-motion` and avoids relying exclusively on hover interactions.
- **Contact & Social Links:** Connect through email, GitHub, and LinkedIn.
- **Project Showcase:** Highlights selected web development and AI projects.

## Portfolio Sections

- **Home** — Introduction and interactive hero section
- **About** — Professional background and interests
- **Projects** — Selected development projects
- **Skills** — Technical skills and tools
- **Education** — Academic background
- **Experience** — Relevant internship and development experience
- **Contact** — Email and professional social links

## Featured Projects

| Project | Description |
|---|---|
| **NEXA Digital** | Digital agency website showcasing services and projects |
| **HireLens AI** | AI-powered résumé screening and candidate evaluation platform |
| **TenderBot Pakistan** | AI-assisted tender discovery and information tool |

Visit the live portfolio to explore the project showcases and their available demo links.

## Tech Stack

- **React 18** — Component-based UI development
- **TypeScript** — Type safety and maintainable code
- **Vite** — Development server and production build tooling
- **Tailwind CSS** — Responsive styling
- **Framer Motion** — Animations and motion effects
- **Lucide React** — Interface icons
- **CSS 3D Transforms** — Perspective, tilt, and depth effects

## Getting Started

### Prerequisites

Install Node.js and npm before running the project locally.

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd week-2-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated production files are stored in the `dist/` directory.

## Customizing the Portfolio

Portfolio content is organized in `src/data/config.ts`, including text, projects, skills, links, and résumé configuration.

The hero portrait is located at `public/portrait.png`. Keep the résumé file in the `public/` directory and ensure its configured path and filename match the actual PDF file.

## Design & Accessibility

The portfolio uses lightweight CSS-based 3D effects rather than a WebGL rendering engine. This keeps the visual experience interactive without requiring a dedicated 3D graphics library.

Motion effects account for reduced-motion preferences, and touch-device interactions do not depend on mouse hover.

## Deployment

The portfolio is deployed on **Vercel**.

**[Visit the Live Portfolio](https://portfolio-fizaishaq-two-17.vercel.app/)**

To deploy your own version, import the GitHub repository into Vercel and configure the project root directory if deploying from a monorepo.

## Security

- No API keys or access tokens are required for the portfolio's described features.
- Environment files and dependencies should be excluded from Git using `.gitignore`.
- Contact options use external links or the user's email application.

## License

This project was created as part of an internship learning project. Add a license file if you intend to distribute or reuse the code under specific license terms.
