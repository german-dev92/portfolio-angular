export type ProjectKind = 'featured' | 'project';

export interface Project {
  id: string;
  kind: ProjectKind;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  route?: string;
  accent?: 'turquoise' | 'cyan' | 'primary';
  comingSoon?: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  summary: string;
}
