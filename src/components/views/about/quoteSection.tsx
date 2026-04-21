"use client";
export function AboutQuoteSection() {
  return (
    <section className="py-24 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Decorative gear icon */}
          <div className="w-20 h-20 rounded-full border border-[#ffc631]/30 flex items-center justify-center mb-2">
            <svg
              className="w-10 h-10 text-[#ffc631]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffc631]">
            Who we are
          </span>

          {/* Large quote */}
          <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed">
            &ldquo;Pulvinar elementum integer enim neque volutpat ac. Amet
            dictum sit amet justo donec enim diam vulputate ut. Egestas sed sed
            risus pretium quam. Viverra accumsan in nisl nisi scelerisque
            eu.&rdquo;
          </blockquote>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-[#ffc631]" />

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 overflow-hidden">
              <img
                src="/img/avatars/founder.jpg"
                alt="Benjamin Miller"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <span className="text-white font-semibold text-sm">
              Benjamin Miller
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
