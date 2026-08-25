import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/**
 * Returns a Supabase server client only if the caller has a valid admin
 * session, otherwise redirects to the login page.
 *
 * Server Actions compile to POST endpoints that can be invoked directly,
 * independently of the layout that rendered their form — so the session
 * check in the admin layout does NOT protect them. Every mutating action
 * must call this itself.
 */
export async function requireAdminClient() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return supabase;
}
