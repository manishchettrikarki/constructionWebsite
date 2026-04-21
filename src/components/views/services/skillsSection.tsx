"use client";

import { useEffect, useRef, useState } from "react";
import { Subtitle } from "@/components/reusable/subtitle";

const skills = [
  { label: "Industry", value: 90, color: "#0DA574" },
  { label: "Engineering", value: 96, color: "#FFC631" },
  { label: "Factory", value: 89, color: "#0DA574" },
  { label: "Construction", value: 99, color: "#FFC631" },
];

function SkillBar({
  label,
  value,
  color,
  animate,
}: {
  label: string;
  value: number;
  color: string;
  animate: boolean;
}) {
  return (
    <li className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="text-[#1a1a2e]">{label}</span>
        <span style={{ color }}>{value}%</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${value}%` : "0%",
            backgroundColor: color,
          }}
        />
      </div>
    </li>
  );
}

export function ServicesSkillsSection() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative w-full h-[460px] rounded-2xl overflow-hidden bg-gray-100 order-2 lg:order-1">
            <img
              src="/img/about/03.jpg"
              alt="Trusted quality"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            {/* Gold accent right side */}
            <div className="absolute top-0 right-0 w-1.5 h-full bg-[#ffc631] rounded-r-2xl" />
          </div>

          {/* Right: text + skill bars */}
          <div ref={ref} className="flex flex-col gap-8 order-1 lg:order-2">
            <div>
              <Subtitle>We build only quality things</Subtitle>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] mt-1">
                Trusted Quality for Over{" "}
                <span className="text-[#ffc631]">20 Years</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mt-4">
                Convallis a cras semper auctor neque vitae. Lectus proin nibh
                nisl condimentum fermentum odio eu. Augue neque gravida in
                fermentum et sollicitudin.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {skills.map((s) => (
                <SkillBar key={s.label} {...s} animate={animate} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
