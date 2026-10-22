export interface GitHubUser {
  id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  company: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  updated_at: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
}

export type SearchStatus = 'idle' | 'loading' | 'success' | 'error';

export interface ApiError {
  type: 'not_found' | 'rate_limit' | 'network' | 'validation' | 'unknown';
  message: string;
  retryAfter?: number;
}
