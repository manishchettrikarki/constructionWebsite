import Link from "next/link";

const NAV = [
  { label: "Dashboard", href: "/admin" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Services", href: "/admin/services" },
  { label: "Contact Details", href: "/admin/contact" },
];

export function AdminSidebar({ userEmail }: { userEmail: string }) {
  return (
    <aside className="w-full lg:w-64 shrink-0 bg-[#1a1a2e] text-white flex lg:flex-col lg:min-h-screen">
      <div className="p-6 flex-1">
        <div className="flex items-center gap-2.5 mb-10">
          <span className="w-9 h-9 rounded-md bg-[#ffc631] text-[#1a1a2e] font-black text-xs flex items-center justify-center shrink-0">
            KEC
          </span>
          <div>
            <p className="font-bold text-sm leading-tight">Kallisto Admin</p>
            <p className="text-gray-400 text-[11px] leading-tight truncate max-w-40">
              {userEmail}
            </p>
          </div>
        </div>

        <nav>
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-6 pt-0">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="block text-xs text-gray-400 hover:text-white mb-4 transition-colors"
        >
          View live site ↗
        </a>
        <form action="/admin/logout" method="post">
          <button
            type="submit"
            className="w-full bg-white/10 hover:bg-[#ffc631] hover:text-[#1a1a2e] text-white text-sm font-bold py-2.5 rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
