import { Subtitle } from "@/components/reusable/subtitle";
import { SERVICES } from "@/utils/constant";

export function ServicesListSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <Subtitle>What We Do</Subtitle>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
            Our <span className="text-[#ffc631]">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-100">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="p-8 border-b border-r border-gray-100 group hover:bg-[#1a1a2e] transition-colors duration-300"
            >
              <span className="text-5xl font-extrabold text-gray-100 group-hover:text-white/10 transition-colors select-none">
                {service.n}
              </span>
              <h3 className="text-lg font-bold text-[#1a1a2e] group-hover:text-white mt-3 mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed mb-5 transition-colors">
                {service.desc}
              </p>
              {/* <ArrowLink href="/services/single-service">Learn More</ArrowLink> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}