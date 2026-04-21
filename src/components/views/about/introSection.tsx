"use client";
import { Subtitle } from "@/components/reusable/subtitle";
import Link from "next/link";

const checklistItems = [
  "Making lives easier",
  "Get every solution right here",
  "Innovation and creativity",
  "Fine engineering only with us",
];

export function AboutIntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: text ── */}
          <div className="flex flex-col gap-6">
            <div>
              <Subtitle>Who we are</Subtitle>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] mt-1">
                Bringing <span className="text-[#ffc631]">Your Ideas</span> and
                Innovations to Life
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Our civil and structural team is committed to providing
              sustainable, creative &amp; efficient engineering solutions for
              our communities.
            </p>

            {/* Arrow checklist */}
            <ul className="flex flex-col gap-3">
              {checklistItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                >
                  <span className="flex items-center justify-center w-5 h-5 shrink-0">
                    <svg
                      className="w-4 h-4 text-[#ffc631]"
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
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <Link
                href="/contact"
                className="inline-block bg-[#ffc631] hover:bg-[#e6b22c] text-[#1a1a2e] font-bold px-8 py-3.5 rounded transition-colors duration-200"
              >
                Consult Now
              </Link>
            </div>
          </div>

          {/* ── Right: image ── */}
          <div className="relative">
            <div className="w-full h-120 rounded-2xl overflow-hidden bg-gray-100 relative">
              <img
                src="/img/about/01.jpg"
                alt="About Us"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Fallback */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  className="w-32 h-32 text-gray-200"
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
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ffc631] rounded-l-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
