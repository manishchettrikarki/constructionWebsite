"use client";

import Link from "next/link";
import { useState } from "react";
import { SERVICES_SLIDES } from "@/contents/aboutPage";
import { Subtitle } from "@/components/reusable/subtitle";


// 
export function AboutServicesSection() {
  const [active, setActive] = useState(0);

  const current = SERVICES_SLIDES[active];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Subtitle>Just feel the future</Subtitle>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
            Spotlight <span className="text-[#ffc631]">Services</span>
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {SERVICES_SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded text-sm font-semibold border transition-all duration-200 ${active === i
                ? "bg-[#ffc631] border-[#ffc631] text-[#1a1a2e]"
                : "bg-white border-gray-200 text-gray-500 hover:border-[#ffc631] hover:text-[#ffc631]"
                }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Active slide */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden bg-gray-100 relative">
            <img
              key={active}
              src={current.img}
              alt={current.title}
              className="w-full h-full object-cover transition-opacity duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
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
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-extrabold text-[#1a1a2e]">
              {current.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {current.text}
            </p>

            <ul className="flex flex-col gap-2">
              {current.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4 text-[#ffc631] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          {SERVICES_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${active === i
                ? "bg-[#ffc631] w-6"
                : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
