import { createClient } from "@/lib/supabase/server";
import { TEAM_MEMBERS } from "@/contents/aboutPage";

export interface PublicTeamMember {
  id: string;
  name: string;
  position: string;
  qualification: string;
  experience: string;
}

const STATIC_FALLBACK: PublicTeamMember[] = TEAM_MEMBERS.map((m, i) => ({
  id: `static-${i}`,
  name: m.name,
  position: m.position,
  qualification: m.qualification,
  experience: m.experience,
}));

/**
 * Reads the team roster from Supabase, ordered for display. Falls back to
 * the static TEAM_MEMBERS array in contents/aboutPage.ts if Supabase
 * isn't configured yet, the table is empty, or the request fails.
 */
export async function getTeamMembers(): Promise<PublicTeamMember[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("team_members")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) return STATIC_FALLBACK;

    return data.map((row) => ({
      id: row.id,
      name: row.name,
      position: row.position,
      qualification: row.qualification,
      experience: row.experience,
    }));
  } catch {
    return STATIC_FALLBACK;
  }
}
