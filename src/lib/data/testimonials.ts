import { createClient } from "@/lib/supabase/server";
import { REVIEWS } from "@/contents/aboutPage";

export interface PublicTestimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const STATIC_FALLBACK: PublicTestimonial[] = REVIEWS.map((r, i) => ({
  id: `static-${i}`,
  name: r.name,
  role: r.role,
  text: r.text,
  rating: r.rating,
}));

/**
 * Reads client testimonials from Supabase, ordered for display. Falls
 * back to the static REVIEWS array in contents/aboutPage.ts if Supabase
 * isn't configured yet, the table is empty, or the request fails.
 */
export async function getTestimonials(): Promise<PublicTestimonial[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) return STATIC_FALLBACK;

    return data.map((row) => ({
      id: row.id,
      name: row.name,
      role: row.role,
      text: row.quote,
      rating: row.rating,
    }));
  } catch {
    return STATIC_FALLBACK;
  }
}
