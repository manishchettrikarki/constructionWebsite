// components/projects/ProjectsListSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
// import { ArrowLink } from "@/components/reusable/arrowLink";
import { PROJECTS } from "@/contents/projects";
import { BuildingOverlayIcon, ChevronIcon, LocationIcon } from "@/icons";

// 
const INITIAL_DISPLAY = 4;

export function ProjectsListSection() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_DISPLAY);
  const hasMore = PROJECTS.length > INITIAL_DISPLAY;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
              Our <span className="text-[#ffc631]">Projects</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Successfully delivered{" "}
              <span className="font-bold text-[#1a1a2e]">{PROJECTS.length}+</span>{" "}
              projects across Nepal
            </p>
          </div>
          <div className="text-sm text-gray-400">
            {showAll ? (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffc631]" />
                Showing all {PROJECTS.length} projects
              </span>
            ) : (
              <span>
                Showing {INITIAL_DISPLAY} of {PROJECTS.length} projects
              </span>
            )}
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col divide-y divide-gray-100">
          {displayedProjects.map((project, index: number) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-start gap-10 py-16 group ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 h-72 sm:h-90 rounded-2xl overflow-hidden bg-gray-100 relative shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/fallback.jpg";
                    }}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <BuildingOverlayIcon className="w-24 h-24 text-gray-200/50" />
                </div> */}
                <div
                  className={`absolute top-0 h-full w-1.5 bg-[#ffc631] ${index % 2 !== 0
                    ? "right-0 rounded-r-2xl"
                    : "left-0 rounded-l-2xl"
                    }`}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5 justify-center py-4 lg:w-1/2">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <LocationIcon className="w-4 h-4 text-[#ffc631] shrink-0" />
                  {project.location}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] leading-snug group-hover:text-[#ffc631] transition-colors duration-200">
                  {project.title}
                </h2>

                <div className="w-12 h-0.5 bg-[#ffc631]" />

                <p className="text-gray-500 leading-relaxed text-sm">
                  {project.excerpt}
                </p>

                {/* <ArrowLink href={project.href}>Learn More</ArrowLink> */}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <div className="flex flex-col items-center gap-4 mt-16 pt-8 border-t border-gray-100">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-3 px-10 py-4 bg-[#1a1a2e] hover:bg-[#ffc631] text-white hover:text-[#1a1a2e] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>{showAll ? "Show Less" : "View All Projects"}</span>
              <ChevronIcon
                className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""
                  }`}
              />
            </button>
            <p className="text-sm text-gray-400">
              {showAll
                ? `Showing all ${PROJECTS.length} projects`
                : `Showing ${INITIAL_DISPLAY} of ${PROJECTS.length} projects`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}