// components/services/ServicesExpertsSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Subtitle } from "@/components/reusable/subtitle";
import { ACHIEVEMENTS, EXPERTS_CONTENT } from "@/contents/services";
import { BuildingIcon } from "@/icons";


export function ServicesExpertsSection() {
  const [imgSrc, setImgSrc] = useState("/img/about/02.jpg");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + achievements */}
          <div className="flex flex-col gap-8">
            <div>
              <Subtitle>{EXPERTS_CONTENT.subtitle}</Subtitle>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] mt-1">
                Solving Problems With the Help{" "}
                <span className="text-[#ffc631]">{EXPERTS_CONTENT.highlight}</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mt-4">
                {EXPERTS_CONTENT.description}
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {ACHIEVEMENTS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-xl bg-[#0da574]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-10 h-10" />
                    </div>
                    <span className="text-[#1a1a2e] font-semibold text-sm leading-snug">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: image */}
          <div className="relative w-full h-115 rounded-2xl overflow-hidden bg-gray-100">
            <div className="relative w-full h-full">
              <Image
                src={imgSrc}
                alt={EXPERTS_CONTENT.imageAlt}
                fill
                onError={() => setImgSrc(EXPERTS_CONTENT.imageFallback)}
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <BuildingIcon className="w-32 h-32 text-gray-200" />
            </div>
            {/* Gold accent */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ffc631] rounded-l-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}