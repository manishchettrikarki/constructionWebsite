"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCountUp } from "@hooks/useCountUp";
import { Subtitle } from "@components/reusable/subtitle";

const stats = [
  { suffix: "%", value: 99, label: "Building Control\nApproval Rate" },
  {
    suffix: "+",
    value: 320,
    label: "Active Projects in\nConstruction Management",
  },
  { suffix: "+", value: 200, label: "Completed Projects\nEvery Year" },
  {
    suffix: "",
    value: 4253,
    label: "Million euros Turnover\nin 2020",
    separator: true,
  },
];

function StatItem({
  value,
  suffix,
  label,
  separator,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  separator?: boolean;
  start: boolean;
}) {
  const count = useCountUp(value, 2000, start);
  const display = separator ? count.toLocaleString("de-DE") : count;

  return (
    <li className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
      <span className="text-4xl sm:text-5xl font-extrabold text-white">
        {display}
        <span className="text-[#ffc631]">{suffix}</span>
      </span>
      <span className="text-gray-400 text-sm leading-snug whitespace-pre-line">
        {label}
      </span>
    </li>
  );
}

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
              <Subtitle>What we do</Subtitle>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Building The Future on a{" "}
                <span className="text-[#ffc631]">Foundation of Excellence</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mt-4">
                Risus commodo viverra maecenas accumsan lacus vel. Semper
                viverra nam libero justo laoreet sit amet cursus. Commodo
                ullamcorper a lacus vestibulum sed arcu non odio euismod.
                Adipiscing elit duis tristique sollicitudin nibh sit.
              </p>
            </div>

            {/* Stat counters */}
            <ul ref={ref} className="grid grid-cols-2 gap-8">
              {stats.map((s, i) => (
                <StatItem key={i} {...s} start={visible} />
              ))}
            </ul>
          </div>

          {/* Right: video */}
          <div className="relative w-full h-72 sm:h-105 rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
            <div className="absolute inset-0">
              <Image
                src={imgSrc}
                alt="Video thumbnail"
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
              <svg
                className="w-6 h-6 text-[#1a1a2e] ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
