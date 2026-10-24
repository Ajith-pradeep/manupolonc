import type { Project } from "@/types/project";

/**
 * Portfolio / ventures fixtures.
 * Entries marked `isPlaceholder: true` are structural demos — replace with verified projects.
 * Leave the array empty to show the empty state, or keep placeholders for layout preview.
 */
export const projects: Project[] = [
  {
    id: "proj-001",
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    summary:
      "A dedicated property experience for discovery, consultation, and lasting client relationships.",
    description:
      "Placeholder venture entry representing the real estate vertical of this digital presence. Replace with a verified project narrative, outcomes, and imagery.",
    category: "real-estate",
    date: "2026",
    images: [
      {
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
        alt: "Architectural interior detail — placeholder project image",
      },
    ],
    isPlaceholder: true,
    featured: true,
  },
  {
    id: "proj-002",
    slug: "professional-ventures",
    title: "Professional Ventures",
    summary:
      "Business initiatives and partnerships awaiting verified publication.",
    description:
      "Placeholder entry for professional ventures. Add titles, dates, partners, and outcomes only when confirmed.",
    category: "venture",
    images: [
      {
        src: "https://images.unsplash.com/photo-1497366811353-7004449cefc4?auto=format&fit=crop&w=1400&q=80",
        alt: "Refined workspace environment — placeholder project image",
      },
    ],
    isPlaceholder: true,
    featured: true,
  },
  {
    id: "proj-003",
    slug: "community-initiatives",
    title: "Community Initiatives",
    summary:
      "Space reserved for verified community or civic work when available.",
    description:
      "Placeholder for community-facing work. Do not invent affiliations or outcomes.",
    category: "community",
    images: [
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14e50108bd0?auto=format&fit=crop&w=1400&q=80",
        alt: "Collaborative gathering space — placeholder project image",
      },
    ],
    isPlaceholder: true,
    featured: false,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectCategories(): string[] {
  return Array.from(new Set(projects.map((p) => p.category)));
}
