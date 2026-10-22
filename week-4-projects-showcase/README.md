# Internlytic Technologies — Phase 1 Intern Projects Showcase

A polished, responsive web application showcasing Phase 1 intern projects at Internlytic Technologies. Built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- **Professional Navigation Bar** — Branded with "Internlytic Technologies" text, smooth-scroll nav links, and a responsive mobile menu.
- **Hero Section** — Introduces the Phase 1 Intern Projects Showcase with animated entry, stats, and call-to-action buttons.
- **Project Gallery** — Responsive card grid displaying project title, thumbnail, intern name, internship track, short description, technologies, and live/GitHub links.
- **Search** — Real-time search by project title or intern name with a clear button.
- **Track Filters** — Filter by Front-End Development, Prompt Engineering, Data Analytics, or UI/UX Design. Includes an "All Projects" option.
- **Reset Filters** — One-click reset of search and filter state.
- **Project Details Modal** — Full-screen accessible modal with full description, technologies, valid project links, and keyboard/Escape support.
- **State Handling** — Loading spinner, empty gallery, no search results, and error states with retry.
- **Sample Data** — 8 fictional sample projects across 4 tracks, clearly labeled as demo data.
- **Responsive Design** — Optimized for mobile, tablet, and desktop viewports.
- **Accessibility** — Keyboard navigation, ARIA labels, focus-visible outlines, and Escape-to-close modal.

## Brand Palette

| Color            | Hex       | Usage                         |
|------------------|-----------|-------------------------------|
| Teal Green       | `#18B59A` | Primary accent, buttons       |
| Deep Blue-Green  | `#073A40` | Text, headings, footer        |
| White            | `#FFFFFF` | Cards, nav background          |
| Light Background | `#EAF7F4` | Page background, subtle fills  |

## Sample Data Structure

All sample data lives in `src/data/projects.ts`. Each project follows this structure:

```typescript
interface Project {
  id: string;                  // unique identifier
  title: string;               // project name
  internName: string;          // intern's full name
  track: ProjectTrack;         // one of: Front-End Development | Prompt Engineering | Data Analytics | UI/UX Design
  shortDescription: string;    // 1-2 sentence summary for cards
  fullDescription: string;      // detailed description for modal
  technologies: string[];      // tech stack array
  thumbnail: string;           // image URL
  links: {
    live?: string;             // optional live demo URL
    github?: string;           // optional GitHub URL
  };
}
```

All records are **fictional sample data** created for demonstration. They are not actual company submissions or approved projects.

## Component Architecture

| Component               | File                                        | Responsibility                                          |
|-------------------------|---------------------------------------------|--------------------------------------------------------|
| `App`                   | `src/App.tsx`                               | Root layout, composes all sections                      |
| `Navbar`                | `src/components/Navbar.tsx`                 | Top navigation, branding, mobile menu                   |
| `Hero`                  | `src/components/Hero.tsx`                    | Landing hero with stats and CTAs                        |
| `ProjectsPage`          | `src/components/ProjectsPage.tsx`           | State management: search, filter, modal, loading states |
| `SearchBar`             | `src/components/SearchBar.tsx`               | Search input with clear button                          |
| `FilterControls`        | `src/components/FilterControls.tsx`         | Track filter buttons, reset, result count               |
| `ProjectCard`           | `src/components/ProjectCard.tsx`             | Individual project card with thumbnail and links        |
| `ProjectDetailsModal`   | `src/components/ProjectDetailsModal.tsx`     | Full-project modal with keyboard support                |
| `Footer`                | `src/components/Footer.tsx`                  | Company footer with links                               |

## Setup Commands

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Run the linter
npm run lint

# Type check
npm run typecheck

# Preview the production build
npm run preview
```

## Fetching Approved Projects from Supabase (Future)

When the organization is ready to display real approved intern projects, data can be
served from Supabase with proper access controls. Here is the recommended approach:

### 1. Create a `projects` table

```sql
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  intern_name TEXT NOT NULL,
  track TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  technologies TEXT[] NOT NULL DEFAULT '{}',
  thumbnail TEXT,
  live_url TEXT,
  github_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
```

### 2. Row Level Security Policies

Only **approved** projects should be publicly readable:

```sql
CREATE POLICY "select_approved_projects"
  ON public.projects FOR SELECT
  TO anon, authenticated
  USING (status = 'approved');
```

Write operations (insert/update/delete) should be restricted to authenticated admin roles:

```sql
CREATE POLICY "insert_projects_admin"
  ON public.projects FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "update_projects_admin"
  ON public.projects FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "delete_projects_admin"
  ON public.projects FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);
```

For production, replace the admin checks with role-based logic (e.g., checking
`auth.jwt() ->> 'role'` for an admin claim) so only authorized staff can manage records.

### 3. Client-side query

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

async function fetchApprovedProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'approved')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}
```

### Security Notes

- Never expose the service role key in client-side code.
- Always enforce access control at the database level with RLS — do not rely on
  client-side filtering alone.
- Validate and sanitize all user-supplied URLs before storing them.
- Use Supabase Storage with bucket-level policies for project thumbnails.

## License

This project is a demonstration application. All project data is fictional.
