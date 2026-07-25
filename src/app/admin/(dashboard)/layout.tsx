import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/admin/sidebar";

/**
 * Protected shell for every /admin page except /admin/login (which
 * lives outside this route group so it isn't wrapped by this layout —
 * avoids a redirect loop). middleware.ts already redirects unauthenticated
 * requests before they get here; this check is defense-in-depth.
 */
export default async function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      <AdminSidebar userEmail={user.email ?? "Admin"} />
      <main className="flex-1 p-6 lg:p-10">{children}</main>
    </div>
  );
}
