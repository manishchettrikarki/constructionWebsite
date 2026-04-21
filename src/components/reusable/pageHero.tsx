import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string; // omit for the current (last) crumb
}

interface PageHeroProps {
  subtitle: string;
  title: string;
  breadcrumbs: Breadcrumb[];
}

export function PageHero({ subtitle, title, breadcrumbs }: PageHeroProps) {
  return (
    <div className="bg-[#1a1a2e] relative overflow-hidden py-20">
      {/* Decorative rings */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-125 h-125 rounded-full border border-white/20" />
        <div className="absolute -bottom-20 -left-20 w-75 h-75 rounded-full border border-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#ffc631] mb-4">
          {subtitle}
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <li key={i} className="flex items-center gap-2">
                {/* Separator — not before first crumb */}
                {i > 0 && <span className="text-gray-600">/</span>}

                {isLast || !crumb.href ? (
                  <span className="text-[#ffc631] font-medium">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-gray-400 hover:text-[#ffc631] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
