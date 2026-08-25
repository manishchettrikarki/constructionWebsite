import { createClient } from "@/lib/supabase/server";
import { faqs as STATIC_FAQS } from "@/utils/constant";

export interface PublicFaq {
  id: string;
  question: string;
  answer: string;
}

const STATIC_FALLBACK: PublicFaq[] = STATIC_FAQS.map((f, i) => ({
  id: `static-${i}`,
  question: f.question,
  answer: f.answer,
}));

/**
 * Reads the FAQ list from Supabase, ordered for display. Falls back to
 * the static `faqs` array in utils/constant.ts if Supabase isn't
 * configured yet, the table is empty, or the request fails for any
 * reason — the public site never breaks because of this.
 */
export async function getFaqs(): Promise<PublicFaq[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) return STATIC_FALLBACK;

    return data.map((row) => ({
      id: row.id,
      question: row.question,
      answer: row.answer,
    }));
  } catch {
    return STATIC_FALLBACK;
  }
}
