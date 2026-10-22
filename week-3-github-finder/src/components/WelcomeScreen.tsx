import { ArrowRight, GitBranch, Info, Search } from 'lucide-react';

interface WelcomeScreenProps {
  onTryExample: (username: string) => void;
}

const EXAMPLES = [
  { name: 'torvalds', desc: 'Creator of Linux' },
  { name: 'gaearon', desc: 'Creator of Redux' },
  { name: 'sindresorhus', desc: 'Prolific open-sourcer' },
  { name: 'yyx990803', desc: 'Creator of Vue.js' },
];

export function WelcomeScreen({ onTryExample }: WelcomeScreenProps) {
  return (
    <div className="animate-fade-in flex flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/20">
        <GitBranch size={40} strokeWidth={1.8} />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-ink-900 sm:text-3xl">
        Find any GitHub developer
      </h2>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-500">
        Type a GitHub username above and press <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-xs font-medium text-slate-600">Enter</kbd> or click Search to see their profile, stats, and latest repositories.
      </p>

      <div className="mt-8 w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
        <div className="flex items-center gap-2 text-primary-700">
          <Info size={18} strokeWidth={2} />
          <h3 className="text-sm font-semibold uppercase tracking-wide">How it works</h3>
        </div>
        <ol className="mt-4 space-y-3">
          <li className="flex items-start gap-3 text-sm text-slate-600">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">1</span>
            Enter a valid GitHub username in the search bar above.
          </li>
          <li className="flex items-start gap-3 text-sm text-slate-600">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">2</span>
            View the user's avatar, bio, location, company, and follower stats.
          </li>
          <li className="flex items-start gap-3 text-sm text-slate-600">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">3</span>
            Browse up to 30 of their most recently updated repositories with stars and languages.
          </li>
        </ol>
      </div>

      <div className="mt-8 w-full max-w-2xl">
        <p className="mb-3 flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
          <Search size={15} strokeWidth={2} />
          Try an example
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {EXAMPLES.map((ex) => (
            <button
              key={ex.name}
              type="button"
              onClick={() => onTryExample(ex.name)}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-primary-400 hover:bg-primary-50 hover:text-primary-700"
            >
              <span className="font-mono">{ex.name}</span>
              <span className="hidden text-slate-400 sm:inline">— {ex.desc}</span>
              <ArrowRight
                size={14}
                strokeWidth={2}
                className="text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary-500"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
