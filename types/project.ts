export interface Project {
  id: number;
  title: string;
  filter: string;
  category: string;
  thumbnailUrl: string;
  livelink: string;
  description: string;
  github?: string;
  githubimage?: string;
  tech: {
    name: string;
    icon?: string;
    color?: string;
  }[];
}

export interface Category {
  id: number;
  name: string;
}
