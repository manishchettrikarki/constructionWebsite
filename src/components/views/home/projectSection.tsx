import { SectionLabel } from "@/components/reusable/sectionLabel";
import { Btn } from "@/components/reusable/button";
import { projectsContent } from "@/contents/homePage";
import { LocationPinIcon } from "@/icons";
import Image from "next/image";

export function Projects() {
  return (
    <section className="bg-[#001f3f] text-white py-15 lg:py-25">
      <div className="max-w-322.5 mx-auto px-5">
        <div className="mb-8 md:mb-10">
          <SectionLabel light>{projectsContent.label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-['Archivo',sans-serif]">
            {projectsContent.titleOne}
            <span className="text-[#ffc631]">
              {projectsContent.titleHighlight}
            </span>
          </h2>
        </div>

        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[60px_40px]">
          {projectsContent.projects.map((p, i) => (
            <li key={i} className="flex flex-col">
              {/* Image */}
              <div className="w-[92%] mx-auto aspect-[625/500] overflow-hidden mb-5 relative group rounded-xl">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#001f3f]/70 via-transparent to-transparent" />
              </div>
              {/* Title */}
              <div className="flex-1 flex flex-col pb-4 mb-4 relative border-b border-[#a9a9a9]">
                <h3 className="text-xl font-bold font-['Archivo',sans-serif]">
                  {p.title}
                </h3>
              </div>
              {/* Info */}
              <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm">
                  <LocationPinIcon className="w-5 h-5 text-[#ffc631] shrink-0" />
                  {p.location}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* See all */}
        <div className="flex justify-center mt-14 lg:mt-16">
          <Btn href="/projects">See All Projects</Btn>
        </div>
      </div>
    </section>
  );
}