export interface ProjectInfo {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  structure: string[];
  visitLink: string;
  repositories: RepoInfo[];
  images: string[];
}

export interface RepoInfo {
  name: string;
  link: string;
}
