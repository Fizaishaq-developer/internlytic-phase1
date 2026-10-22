import { useEffect, useMemo, useState } from 'react';
import { SearchX, AlertTriangle, Loader2, FolderOpen } from 'lucide-react';
import type { Project, ProjectTrack } from '@/types';
import { SAMPLE_PROJECTS } from '@/data/projects';
import { SearchBar } from '@/components/SearchBar';
import { FilterControls } from '@/components/FilterControls';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectDetailsModal } from '@/components/ProjectDetailsModal';

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('loading');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTrack, setActiveTrack] = useState<ProjectTrack | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setStatus('loading');
    const timer = setTimeout(() => {
      try {
        setProjects(SAMPLE_PROJECTS);
        setStatus('idle');
      } catch {
        setStatus('error');
      }
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesTrack = activeTrack === 'All' || project.track === activeTrack;
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.internName.toLowerCase().includes(query);
      return matchesTrack && matchesSearch;
    });
  }, [projects, searchQuery, activeTrack]);

  const hasActiveFilters = searchQuery.trim() !== '' || activeTrack !== 'All';

  const handleReset = () => {
    setSearchQuery('');
    setActiveTrack('All');
  };

  return (
    <section id="projects" className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="mb-8">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-brand-deep tracking-tight">
          Project Gallery
        </h2>
        <p className="mt-3 text-brand-deep/60 text-lg max-w-2xl">
          Browse intern projects across all Phase 1 tracks. Use search and filters to find
          specific work.
        </p>
      </div>

      <div className="space-y-5">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterControls
          activeTrack={activeTrack}
          onTrackChange={setActiveTrack}
          onReset={handleReset}
          resultsCount={filteredProjects.length}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      <div className="mt-8">
        {status === 'loading' && (
          <div className="flex flex-col items-center justify-center py-24 text-brand-deep/50">
            <Loader2 size={32} className="animate-spin text-brand-teal" />
            <p className="mt-4 text-sm font-medium">Loading projects...</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-teal/10 text-brand-teal mb-4">
              <AlertTriangle size={28} />
            </div>
            <h3 className="font-display font-semibold text-lg text-brand-deep">
              Something went wrong
            </h3>
            <p className="mt-1 text-sm text-brand-deep/50 max-w-sm">
              We couldn't load the projects. Please try again later.
            </p>
            <button
              onClick={() => {
                setStatus('loading');
                setTimeout(() => {
                  setProjects(SAMPLE_PROJECTS);
                  setStatus('idle');
                }, 500);
              }}
              className="mt-5 px-5 py-2.5 bg-brand-teal text-white text-sm font-semibold rounded-xl hover:bg-brand-teal-dark transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {status === 'idle' && filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-light text-brand-deep/30 mb-4">
              {searchQuery.trim() !== '' ? <SearchX size={28} /> : <FolderOpen size={28} />}
            </div>
            <h3 className="font-display font-semibold text-lg text-brand-deep">
              {searchQuery.trim() !== ''
                ? 'No matching projects found'
                : 'No projects available'}
            </h3>
            <p className="mt-1 text-sm text-brand-deep/50 max-w-sm">
              {searchQuery.trim() !== ''
                ? `No projects match "${searchQuery}". Try a different search term or reset filters.`
                : 'Check back later for new intern project submissions.'}
            </p>
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="mt-5 px-5 py-2.5 bg-brand-teal text-white text-sm font-semibold rounded-xl hover:bg-brand-teal-dark transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>
        )}

        {status === 'idle' && filteredProjects.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
