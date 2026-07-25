import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

// Next.js 16 renamed the "middleware" file convention to "proxy" (this
// file used to be src/middleware.ts exporting `middleware`). Behavior,
// imports, and the config.matcher below are unchanged — only the
// filename and the exported function name changed.
export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Run on everything except static assets/images, so the auth
     * session cookie stays fresh site-wide, and specifically guard
     * /admin/*.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};