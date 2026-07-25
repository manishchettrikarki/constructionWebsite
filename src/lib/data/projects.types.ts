import { ProjectStatus } from "@/types/database";

export interface PublicProject {
  id: string;
  title: string;
  location: string;
  excerpt: string;
  img: string;
  href: string;
  category: string;
  status?: ProjectStatus;
}

/** Unique category list derived from whatever project set is in play. */
export function deriveCategories(projects: PublicProject[]): string[] {
  return Array.from(new Set(projects.map((p) => p.category)));
}
