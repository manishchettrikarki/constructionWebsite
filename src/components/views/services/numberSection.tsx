"use client"

import { Subtitle } from "@/components/reusable/subtitle";
import { SERVICES_CONTENT, STATS } from "@/contents/services";
import { StatItem } from "@/utils/statItem";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlayIcon } from "@/icons";


export function ServicesNumbersSection() {
  const [imgSrc, setImgSrc] = useState("/img/video/03.jpg");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: header + stats */}
          <div className="flex flex-col gap-10">
            <div>
              <Subtitle>{SERVICES_CONTENT.subtitle}</Subtitle>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Delivering{" "}
                <span className="text-[#ffc631]">
                  {SERVICES_CONTENT.highlight}
                </span>{" "}
                Excellence Across Nepal
              </h2>
              <p className="text-gray-400 leading-relaxed mt-4">
                {SERVICES_CONTENT.description}
              </p>
            </div>

            {/* Stat counters */}
            <ul ref={ref} className="grid grid-cols-2 gap-8">
              {STATS.map((s, i) => (
                <StatItem key={i} {...s} start={visible} />
              ))}
            </ul>
          </div>

          {/* Right: video */}
          <div className="relative w-full h-72 sm:h-105 rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
            <div className="absolute inset-0">
              <Image
                src={imgSrc}
                alt="Kallisto Engineering Consultancy - Building the Future"
                fill
                onError={() => setImgSrc("/fallback.jpg")}
                className="object-cover opacity-50"
              />
            </div>
            <button
              type="button"
              aria-label="Play video"
              className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-[#ffc631] hover:scale-110 transition-transform duration-200 shadow-xl"
            >
              <PlayIcon className="w-6 h-6 text-[#1a1a2e] ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}