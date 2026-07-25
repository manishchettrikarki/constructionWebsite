import type { ProjectStatus } from "@/types/database";

export interface PublicService {
  id: string;
  n: string;
  title: string;
  desc: string;
  href: string;
}

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

export interface PublicContactDetails {
  phone: string;
  email: string;
  address: string;
}

/** Unique category list derived from whatever project set is in play. */
export function deriveCategories(projects: PublicProject[]): string[] {
  return Array.from(new Set(projects.map((p) => p.category)));
}