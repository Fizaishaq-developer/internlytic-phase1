import {
  Briefcase,
  Building2,
  Calendar,
  ExternalLink,
  GitFork,
  Globe,
  MapPin,
  UserPlus,
  Users,
  AtSign,
} from 'lucide-react';
import type { GitHubUser } from '../types';

interface ProfileHeaderProps {
  user: GitHubUser;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const joinedDate = new Date(user.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <div className="animate-fade-in-up rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block shrink-0"
          aria-label={`View ${user.login} on GitHub`}
        >
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="h-28 w-28 rounded-2xl border border-slate-200 object-cover shadow-sm transition-transform group-hover:scale-[1.03] sm:h-32 sm:w-32"
          />
        </a>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="truncate text-2xl font-bold text-ink-900 sm:text-3xl">
                {user.name ?? user.login}
              </h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary-600 transition-colors hover:text-primary-700"
              >
                <span className="font-mono text-sm">@{user.login}</span>
                <ExternalLink size={14} strokeWidth={2} />
              </a>
            </div>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-primary-400 hover:text-primary-700"
            >
              View Profile
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          </div>

          {user.bio && (
            <p className="mt-3 text-base leading-relaxed text-slate-600">{user.bio}</p>
          )}

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
            {user.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} strokeWidth={2} className="text-primary-500" />
                {user.location}
              </span>
            )}
            {user.company && (
              <span className="inline-flex items-center gap-1.5">
                <Building2 size={15} strokeWidth={2} className="text-primary-500" />
                {user.company}
              </span>
            )}
            {user.blog && (
              <a
                href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-primary-700"
              >
                <Globe size={15} strokeWidth={2} className="text-primary-500" />
                {user.blog.replace(/^https?:\/\//, '')}
              </a>
            )}
            {user.twitter_username && (
              <a
                href={`https://x.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-primary-700"
              >
                <AtSign size={15} strokeWidth={2} className="text-primary-500" />
                {user.twitter_username}
              </a>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={15} strokeWidth={2} className="text-primary-500" />
              Joined {joinedDate}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard icon={<Briefcase size={18} />} label="Repos" value={user.public_repos} />
        <StatCard icon={<UserPlus size={18} />} label="Followers" value={user.followers} />
        <StatCard icon={<Users size={18} />} label="Following" value={user.following} />
        <StatCard icon={<GitFork size={18} />} label="Gists" value={user.public_gists} />
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-100 bg-slate-50/60 px-3 py-4 text-center transition-colors hover:border-primary-200 hover:bg-primary-50/40">
      <span className="text-primary-600">{icon}</span>
      <span className="text-xl font-bold text-ink-900">{value.toLocaleString()}</span>
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</span>
    </div>
  );
}
