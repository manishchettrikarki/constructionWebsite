import Image from "next/image";
import { Btn } from "@/components/reusable/button";
import { SectionLabel } from "@/components/reusable/sectionLabel";
import { spotsContent } from "@/contents/homePage";
import type { SiteStats } from "@/lib/data/stats.types";

export function Spots({ stats }: { stats: SiteStats }) {
  return (
    <section className="py-20 lg:py-45">
      <div className="max-w-322.5 mx-auto px-5 flex flex-col lg:flex-row gap-10 lg:gap-10">
        {/* Map side */}
        <div className="flex-1">
          <div className="mb-8">
            <SectionLabel>{spotsContent.label}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black font-['Archivo',sans-serif]">
              <span className="text-[#0da574]">{spotsContent.titleOne} </span>
              {spotsContent.titleTwo}
            </h2>
          </div>
          {/* Map placeholder */}
          <div className="relative aspect-video mt-6 lg:mt-10 overflow-hidden">
            <Image
              src="/images/nepal.png"
              alt="Nepal Map"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain opacity-90 w-full h-full"
            />

            {/* Hotspots */}
            {spotsContent.locations.map((s, i) => (
              <span
                key={i}
                className="group absolute w-3 h-3 bg-[#ffc631] rounded-full 
                  -translate-x-1/2 -translate-y-1/2 cursor-pointer
                  before:absolute before:inset-0 before:rounded-full
                  before:bg-[#ffc631]/40 before:scale-[2.5] before:animate-ping"
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
              >
                {/* Location name */}
                <span
                  className="absolute left-1/2 bottom-full mb-3
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-md bg-[#1a1a2e] px-3 py-1.5
                    text-xs font-semibold text-white
                    opacity-0 scale-95
                    transition-all duration-200
                    group-hover:opacity-100
                    group-hover:scale-100
                    pointer-events-none
                    z-10
                    after:absolute after:left-1/2 after:top-full
                    after:-translate-x-1/2
                    after:border-4 after:border-transparent
                    after:border-t-[#1a1a2e]"
                >
                  {s.name}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Info side */}
        <div className="lg:max-w-130 xl:max-w-130">
          <p className="text-[#202c38] leading-relaxed mb-8">
            {spotsContent.description}
          </p>
          <div className="flex gap-10 mb-10">
            <div>
              <div className="text-6xl lg:text-7xl font-black text-[#0da574] font-['Archivo',sans-serif] leading-none">
                {stats.totalProjects}
                <span className="text-[#ffc631]">+</span>
              </div>
              <div className="text-sm font-bold mt-2">
                {spotsContent.stats.projectsUndertaken.label}
              </div>
            </div>
            <div>
              <div className="text-6xl lg:text-7xl font-black text-[#0da574] font-['Archivo',sans-serif] leading-none">
                {stats.completedProjects}
              </div>
              <div className="text-sm font-bold mt-2">
                {spotsContent.stats.projectsCompleted.label}
              </div>
            </div>
          </div>
          <Btn href={spotsContent.cta.href}>{spotsContent.cta.label}</Btn>
        </div>
      </div>
    </section>
  );
}
