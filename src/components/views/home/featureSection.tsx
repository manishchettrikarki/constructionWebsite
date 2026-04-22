import { CheckItem } from "@/components/reusable/checkItem";
import { FeatureCard } from "@/components/reusable/featureCard";
import { SectionLabel } from "@/components/reusable/sectionLabel";
import { featuresContent } from "@/contents/homePage";
import { features } from "@/utils/constant";

export function Features() {
  return (
    <section className="bg-[#001f3f] text-white pt-20 lg:pt-45">
      <div className="max-w-322.5 mx-auto px-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Header card */}
          <div className="sm:col-span-2 lg:col-span-1">
            <SectionLabel light>{featuresContent.label}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black font-['Archivo',sans-serif] mt-2 mb-6">
              <span className="text-[#ffc631]">
                {featuresContent.title.highlight}
              </span>{" "}
              {featuresContent.title.rest}
            </h2>
            <ul className="flex flex-col gap-3">
              {featuresContent.checklist.map((item, i) => (
                <CheckItem key={i}>{item}</CheckItem>
              ))}
            </ul>
          </div>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
