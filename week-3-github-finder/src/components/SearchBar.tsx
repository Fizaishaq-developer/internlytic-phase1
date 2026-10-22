import { GitBranch, Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export function SearchBar({ value, onChange, onSubmit, isLoading }: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="relative flex items-center">
        <div className="pointer-events-none absolute left-4 text-slate-400">
          <Search size={20} strokeWidth={2} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a GitHub username…"
          aria-label="GitHub username"
          autoComplete="off"
          spellCheck={false}
          className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-32 text-base text-slate-800 shadow-sm transition-all outline-none placeholder:text-slate-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
        />
        <button
          type="button"
          onClick={onSubmit}
          disabled={isLoading}
          aria-label="Search GitHub user"
          className="absolute right-2 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Searching
            </>
          ) : (
            <>
              <GitBranch size={16} strokeWidth={2.2} />
              Search
            </>
          )}
        </button>
      </div>
    </div>
  );
}
