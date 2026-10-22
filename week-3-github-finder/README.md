# GitHub Profile Finder

A modern, responsive web application that lets users search for GitHub profiles and explore user information, statistics, and repositories in one place.

**[🚀 Live Demo](https://internlytic-phase1.vercel.app/)**

## Features

- **GitHub User Search:** Find GitHub users by username using the search button or Enter key.
- **Profile Overview:** View avatars, names, bios, locations, companies, and other available profile details.
- **GitHub Statistics:** Explore public repositories, followers, following, and gists.
- **Repository Explorer:** Browse up to 30 recently updated repositories with descriptions, programming languages, stars, and forks.
- **Loading Skeletons:** Smooth loading placeholders while profile data is retrieved.
- **Error Handling:** Helpful messages for invalid usernames, network issues, and API rate limits.
- **Responsive Design:** Optimized layouts for mobile, tablet, and desktop screens.
- **Accessible Interface:** Keyboard support, labeled controls, semantic HTML, and safe external links.
- **Interactive Welcome Screen:** Start exploring with example GitHub usernames.
- **No Backend Required:** Uses GitHub's public REST API without requiring an API key.

## Tech Stack

- **React 19** — User interface development
- **Vite** — Development server and build tool
- **TypeScript** — Type safety and maintainable code
- **Tailwind CSS v4** — Responsive styling
- **Lucide React** — Icons
- **GitHub REST API** — Fetching user profiles and repositories

## Live Demo

Try the deployed application:

**[https://internlytic-phase1.vercel.app/](https://internlytic-phase1.vercel.app/)**

You can search for example users such as `torvalds`, `gaearon`, or `sindresorhus`.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Git installed

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd week-3-github-finder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal, usually `http://localhost:5173`.

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production files are generated in the `dist/` directory.

## API Endpoints

The application retrieves data from GitHub's public REST API.

| Purpose | Endpoint |
|---|---|
| User profile | `GET /users/{username}` |
| User repositories | `GET /users/{username}/repos?sort=updated&per_page=30` |

Unauthenticated GitHub API requests are generally limited to 60 requests per hour per IP address. The application handles rate-limit responses and provides guidance when the limit is reached.

## Project Structure

```text
week-3-github-finder/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── ProfileHeader.tsx
│   │   ├── RepoCard.tsx
│   │   ├── RepoList.tsx
│   │   ├── Skeletons.tsx
│   │   ├── ErrorState.tsx
│   │   └── WelcomeScreen.tsx
│   ├── api.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── README.md
```

## Testing

Try these scenarios to verify the application:

| Scenario | Test |
|---|---|
| Valid username | Search `torvalds` or `gaearon` |
| Invalid username | Search a nonexistent username |
| Empty input | Click Search without entering a username |
| Network error | Disconnect from the internet and search |
| API rate limit | Test after reaching GitHub's unauthenticated request limit |

## Deployment

This project is deployed on **Vercel**.

To deploy your own copy:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Set the project root directory to `week-3-github-finder` if deploying from a monorepo.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy the application.

## License

This project is licensed under the MIT License.
