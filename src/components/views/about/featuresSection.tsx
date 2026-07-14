"use client";

import { Subtitle } from "@/components/reusable/subtitle";
import { Checklist } from "@/components/reusable/checklist";
import { ABOUT_CHECKLIST, ABOUT_FEATURES } from "@/contents/aboutPage";
import { BuildingExperience } from "@/animations/aboutPageConstruction";


// 
export function AboutFeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: header + checklist + video */}
          <div className="flex flex-col gap-8">
            <div>
              <Subtitle>Why Choose Kallisto</Subtitle>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
                <span className="text-[#ffc631]">Engineering</span> Solutions Built on
                Experience
              </h2>
            </div>

            <Checklist items={ABOUT_CHECKLIST} />

            {/* Video */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-black/40 border border-gray-200 flex items-center justify-center">
              {/* <img
                src="/img/video/02.jpg"
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              /> */}
              <BuildingExperience />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center"></div>
              {/* <button
                type="button"
                aria-label="Play video"
                className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#ffc631] hover:scale-110 transition-transform duration-200 shadow-xl"
              >
                <svg
                  className="w-5 h-5 text-[#1a1a2e] ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button> */}
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {ABOUT_FEATURES.map((f, i) => {
              const Icon = f.icon;

              return (
                <div
                  key={i}
                  className="bg-white border border-gray-100 hover:border-[#ffc631]/30 hover:shadow-md rounded-xl p-6 flex flex-col gap-4 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-[#ffc631]" />

                  <h3 className="text-[#1a1a2e] font-bold text-sm leading-snug">
                    {f.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
