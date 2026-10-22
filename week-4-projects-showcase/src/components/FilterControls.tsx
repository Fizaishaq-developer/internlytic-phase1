import { RotateCcw, Layers } from 'lucide-react';
import type { ProjectTrack } from '@/types';
import { TRACKS } from '@/data/projects';

interface FilterControlsProps {
  activeTrack: ProjectTrack | 'All';
  onTrackChange: (track: ProjectTrack | 'All') => void;
  onReset: () => void;
  resultsCount: number;
  hasActiveFilters: boolean;
}

export function FilterControls({
  activeTrack,
  onTrackChange,
  onReset,
  resultsCount,
  hasActiveFilters,
}: FilterControlsProps) {
  const options: (ProjectTrack | 'All')[] = ['All', ...TRACKS];

  return (
    <div id="filters" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2 text-brand-deep/60 shrink-0">
          <Layers size={16} />
          <span className="text-sm font-medium">Filter by track:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onTrackChange(option)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                activeTrack === option
                  ? 'bg-brand-teal text-white border-brand-teal shadow-sm'
                  : 'bg-white text-brand-deep/70 border-brand-deep/10 hover:border-brand-teal/40 hover:text-brand-teal'
              }`}
              aria-pressed={activeTrack === option}
            >
              {option === 'All' ? 'All Projects' : option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="text-sm text-brand-deep/50">
          Showing <span className="font-semibold text-brand-deep">{resultsCount}</span>{' '}
          {resultsCount === 1 ? 'project' : 'projects'}
        </p>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-brand-deep/60 hover:text-brand-teal hover:bg-surface-light rounded-lg transition-colors"
          >
            <RotateCcw size={14} />
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}
