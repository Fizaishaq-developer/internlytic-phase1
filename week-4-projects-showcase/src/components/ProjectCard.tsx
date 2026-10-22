import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const trackColors: Record<string, string> = {
  'Front-End Development': 'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
  'Prompt Engineering': 'bg-brand-deep/10 text-brand-deep border-brand-deep/20',
  'Data Analytics': 'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
  'UI/UX Design': 'bg-brand-deep/10 text-brand-deep border-brand-deep/20',
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      className="group bg-white rounded-2xl overflow-hidden border border-brand-deep/8 shadow-sm hover:shadow-xl hover:border-brand-teal/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
    >
      <div className="relative h-44 overflow-hidden bg-surface-light">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${trackColors[project.track]}`}
        >
          {project.track}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-brand-deep leading-snug group-hover:text-brand-teal transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-deep/50">
          by {project.internName}
        </p>
        <p className="mt-3 text-sm text-brand-deep/65 leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium text-brand-deep/70 bg-surface-light rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium text-brand-deep/40">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-brand-deep/8 flex items-center gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-brand-teal hover:text-brand-teal-dark transition-colors"
              aria-label={`Live demo of ${project.title}`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-brand-deep/60 hover:text-brand-teal transition-colors"
              aria-label={`GitHub repository of ${project.title}`}
            >
              <Github size={14} />
              Code
            </a>
          )}
          <span className="ml-auto text-sm text-brand-deep/40 group-hover:text-brand-teal transition-colors">
            View details →
          </span>
        </div>
      </div>
    </article>
  );
}
