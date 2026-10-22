export type ProjectTrack =
  | 'Front-End Development'
  | 'Prompt Engineering'
  | 'Data Analytics'
  | 'UI/UX Design';

export interface ProjectLinks {
  live?: string;
  github?: string;
}

export interface Project {
  id: string;
  title: string;
  internName: string;
  track: ProjectTrack;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  thumbnail: string;
  links: ProjectLinks;
}

export type ProjectStatus = 'idle' | 'loading' | 'error';
