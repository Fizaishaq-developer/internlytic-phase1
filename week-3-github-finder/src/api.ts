import type { GitHubUser, GitHubRepo, ApiError } from './types';

const GITHUB_API = 'https://api.github.com/users';

export async function fetchGitHubUser(
  username: string,
  signal?: AbortSignal
): Promise<GitHubUser> {
  const res = await fetch(`${GITHUB_API}/${encodeURIComponent(username)}`, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  });
  return handleResponse<GitHubUser>(res);
}

export async function fetchGitHubRepos(
  username: string,
  signal?: AbortSignal
): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${GITHUB_API}/${encodeURIComponent(username)}/repos?sort=updated&per_page=30`,
    {
      signal,
      headers: { Accept: 'application/vnd.github+json' },
    }
  );
  return handleResponse<GitHubRepo[]>(res);
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (res.status === 404) {
    const err: ApiError = {
      type: 'not_found',
      message: 'This GitHub user does not exist. Check the spelling and try again.',
    };
    throw err;
  }

  if (res.status === 403) {
    const remaining = res.headers.get('x-ratelimit-remaining');
    const retryAfter = Number(res.headers.get('retry-after') || 0);
    if (remaining === '0') {
      const err: ApiError = {
        type: 'rate_limit',
        message:
          'GitHub API rate limit reached. Unauthenticated requests are limited to 60 per hour. Please try again later.',
        retryAfter: retryAfter || undefined,
      };
      throw err;
    }
    const err: ApiError = {
      type: 'rate_limit',
      message: 'GitHub API access is temporarily restricted. Please try again shortly.',
      retryAfter: retryAfter || undefined,
    };
    throw err;
  }

  if (res.status === 500 || res.status === 502 || res.status === 503) {
    const err: ApiError = {
      type: 'network',
      message: 'GitHub is having issues right now. Please try again in a moment.',
    };
    throw err;
  }

  if (!res.ok) {
    const err: ApiError = {
      type: 'unknown',
      message: `Something went wrong (status ${res.status}). Please try again.`,
    };
    throw err;
  }

  return res.json() as Promise<T>;
}
