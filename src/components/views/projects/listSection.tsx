"use client";

import Image from "next/image";
import { ArrowLink } from "@/components/reusable/arrowLink";
import { useState } from "react";

const projects = [
  {
    title: "Food Factory Design and Construction",
    location: "Karli Turnpike Apt. 993 Port",
    excerpt:
      "Elit scelerisque mauris pellentesque pulvinar. Mattis aliquam faucibus purus in massa tempor. Diam phasellus vestibulum lorem sed risus ultricies. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus.",
    img: "/img/projects/05.jpg",
    href: "/projects/single-project",
  },
  {
    title: "Fresh Concept Construction Renovation",
    location: "Daphne Way New Reaganmouth",
    excerpt:
      "Vel orci porta non pulvinar neque laoreet. Erat velit scelerisque in dictum non consectetur a. Mus mauris vitae ultricies leo. Malesuada fames ac turpis egestas maecenas pharetra. Adipiscing tristique risus nec feugiat in.",
    img: "/img/projects/07.jpg",
    href: "/projects/single-project",
  },
  {
    title: "Jazzy Elite Construction Shopping Center",
    location: "100 Sunrise Ct Hamel, Minnesota",
    excerpt:
      "Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Consectetur purus ut faucibus pulvinar elementum integer. Cursus in hac habitasse platea dictumst quisque. Ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
    img: "/img/projects/08.jpg",
    href: "/projects/single-project",
  },
  {
    title: "Installation and Creation of a Water Supply System",
    location: "Schoen Ramp Suite 607 Borerton",
    excerpt:
      "Tortor id aliquet lectus proin nibh. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Purus in mollis nunc sed id semper risus in hendrerit. Morbi tristique senectus et netus et malesuada.",
    img: "/img/projects/09.jpg",
    href: "/projects/single-project",
  },
];

export function ProjectsListSection() {
  const [imgSrc, setImgSrc] = useState(projects[0].img);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col divide-y divide-gray-100">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row items-start gap-10 py-16 group ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 h-72 sm:h-90 rounded-2xl overflow-hidden bg-gray-100 relative shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src={imgSrc}
                    alt={p.title}
                    fill
                    onError={() => setImgSrc("/fallback.jpg")}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Fallback icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    className="w-24 h-24 text-gray-200"
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
                {/* Gold accent bar */}
                <div
                  className={`absolute top-0 h-full w-1.5 bg-[#ffc631] ${
                    i % 2 !== 0
                      ? "right-0 rounded-r-2xl"
                      : "left-0 rounded-l-2xl"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5 justify-center py-4 lg:w-1/2">
                {/* Location */}
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg
                    className="w-4 h-4 text-[#ffc631] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {p.location}
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] leading-snug group-hover:text-[#ffc631] transition-colors duration-200">
                  {p.title}
                </h2>

                {/* Gold divider */}
                <div className="w-12 h-0.5 bg-[#ffc631]" />

                {/* Excerpt */}
                <p className="text-gray-500 leading-relaxed text-sm">
                  {p.excerpt}
                </p>

                <ArrowLink href={p.href}>Details</ArrowLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
