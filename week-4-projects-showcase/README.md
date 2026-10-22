# Internlytic Technologies — Phase 1 Intern Projects Showcase

A modern, responsive web application showcasing intern projects across multiple learning and development tracks. Built with React, Vite, TypeScript, and Tailwind CSS.

**[View Live Demo](https://internlytic-phase1-bwt5.vercel.app/)**

## Project Overview

The Intern Projects Showcase provides a centralized platform for exploring projects across Front-End Development, Prompt Engineering, Data Analytics, and UI/UX Design.

Users can browse project cards, search by project title or intern name, filter projects by track, and view detailed project information through an interactive modal.

The current version uses fictional sample data for demonstration purposes and does not represent actual company submissions or approved intern projects.

## Features

- **Responsive Navigation:** Branded navigation bar with smooth-scroll links and a mobile-friendly menu.
- **Hero Section:** Introduction to the showcase with animated content, statistics, and call-to-action buttons.
- **Project Gallery:** Responsive cards displaying project titles, thumbnails, intern names, internship tracks, descriptions, technologies, and available links.
- **Real-Time Search:** Search projects by title or intern name.
- **Track-Based Filters:** Filter projects by Front-End Development, Prompt Engineering, Data Analytics, or UI/UX Design.
- **Reset Filters:** Clear the search query and selected filters with one action.
- **Project Details Modal:** View full descriptions, technologies, and available project links.
- **Loading and Empty States:** Helpful feedback for loading, empty galleries, and searches with no matching results.
- **Error Handling:** Error feedback and retry options where applicable.
- **Accessibility:** Keyboard navigation, ARIA labels, visible focus indicators, and Escape-to-close modal support.
- **Responsive Design:** Layouts optimized for mobile, tablet, and desktop screens.

## Project Tracks

| Track | Description |
|---|---|
| Front-End Development | Websites and interactive web applications |
| Prompt Engineering | Prompt design and generative AI workflows |
| Data Analytics | Data exploration and analytical projects |
| UI/UX Design | User interface and user experience concepts |

## Tech Stack

- **React** — Component-based user interface
- **Vite** — Development server and build tooling
- **TypeScript** — Type safety and maintainable code
- **Tailwind CSS** — Responsive styling
- **Lucide React** — Interface icons

## Design System

The application uses a clean visual style with a teal-green accent palette.

| Color | Hex Code | Usage |
|---|---|---|
| Teal Green | `#18B59A` | Primary accents and buttons |
| Deep Blue-Green | `#073A40` | Headings, text, and footer |
| White | `#FFFFFF` | Cards and navigation |
| Light Background | `#EAF7F4` | Page background and subtle surfaces |

## Project Structure

```text
week-4-projects-showcase/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterControls.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDetailsModal.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── projects.ts
│   └── App.tsx
├── public/
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd week-4-projects-showcase
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Open the local URL displayed in your terminal to view the application.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run lint` | Run the configured linter |
| `npm run typecheck` | Run TypeScript checks, if configured |
| `npm run preview` | Preview the production build |

## Sample Data

Project data is maintained in `src/data/projects.ts`.

Each project record includes an identifier, title, intern name, track, short description, full description, technologies, thumbnail, and optional live-demo or GitHub links.

**Note:** The current gallery contains eight fictional sample projects for demonstration purposes. These are not actual company submissions or approved projects.

## Future Enhancement: Supabase Integration

The application can be extended to retrieve real, approved intern projects from Supabase.

Potential enhancements include:

- A database table for project information and approval status
- Public read access restricted to approved projects
- Authenticated administrative workflows for managing submissions
- Supabase Storage for project thumbnails
- Row Level Security (RLS) policies to protect project data

These are proposed enhancements; the current version uses local sample data and does not claim a completed Supabase integration.

For production use, write operations should be restricted to authorized administrators through properly configured role-based access controls.

## Deployment

The application is deployed on Vercel. The GitHub repository can be imported into Vercel to create another deployment. When deploying this project from a monorepo, select `week-4-projects-showcase` as the root directory.

## License

This is a demonstration application created for learning and project showcase purposes. All sample project data is fictional.
