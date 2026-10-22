import { ExternalLink, GitFork, Star } from 'lucide-react';
import type { GitHubRepo } from '../types';

interface RepoCardProps {
  repo: GitHubRepo;
  index: number;
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Shell: '#89e051',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#41b883',
  Svelte: '#ff3e00',
  Scala: '#c22d40',
  Lua: '#000080',
  Elixir: '#6e4a7e',
  Haskell: '#5e5086',
  Clojure: '#db5855',
  Perl: '#0298c3',
  R: '#198CE7',
  Julia: '#a270ba',
  Zig: '#ec915c',
  Nix: '#7e7eff',
  OCaml: '#3be133',
};

export function RepoCard({ repo, index }: RepoCardProps) {
  const langColor = repo.language ? LANGUAGE_COLORS[repo.language] ?? '#94a3b8' : null;

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md"
      style={{ animation: `fadeInUp 0.4s ease-out ${Math.min(index * 40, 600)}ms both` }}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="truncate font-semibold text-ink-900 transition-colors group-hover:text-primary-700">
          {repo.name}
        </h3>
        <ExternalLink
          size={16}
          strokeWidth={2}
          className="mt-0.5 shrink-0 text-slate-300 transition-colors group-hover:text-primary-500"
        />
      </div>

      <p className="mt-2 line-clamp-2 min-h-[2.6rem] text-sm leading-relaxed text-slate-500">
        {repo.description ?? 'No description provided.'}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: langColor ?? '#94a3b8' }}
              aria-hidden="true"
            />
            {repo.language}
          </span>
        )}
        <span className="inline-flex items-center gap-1">
          <Star size={14} strokeWidth={2} className="text-amber-400" />
          {repo.stargazers_count.toLocaleString()}
        </span>
        <span className="inline-flex items-center gap-1">
          <GitFork size={14} strokeWidth={2} className="text-slate-400" />
          {repo.forks_count.toLocaleString()}
        </span>
        {repo.archived && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-500">
            Archived
          </span>
        )}
        {repo.fork && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-500">
            Forked
          </span>
        )}
      </div>
    </a>
  );
}
