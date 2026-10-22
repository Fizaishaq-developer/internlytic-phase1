import { RepoCard } from './RepoCard';
import type { GitHubRepo } from '../types';

interface RepoListProps {
  repos: GitHubRepo[];
}

export function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white/60 p-10 text-center">
        <p className="text-base font-medium text-slate-600">No public repositories found</p>
        <p className="mt-1 text-sm text-slate-400">
          This user hasn't published any public repositories yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {repos.map((repo, index) => (
        <RepoCard key={repo.id} repo={repo} index={index} />
      ))}
    </div>
  );
}
