"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowLink } from "@/components/reusable/arrowLink";
import { MapPinIcon } from "@/icons";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "@/contents/projects";

const ALL_LABEL = "All Projects";

function ProjectCard({ project }: { project: Project }) {
  const [imgSrc, setImgSrc] = useState(project.img);

  return (
    <div className="group flex flex-col bg-white border border-gray-100 hover:border-[#ffc631]/40 hover:shadow-lg rounded-2xl overflow-hidden transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-56 bg-gray-100 shrink-0 overflow-hidden">
        <Image
          src={imgSrc}
          alt={project.title}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setImgSrc("/fallback.jpg")}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Fallback icon, shows through if the image fails */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.5}
              d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 11h2v5H8zm6 0h2v5h-2z"
            />
          </svg>
        </div>

        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-[#1a1a2e]/90 text-[#ffc631] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
          {project.category}
        </span>

        {/* Gold accent bar */}
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#ffc631] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center gap-2 text-gray-400 text-xs">
          <MapPinIcon className="w-3.5 h-3.5 text-[#ffc631] shrink-0" />
          {project.location}
        </div>

        <h3 className="text-lg font-extrabold text-[#1a1a2e] leading-snug group-hover:text-[#ffc631] transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {project.excerpt}
        </p>

        {/* <ArrowLink href={project.href} className="mt-1">
          Details
        </ArrowLink> */}
      </div>
    </div>
  );
}

export function ProjectsListSection() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_LABEL);

  const filters = useMemo(
    () => [ALL_LABEL, ...PROJECT_CATEGORIES],
    []
  );

  const countFor = (label: string) =>
    label === ALL_LABEL
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === label).length;

  const visibleProjects =
    activeCategory === ALL_LABEL
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-6">
          {filters.map((label) => {
            const isActive = label === activeCategory;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActiveCategory(label)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${isActive
                  ? "bg-[#1a1a2e] text-[#ffc631]"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
              >
                {label}
                <span
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${isActive
                    ? "bg-[#ffc631] text-[#1a1a2e]"
                    : "bg-white text-gray-400"
                    }`}
                >
                  {countFor(label)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Result count */}
        <p className="text-gray-400 text-sm mb-10">
          Showing {visibleProjects.length} of {PROJECTS.length} projects
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}