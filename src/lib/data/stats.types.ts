/**
 * Types and pure helpers for the site's headline figures.
 *
 * Kept separate from stats.ts because that module imports the Supabase
 * server client (and therefore next/headers), which must never be pulled
 * into a client component's bundle. Client components import from here.
 */

/**
 * Every headline figure the marketing pages quote, in one place.
 *
 * These used to be typed by hand into four different components, which is
 * how the site ended up claiming 30+, 31+ and 24 projects on the same
 * visit. Anything derivable from the admin panel is counted live.
 */
export interface SiteStats {
  totalProjects: number;
  completedProjects: number;
  ongoingProjects: number;
  teamMembers: number;
  yearsSinceEstablished: number;
}

/** Keys a piece of content may point at to pull a live number. */
export type StatSource = keyof SiteStats;

/**
 * Substitutes {statName} placeholders in a piece of copy, so a label like
 * "{completedProjects}+ Successfully Completed Projects" tracks the data.
 */
export function applyStatTokens(label: string, stats: SiteStats): string {
  return label.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in stats ? String(stats[key as StatSource]) : match,
  );
}
