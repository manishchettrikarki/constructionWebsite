"use client";

import { ABOUT_QUOTE } from "@/contents/aboutPage";
import { GearIcon } from "@/icons";

export function AboutQuoteSection() {
  return (
    <section className="py-24 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full border border-[#ffc631]/30 flex items-center justify-center mb-2">
            <GearIcon className="w-10 h-10 text-[#ffc631]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffc631]">
            {ABOUT_QUOTE.subtitle}
          </span>

          <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed">
            &ldquo;{ABOUT_QUOTE.quote}&rdquo;
          </blockquote>

          <div className="w-12 h-0.5 bg-[#ffc631]" />

          {/* <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 overflow-hidden">
              <img
                src={ABOUT_QUOTE.author.image}
                alt={ABOUT_QUOTE.author.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            <div className="text-left">
              <p className="text-white font-semibold text-sm">
                {ABOUT_QUOTE.author.name}
              </p>

              <p className="text-xs text-gray-300">
                {ABOUT_QUOTE.author.designation}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}