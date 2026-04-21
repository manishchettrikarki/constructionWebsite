import { ArrowLink } from "@/components/reusable/arrowLink";
import { SectionLabel } from "@/components/reusable/sectionLabel";
import { services } from "@/utils/constant";

export function Services() {
  return (
    <section className="py-20 lg:py-45">
      <div className="max-w-322.5 mx-auto px-5">
        <div className="mb-8 md:mb-10 max-w-127.5">
          <SectionLabel>What we do</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight font-['Archivo',sans-serif]">
            Multi-Disciplined Engineering{" "}
            <span className="text-[#0da574]">Solutions</span>
          </h2>
        </div>
        <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.number}
              className="border border-[#c8c8c8] p-8 hover:border-[#0da574] transition-colors flex flex-col"
            >
              <span className="text-[#e9e6e6] font-black text-4xl lg:text-5xl font-['Archivo',sans-serif] leading-none">
                {s.number}
              </span>
              <h4 className="mt-5 mb-4 text-lg font-bold font-['Archivo',sans-serif]">
                {s.title}
              </h4>
              <p className="text-[#202c38] text-sm leading-relaxed flex-1 mb-10">
                {s.description}
              </p>
              <ArrowLink href="#">Details</ArrowLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
