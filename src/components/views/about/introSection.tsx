"use client";

import Link from "next/link";
import { Subtitle } from "@/components/reusable/subtitle";
import { ArrowRightIcon, BuildingIcon } from "@/icons";
import { ABOUT_INTRO } from "@/contents/aboutPage";

export function AboutIntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <div>
              <Subtitle>{ABOUT_INTRO.subtitle}</Subtitle>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] mt-1">
                {ABOUT_INTRO.title.normal}{" "}
                <span className="text-[#ffc631]">
                  {ABOUT_INTRO.title.highlight}
                </span>
              </h2>
            </div>

            <p className="text-gray-500 leading-relaxed">
              {ABOUT_INTRO.description}
            </p>

            <ul className="flex flex-col gap-3">
              {ABOUT_INTRO.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                >
                  <ArrowRightIcon className="w-4 h-4 text-[#ffc631] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <Link
                href={ABOUT_INTRO.button.href}
                className="inline-block bg-[#ffc631] hover:bg-[#e6b22c] text-[#1a1a2e] font-bold px-8 py-3.5 rounded transition-colors duration-200"
              >
                {ABOUT_INTRO.button.text}
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="w-full h-120 rounded-2xl overflow-hidden bg-gray-100 relative">
              <img
                src={ABOUT_INTRO.image.src}
                alt={ABOUT_INTRO.image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <BuildingIcon className="w-16 h-16 text-gray-300" />
              </div>

              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ffc631] rounded-l-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}