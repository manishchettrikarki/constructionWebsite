import Image from "next/image";
import { Btn } from "@/components/reusable/button";
import { SectionLabel } from "@/components/reusable/sectionLabel";
import { spotsContent } from "@/contents/homePage";

export function Spots() {
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
              className="object-contain opacity-90 w-full h-full"
            />

            {/* Hotspots */}
            {spotsContent.locations.map((s, i) => (
              <span
                key={i}
                title={s.name}
                className="absolute w-3 h-3 bg-[#ffc631] rounded-full -translate-x-1/2 -translate-y-1/2 cursor-pointer before:absolute before:inset-0 before:rounded-full before:bg-[#ffc631]/40 before:scale-[2.5] before:animate-ping"
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
              />
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
                {spotsContent.stats[0].value}
              </div>
              <div className="text-sm font-bold mt-2">
                {spotsContent.stats[0].label}
              </div>
            </div>
            <div>
              <div className="text-6xl lg:text-7xl font-black text-[#0da574] font-['Archivo',sans-serif] leading-none">
                {spotsContent.stats[1].value}
              </div>
              <div className="text-sm font-bold mt-2">
                {spotsContent.stats[1].label}
              </div>
            </div>
          </div>
          <Btn href={spotsContent.cta.href}>{spotsContent.cta.label}</Btn>
        </div>
      </div>
    </section>
  );
}
