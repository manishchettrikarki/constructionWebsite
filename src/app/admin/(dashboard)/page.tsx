import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [
    { count: projectCount },
    { count: serviceCount },
    { count: teamCount },
    { count: testimonialCount },
    { count: faqCount },
    { count: unreadCount },
    { data: contact },
  ] = await Promise.all([
    supabase.from("projects").select("*", { count: "exact", head: true }),
    supabase.from("services").select("*", { count: "exact", head: true }),
    supabase.from("team_members").select("*", { count: "exact", head: true }),
    supabase.from("testimonials").select("*", { count: "exact", head: true }),
    supabase.from("faqs").select("*", { count: "exact", head: true }),
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true })
      .eq("is_read", false),
    supabase.from("contact_details").select("email").limit(1).maybeSingle(),
  ]);

  const cards = [
    {
      label: "Projects",
      value: projectCount ?? 0,
      href: "/admin/projects",
      cta: "Manage projects",
    },
    {
      label: "Services",
      value: serviceCount ?? 0,
      href: "/admin/services",
      cta: "Manage services",
    },
    {
      label: "Team Members",
      value: teamCount ?? 0,
      href: "/admin/team",
      cta: "Manage team",
    },
    {
      label: "Testimonials",
      value: testimonialCount ?? 0,
      href: "/admin/testimonials",
      cta: "Manage testimonials",
    },
    {
      label: "FAQs",
      value: faqCount ?? 0,
      href: "/admin/faqs",
      cta: "Manage FAQs",
    },
    {
      label: "Unread messages",
      value: unreadCount ?? 0,
      href: "/admin/messages",
      cta: "Open inbox",
    },
    {
      label: "Contact email on file",
      value: contact?.email || "Not set",
      href: "/admin/contact",
      cta: "Manage contact details",
      isText: true,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">
        Dashboard
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Welcome back. Everything you change here goes live on the public site
        immediately.
      </p>

      <div className="grid sm:grid-cols-3 gap-5">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white border border-gray-100 hover:border-[#ffc631]/50 hover:shadow-md rounded-2xl p-6 flex flex-col gap-2 transition-all"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              {card.label}
            </span>
            <span
              className={`font-extrabold text-[#1a1a2e] ${
                card.isText ? "text-base truncate" : "text-3xl"
              }`}
            >
              {card.value}
            </span>
            <span className="text-xs text-[#ffc631] font-semibold mt-2">
              {card.cta} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}