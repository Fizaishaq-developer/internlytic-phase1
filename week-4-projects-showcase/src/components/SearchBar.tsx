import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full sm:max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-deep/40 pointer-events-none"
        aria-hidden="true"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by project title or intern name..."
        className="w-full pl-11 pr-10 py-3 bg-white border border-brand-deep/10 rounded-xl text-sm text-brand-deep placeholder:text-brand-deep/35 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 transition-all shadow-sm"
        aria-label="Search projects"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-brand-deep/40 hover:text-brand-deep/70 hover:bg-surface-light rounded-md transition-colors"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
