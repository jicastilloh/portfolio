export interface ProjectInfo {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  featured: boolean;
  visitLink?: string;
  repositories: RepoInfo[];
  images: string[];
}

export interface RepoInfo {
  name: string;
  link: string;
}
