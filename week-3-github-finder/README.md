# GitHub Profile Finder

A clean, modern web app to search for any GitHub user and explore their profile, stats, and repositories. Built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- **Username search** — type any GitHub username and press Enter or click Search
- **Full profile display** — avatar, display name, bio, location, company, blog, Twitter, join date, and stats (repos, followers, following, gists). Unavailable fields are hidden automatically.
- **Repository cards** — up to 30 most recently updated repos with name, description, programming language (color-coded), star count, fork count, and direct links to GitHub
- **Loading skeletons** — shimmer placeholders while data loads
- **Error handling**:
  - Empty input validation
  - User-not-found state
  - Network error state with retry button
  - GitHub API rate-limit messages with retry guidance
- **Stale-result prevention** — previous results are cleared on each new search; in-flight requests are aborted so old data never overwrites new data
- **Responsive** — mobile, tablet, and desktop layouts
- **Accessible** — labeled controls, keyboard support, semantic HTML, safe external links (`rel="noopener noreferrer"`)
- **Welcome screen** — explains how to search with clickable example usernames
- **No backend or API key required** — uses the public GitHub REST API

## API Endpoints

The app fetches data from the public GitHub REST API (no authentication needed):

| Purpose | Endpoint |
|---|---|
| User profile | `https://api.github.com/users/{username}` |
| Repositories | `https://api.github.com/users/{username}/repos?sort=updated&per_page=30` |

> Unauthenticated requests are limited to **60 per hour** per IP. The app detects rate-limit responses and shows a friendly message.

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool & dev server
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling
- **Lucide React** — icons

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd github-profile-finder

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Build & Preview

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The production build is output to the `dist/` directory.

## Deployment

### Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Go to [vercel.com](https://vercel.com), import the repository.
3. Vercel auto-detects Vite — no configuration needed.
4. Click **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel
```

### Netlify

1. Push your code to a Git repository.
2. Go to [netlify.com](https://netlify.com), import the repository.
3. Set the build command to `npm run build` and the publish directory to `dist`.
4. Click **Deploy**.

Or via CLI:

```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to GitHub Pages using your preferred action or tool
```

## Project Structure

```
src/
├── components/
│   ├── SearchBar.tsx       # Username input with Enter-key support
│   ├── ProfileHeader.tsx   # Avatar, bio, stats, metadata
│   ├── RepoCard.tsx        # Single repository card
│   ├── RepoList.tsx        # Grid of repository cards
│   ├── Skeletons.tsx       # Loading skeleton placeholders
│   ├── ErrorState.tsx      # Error display (not found, rate limit, network)
│   └── WelcomeScreen.tsx   # Initial guide screen with examples
├── api.ts                  # GitHub API fetch functions + error mapping
├── types.ts                # TypeScript interfaces
├── App.tsx                 # Main app component & state management
├── main.tsx                # React entry point
└── index.css               # Tailwind CSS + theme + animations
```

## Testing Scenarios

| Scenario | How to test |
|---|---|
| Valid username | Search for `torvalds`, `gaearon`, or `sindresorhus` |
| Invalid username | Search for a nonsense string like `xxnonexistentuserxx` |
| Empty input | Click Search without typing anything |
| Rate limit | Make 60+ searches rapidly to hit the API limit |
| Network error | Disable your internet connection and search |

## License

MIT — free to use and modify.
