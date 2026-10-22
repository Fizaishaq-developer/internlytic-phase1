import { useEffect, useRef } from 'react';
import { X, ExternalLink, Github, User, Layers, Cpu } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div className="absolute inset-0 bg-brand-deep/40 backdrop-blur-sm" />

      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-scale-in">
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-lg bg-white/80 backdrop-blur-sm text-brand-deep/60 hover:text-brand-deep hover:bg-surface-light transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="relative h-56 overflow-hidden rounded-t-2xl bg-surface-light">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/50 to-transparent" />
          <span className="absolute bottom-4 left-5 px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-brand-deep border border-brand-teal/20">
            {project.track}
          </span>
        </div>

        <div className="p-6 lg:p-8">
          <h2 className="font-display font-bold text-2xl text-brand-deep leading-tight pr-10">
            {project.title}
          </h2>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2.5 text-sm text-brand-deep/70">
              <User size={16} className="text-brand-teal shrink-0" />
              <span>{project.internName}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-brand-deep/70">
              <Layers size={16} className="text-brand-teal shrink-0" />
              <span>{project.track}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-deep/40 mb-2">
              About this project
            </h3>
            <p className="text-sm text-brand-deep/75 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-3">
              <Cpu size={16} className="text-brand-teal" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-deep/40">
                Technologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium text-brand-deep/70 bg-surface-light rounded-lg border border-brand-teal/8"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.links.live || project.links.github) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-teal-dark transition-colors shadow-sm text-sm"
                >
                  <ExternalLink size={16} />
                  View Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-white text-brand-deep font-semibold rounded-xl border border-brand-deep/15 hover:border-brand-teal/40 hover:text-brand-teal transition-colors text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              )}
            </div>
          )}

          <p className="mt-6 text-xs text-brand-deep/35 italic">
            This is a fictional sample project created for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
