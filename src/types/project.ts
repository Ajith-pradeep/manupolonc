export type ProjectCategory =
  | "venture"
  | "real-estate"
  | "business"
  | "community"
  | "other";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  date?: string;
  externalUrl?: string;
  images: ProjectImage[];
  /** True when content is a placeholder awaiting verified details. */
  isPlaceholder: boolean;
  featured?: boolean;
}
