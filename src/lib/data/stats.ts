import { createClient } from "@/lib/supabase/server";
import { PROJECTS as STATIC_PROJECTS } from "@/contents/projects";
import { TEAM_MEMBERS } from "@/contents/aboutPage";
import { COMPANY_INFO } from "@/utils/constant";
import type { SiteStats } from "@/lib/data/stats.types";

export type { SiteStats, StatSource } from "@/lib/data/stats.types";
export { applyStatTokens } from "@/lib/data/stats.types";

function yearsSinceEstablished(): number {
  return Math.max(
    0,
    new Date().getFullYear() - COMPANY_INFO.establishedYearAD,
  );
}

// Used only when Supabase can't be reached. The static project directory
// carries no status field, so everything in it counts as delivered work.
const STATIC_FALLBACK = {
  totalProjects: STATIC_PROJECTS.length,
  completedProjects: STATIC_PROJECTS.length,
  ongoingProjects: 0,
  teamMembers: TEAM_MEMBERS.length,
};

/**
 * Counts the live figures straight from Supabase. Uses head-only count
 * queries, so this costs four cheap round trips and transfers no rows.
 * Falls back to the static content if Supabase isn't configured yet or
 * the request fails — the public site never breaks because of this.
 */
export async function getSiteStats(): Promise<SiteStats> {
  const years = yearsSinceEstablished();

  try {
    const supabase = await createClient();

    const [total, completed, ongoing, team] = await Promise.all([
      supabase.from("projects").select("*", { count: "exact", head: true }),
      supabase
        .from("projects")
        .select("*", { count: "exact", head: true })
        .eq("status", "Completed"),
      supabase
        .from("projects")
        .select("*", { count: "exact", head: true })
        .eq("status", "Ongoing"),
      supabase.from("team_members").select("*", { count: "exact", head: true }),
    ]);

    if (total.error || !total.count) {
      return { ...STATIC_FALLBACK, yearsSinceEstablished: years };
    }

    return {
      totalProjects: total.count,
      completedProjects: completed.count ?? 0,
      ongoingProjects: ongoing.count ?? 0,
      // `|| fallback` rather than `??` so an empty table doesn't render a 0.
      teamMembers: team.count || STATIC_FALLBACK.teamMembers,
      yearsSinceEstablished: years,
    };
  } catch {
    return { ...STATIC_FALLBACK, yearsSinceEstablished: years };
  }
}

