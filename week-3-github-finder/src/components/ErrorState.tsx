import { AlertTriangle, Clock, SearchX, WifiOff } from 'lucide-react';
import type { ApiError } from '../types';

interface ErrorStateProps {
  error: ApiError;
  onRetry?: () => void;
}

const ERROR_CONFIG: Record<
  ApiError['type'],
  { icon: React.ReactNode; title: string }
> = {
  not_found: {
    icon: <SearchX size={28} strokeWidth={2} />,
    title: 'User not found',
  },
  rate_limit: {
    icon: <Clock size={28} strokeWidth={2} />,
    title: 'Rate limit exceeded',
  },
  network: {
    icon: <WifiOff size={28} strokeWidth={2} />,
    title: 'Connection problem',
  },
  validation: {
    icon: <AlertTriangle size={28} strokeWidth={2} />,
    title: 'Invalid input',
  },
  unknown: {
    icon: <AlertTriangle size={28} strokeWidth={2} />,
    title: 'Something went wrong',
  },
};

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  const config = ERROR_CONFIG[error.type];

  return (
    <div className="animate-fade-in flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-500">
        {config.icon}
      </div>
      <h3 className="mt-4 text-xl font-bold text-ink-900">{config.title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">{error.message}</p>
      {error.retryAfter ? (
        <p className="mt-2 text-xs font-medium text-slate-400">
          Try again in about {Math.ceil(error.retryAfter / 60)} minute
          {Math.ceil(error.retryAfter / 60) !== 1 ? 's' : ''}.
        </p>
      ) : null}
      {onRetry && error.type !== 'rate_limit' && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 active:scale-[0.97]"
        >
          Try again
        </button>
      )}
    </div>
  );
}
