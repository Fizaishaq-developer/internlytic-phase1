import { useCallback, useRef, useState } from 'react';
import { GitBranch, Star } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { ProfileHeader } from './components/ProfileHeader';
import { RepoList } from './components/RepoList';
import { ProfileSkeleton, RepoListSkeleton } from './components/Skeletons';
import { ErrorState } from './components/ErrorState';
import { WelcomeScreen } from './components/WelcomeScreen';
import { fetchGitHubUser, fetchGitHubRepos } from './api';
import type { GitHubUser, GitHubRepo, ApiError, SearchStatus } from './types';

export default function App() {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<SearchStatus>('idle');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [error, setError] = useState<ApiError | null>(null);
  const [lastQuery, setLastQuery] = useState('');

  const abortRef = useRef<AbortController | null>(null);

  const performSearch = useCallback(async (username: string) => {
    const trimmed = username.trim();

    if (!trimmed) {
      const validationError: ApiError = {
        type: 'validation',
        message: 'Please enter a GitHub username to search.',
      };
      setError(validationError);
      setStatus('error');
      setUser(null);
      setRepos([]);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus('loading');
    setError(null);
    setUser(null);
    setRepos([]);
    setLastQuery(trimmed);

    try {
      const [userData, repoData] = await Promise.all([
        fetchGitHubUser(trimmed, controller.signal),
        fetchGitHubRepos(trimmed, controller.signal),
      ]);

      if (controller.signal.aborted) return;

      setUser(userData);
      setRepos(repoData);
      setStatus('success');
    } catch (err) {
      if (controller.signal.aborted || err instanceof DOMException) return;

      const apiError =
        err && typeof err === 'object' && 'type' in err
          ? (err as ApiError)
          : ({
              type: 'network',
              message:
                'Unable to reach GitHub. Check your internet connection and try again.',
            } as ApiError);

      setError(apiError);
      setStatus('error');
    }
  }, []);

  const handleSubmit = useCallback(() => {
    performSearch(input);
  }, [input, performSearch]);

  const handleExample = useCallback(
    (username: string) => {
      setInput(username);
      performSearch(username);
    },
    [performSearch]
  );

  const handleRetry = useCallback(() => {
    performSearch(lastQuery);
  }, [lastQuery, performSearch]);

  const isLoading = status === 'loading';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-primary-50/30">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
              <GitBranch size={20} strokeWidth={2} />
            </div>
            <div className="leading-tight">
              <h1 className="text-base font-bold text-ink-900">GitHub Profile Finder</h1>
              <p className="hidden text-xs text-slate-400 sm:block">
                Explore any developer's profile & repositories
              </p>
            </div>
          </div>
          <a
            href="https://docs.github.com/rest"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-primary-700 sm:inline-flex"
          >
            <Star size={14} strokeWidth={2} className="text-amber-400" />
            Powered by GitHub API
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <section className="flex flex-col items-center">
          <SearchBar
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </section>

        <div className="mt-8 sm:mt-10">
          {status === 'idle' && <WelcomeScreen onTryExample={handleExample} />}

          {isLoading && (
            <div className="space-y-6">
              <ProfileSkeleton />
              <div>
                <div className="skeleton-shimmer mb-4 h-6 w-40 rounded-lg" />
                <RepoListSkeleton />
              </div>
            </div>
          )}

          {status === 'error' && error && (
            <ErrorState error={error} onRetry={handleRetry} />
          )}

          {status === 'success' && user && (
            <div className="space-y-8">
              <ProfileHeader user={user} />
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-ink-900">
                    Repositories
                    <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-sm font-semibold text-primary-700">
                      {repos.length}
                    </span>
                  </h2>
                </div>
                <RepoList repos={repos} />
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-slate-200/70 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-400 sm:px-6">
          <p>
            GitHub Profile Finder &middot; Built with React, Vite, TypeScript &amp; Tailwind CSS
          </p>
          <p className="mt-1 text-xs">
            Data from the public GitHub REST API. Unauthenticated requests are limited to 60 per hour.
          </p>
        </div>
      </footer>
    </div>
  );
}
