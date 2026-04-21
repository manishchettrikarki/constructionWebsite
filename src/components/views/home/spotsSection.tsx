import { Btn } from "@/components/reusable/button";
import { SectionLabel } from "@/components/reusable/sectionLabel";

export function Spots() {
  return (
    <section className="py-20 lg:py-45">
      <div className="max-w-322.5 mx-auto px-5 flex flex-col lg:flex-row gap-10 lg:gap-10">
        {/* Map side */}
        <div className="flex-1">
          <div className="mb-8">
            <SectionLabel>Where we work</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black font-['Archivo',sans-serif]">
              <span className="text-[#0da574]">Our Project </span>in the World
            </h2>
          </div>
          {/* Map placeholder */}
          <div className="relative bg-[#f5f5f0] aspect-video mt-6 lg:mt-10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-lg font-semibold">
              [ Map SVG ]
            </div>
            {/* Hot spots */}
            {[
              { x: 25, y: 28 },
              { x: 34, y: 44 },
              { x: 21, y: 71 },
              { x: 41, y: 68 },
              { x: 50, y: 83 },
              { x: 63, y: 53 },
              { x: 86, y: 68 },
              { x: 66, y: 84 },
            ].map((s, i) => (
              <span
                key={i}
                className="absolute w-3 h-3 bg-[#ffc631] rounded-full -translate-x-1/2 -translate-y-1/2 cursor-pointer before:absolute before:inset-0 before:rounded-full before:bg-[#ffc631]/40 before:scale-[2.5] before:animate-ping"
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
              />
            ))}
          </div>
        </div>

        {/* Info side */}
        <div className="lg:max-w-130 xl:max-w-130">
          <p className="text-[#202c38] leading-relaxed mb-8">
            Molestie nunc non blandit massa. Lacus sed viverra tellus in hac
            habitasse platea. Velit egestas dui id ornare arcu. Sapien
            pellentesque habitant morbi tristique senectus et netus. Ut
            consequat semper viverra nam libero. Convallis aenean et tortor
          </p>
          <div className="flex gap-10 mb-10">
            <div>
              <div className="text-6xl lg:text-7xl font-black text-[#0da574] font-['Archivo',sans-serif] leading-none">
                200+
              </div>
              <div className="text-sm font-bold mt-2">
                Active Projects in Civil Engineering
              </div>
            </div>
            <div>
              <div className="text-6xl lg:text-7xl font-black text-[#0da574] font-['Archivo',sans-serif] leading-none">
                99%
              </div>
              <div className="text-sm font-bold mt-2">
                Building Control Approval Rate
              </div>
            </div>
          </div>
          <Btn href="#">About company</Btn>
        </div>
      </div>
    </section>
  );
}
