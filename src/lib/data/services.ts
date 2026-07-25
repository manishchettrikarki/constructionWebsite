import { createClient } from "@/lib/supabase/server";
import { SERVICES } from "@/contents/services";

export interface PublicService {
  id: string;
  n: string;
  title: string;
  desc: string;
  href: string;
}

// The static fallback doesn't have stable ids — synthesize one from
// index so keys stay stable across renders.
const STATIC_FALLBACK: PublicService[] = SERVICES.map((s, i) => ({
  id: `static-${i}`,
  n: s.n,
  title: s.title,
  desc: s.desc,
  href: s.href,
}));

/**
 * Reads the services list from Supabase, ordered for display.
 * Falls back to the static SERVICES array in utils/constant.ts if
 * Supabase isn't configured yet, the table is empty, or the request
 * fails for any reason — the public site never breaks because of this.
 */
export async function getServices(): Promise<PublicService[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) return STATIC_FALLBACK;

    return data.map((row) => ({
      id: row.id,
      n: row.number,
      title: row.title,
      desc: row.description,
      href: row.href,
    }));
  } catch {
    return STATIC_FALLBACK;
  }
}
