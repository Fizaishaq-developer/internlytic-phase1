import type { Project, ProjectTrack } from '@/types';

export const TRACKS: ProjectTrack[] = [
  'Front-End Development',
  'Prompt Engineering',
  'Data Analytics',
  'UI/UX Design',
];

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 'p01',
    title: 'Insight Dashboard',
    internName: 'Aaliyah Mensah',
    track: 'Front-End Development',
    shortDescription:
      'A responsive analytics dashboard built with React and Tailwind, visualizing key metrics in real time.',
    fullDescription:
      'Insight Dashboard is a production-style front-end application that renders interactive charts, KPI cards, and filterable data tables. The project focuses on clean component architecture, accessible navigation, and a fully responsive layout. Interns explored state management patterns, custom hooks for data fetching, and reusable chart components. Built as part of the Phase 1 front-end internship track.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite'],
    thumbnail:
      'https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    links: {
      live: 'https://example.com/insight-dashboard',
      github: 'https://github.com/example/insight-dashboard',
    },
  },
  {
    id: 'p02',
    title: 'PromptForge Studio',
    internName: 'Daniel Okafor',
    track: 'Prompt Engineering',
    shortDescription:
      'A prompt template manager that lets users create, version, and test LLM prompts with structured variables.',
    fullDescription:
      'PromptForge Studio is a tool designed for prompt engineers to build and iterate on LLM prompt templates. Users can define structured variables, compare prompt versions side by side, and run test suites against multiple model outputs. The project demonstrates an understanding of prompt design patterns, variable injection, and evaluation workflows. Created during the Phase 1 prompt engineering internship.',
    technologies: ['Python', 'FastAPI', 'React', 'OpenAI API'],
    thumbnail:
      'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    links: {
      live: 'https://example.com/promptforge',
      github: 'https://github.com/example/promptforge-studio',
    },
  },
  {
    id: 'p03',
    title: 'PocketBudget',
    internName: 'Sofia Ramirez',
    track: 'Front-End Development',
    shortDescription:
      'A mobile-first budgeting app that helps interns track spending categories and set monthly savings goals.',
    fullDescription:
      'PocketBudget is a responsive budgeting application designed with a mobile-first approach. It features category-based expense tracking, visual savings progress bars, and recurring transaction templates. The app uses local storage for persistence and includes light/dark mode support. Built as a Phase 1 front-end development internship deliverable.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'localStorage'],
    thumbnail:
      'https://images.pexels.com/photos/38639/mockup-psd-ipad-iphone-38639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    links: {
      live: 'https://example.com/pocketbudget',
    },
  },
  {
    id: 'p04',
    title: 'DataLens Explorer',
    internName: 'Marcus Chen',
    track: 'Data Analytics',
    shortDescription:
      'An interactive data exploration tool that ingests CSV files and generates visual summaries and insights.',
    fullDescription:
      'DataLens Explorer allows users to upload CSV datasets and receive automated visual summaries including distributions, correlation heatmaps, and outlier detection. The project emphasizes clean data pipelines, responsive chart rendering, and exportable reports. Built during the Phase 1 data analytics internship track with a focus on practical EDA workflows.',
    technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    thumbnail:
      'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    links: {
      live: 'https://example.com/datalens',
      github: 'https://github.com/example/datalens-explorer',
    },
  },
  {
    id: 'p05',
    title: 'Design System Kit',
    internName: 'Priya Sharma',
    track: 'UI/UX Design',
    shortDescription:
      'A reusable component library with documented design tokens, built to ensure consistency across intern projects.',
    fullDescription:
      'The Design System Kit provides a set of accessible, reusable UI components along with a comprehensive design token specification. It includes buttons, form controls, navigation patterns, and modal dialogs — all documented with usage guidelines and accessibility notes. This Phase 1 UI/UX design internship project serves as a shared foundation for other intern-built applications.',
    technologies: ['Figma', 'React', 'Storybook', 'Tailwind CSS'],
    thumbnail:
      'https://images.pexels.com/photos/7654493/pexels-photo-7654493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    links: {
      live: 'https://example.com/design-system-kit',
      github: 'https://github.com/example/design-system-kit',
    },
  },
  {
    id: 'p06',
    title: 'ConvoAI Assistant',
    internName: 'Tunde Adebayo',
    track: 'Prompt Engineering',
    shortDescription:
      'A conversational assistant prototype using structured system prompts and context injection for task-specific help.',
    fullDescription:
      'ConvoAI Assistant is a prototype chatbot built to demonstrate advanced prompt engineering techniques. It uses layered system prompts, context window management, and few-shot examples to maintain coherent, task-specific conversations. The project includes an evaluation harness that scores responses on relevance and helpfulness. Developed during the Phase 1 prompt engineering internship.',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'React'],
    thumbnail:
      'https://images.pexels.com/photos/15940011/pexels-photo-15940011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    links: {
      live: 'https://example.com/convoai',
      github: 'https://github.com/example/convoai-assistant',
    },
  },
  {
    id: 'p07',
    title: 'TerraFlow Visualizer',
    internName: 'Elena Petrova',
    track: 'Data Analytics',
    shortDescription:
      'A geospatial data visualizer that maps environmental sensor readings onto interactive regional dashboards.',
    fullDescription:
      'TerraFlow Visualizer ingests environmental sensor data and renders it on interactive maps with regional overlays. Users can filter by sensor type, time range, and geographic area. The project highlights data cleaning, geospatial joins, and performance-optimized rendering for large datasets. Created as a Phase 1 data analytics internship deliverable.',
    technologies: ['Python', 'Folium', 'Pandas', 'GeoJSON'],
    thumbnail:
      'https://images.pexels.com/photos/7947754/pexels-photo-7947754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    links: {
      github: 'https://github.com/example/terraflow-visualizer',
    },
  },
  {
    id: 'p08',
    title: 'AccessForge UI',
    internName: 'Jordan Williams',
    track: 'UI/UX Design',
    shortDescription:
      'An accessibility-first component playground demonstrating WCAG-compliant patterns and keyboard navigation.',
    fullDescription:
      'AccessForge UI is a component playground focused on accessibility. It demonstrates WCAG 2.1 AA-compliant patterns including focus traps, ARIA live regions, and full keyboard navigation. Each component includes an accessibility checklist and screen reader testing notes. This Phase 1 UI/UX design internship project serves as both a learning resource and a practical component library.',
    technologies: ['React', 'TypeScript', 'Figma', 'ARIA'],
    thumbnail:
      'https://images.pexels.com/photos/1102797/pexels-photo-1102797.png?auto=compress&cs=tinysrgb&h=650&w=940',
    links: {
      live: 'https://example.com/accessforge',
      github: 'https://github.com/example/accessforge-ui',
    },
  },
];
