import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * POST /admin/logout — signs the current user out and redirects to
 * the login page. Triggered from a plain <form method="post"> so it
 * works without client-side JS.
 */
export async function POST(request: Request) {
  const supabase = await createClient();
  await supabase.auth.signOut();

  return NextResponse.redirect(new URL("/admin/login", request.url));
}
