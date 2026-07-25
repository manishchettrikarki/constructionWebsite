import { createClient } from "@/lib/supabase/server";
import { PROJECTS as STATIC_PROJECTS } from "@/contents/projects";
import { PublicProject } from "@/lib/data/projects.types";

export type { PublicProject } from "@/lib/data/projects.types";
export { deriveCategories } from "@/lib/data/projects.types";

const STATIC_FALLBACK: PublicProject[] = STATIC_PROJECTS.map((p, i) => ({
  id: `static-${i}`,
  title: p.title,
  location: p.location,
  excerpt: p.excerpt,
  img: p.img,
  href: p.href,
  category: p.category,
}));

/**
 * Reads the project directory from Supabase, ordered for display.
 * Falls back to the static PROJECTS array in contents/projects.ts if
 * Supabase isn't configured yet, the table is empty, or the request
 * fails for any reason.
 */
export async function getProjects(): Promise<PublicProject[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) return STATIC_FALLBACK;

    return data.map((row) => ({
      id: row.id,
      title: row.title,
      location: row.location,
      excerpt: row.excerpt,
      img: row.image,
      href: row.href,
      category: row.category,
      status: row.status,
    }));
  } catch {
    return STATIC_FALLBACK;
  }
}
