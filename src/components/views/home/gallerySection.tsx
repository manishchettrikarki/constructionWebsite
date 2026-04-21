import { SectionLabel } from "@/components/reusable/sectionLabel";
import { galleryItems } from "@/utils/constant";

export function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {galleryItems.map((cap, i) => (
        <div
          key={i}
          className="relative overflow-hidden h-65 md:h-85 lg:h-110 xl:h-150 group cursor-pointer"
        >
          <div className="absolute inset-0 bg-linear-to-br from-[#001f3f] to-[#0da574] opacity-30 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <SectionLabel light>Our gallery</SectionLabel>
            <h4 className="font-bold font-['Archivo',sans-serif] text-base mt-1">
              {cap}
            </h4>
            <span className="text-[#ffc631] font-bold text-base uppercase mt-4 font-['Archivo',sans-serif]">
              Special Projects
            </span>
          </div>
          {/* BG color block */}
          <div
            className={`absolute inset-0 -z-10 ${["bg-[#162739]", "bg-[#1a3050]", "bg-[#0f2035]", "bg-[#1d3a5c]"][i]}`}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white/10 text-8xl font-black font-['Archivo',sans-serif]">
            {String(i + 1).padStart(2, "0")}
          </div>
        </div>
      ))}
    </div>
  );
}
