import { Btn } from "@/components/reusable/button";
import { SectionLabel } from "@/components/reusable/sectionLabel";
import { servicesContent } from "@/contents/homePage";

export function Services() {
  return (
    <section className="py-20 lg:py-45">
      <div className="max-w-322.5 mx-auto px-5">
        <div className="mb-8 md:mb-10 max-w-127.5">
          <SectionLabel>{servicesContent.label}</SectionLabel>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight font-['Archivo',sans-serif]">
            {servicesContent.titleOne}{" "}
            <span className="text-[#0da574]">
              {servicesContent.titleHighlight}
            </span>
          </h2>
        </div>

        <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.services.map((s) => (
            <li
              key={s.id}
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
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-14 lg:mt-16">
          <Btn href="/services">See All Services</Btn>
        </div>
      </div>
    </section>
  );
}
