export function ProfileSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="skeleton-shimmer h-32 w-32 shrink-0 rounded-2xl" />
        <div className="flex-1 space-y-3">
          <div className="skeleton-shimmer h-7 w-48 rounded-lg" />
          <div className="skeleton-shimmer h-4 w-24 rounded-lg" />
          <div className="skeleton-shimmer h-4 w-full rounded-lg" />
          <div className="skeleton-shimmer h-4 w-3/4 rounded-lg" />
          <div className="flex gap-4 pt-2">
            <div className="skeleton-shimmer h-4 w-20 rounded-lg" />
            <div className="skeleton-shimmer h-4 w-24 rounded-lg" />
            <div className="skeleton-shimmer h-4 w-20 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="skeleton-shimmer h-20 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export function RepoListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="skeleton-shimmer h-5 w-3/4 rounded-lg" />
          <div className="skeleton-shimmer mt-3 h-4 w-full rounded-lg" />
          <div className="skeleton-shimmer mt-2 h-4 w-2/3 rounded-lg" />
          <div className="mt-4 flex gap-4">
            <div className="skeleton-shimmer h-4 w-16 rounded-lg" />
            <div className="skeleton-shimmer h-4 w-12 rounded-lg" />
            <div className="skeleton-shimmer h-4 w-12 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}
