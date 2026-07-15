"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { Subtitle } from "@/components/reusable/subtitle";
import { heroContent } from "@/contents/homePage";
import { BuildingConstruction } from "@/animations/constructionBuilding";

export function Hero() {
  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState("/images/building-one.png");

  const ref = useRef<HTMLDivElement>(null);

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

  const count128 = useCountUp(30, 1800, visible);
  const count4253 = useCountUp(14, 2200, visible);

  return (
    <section className="bg-[#1a1a2e] relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background deco rings */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <div className="absolute top-10 right-10 w-150 h-150 rounded-full border border-white/20" />
        <div className="absolute top-32 right-32 w-100 h-100 rounded-full border border-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: text ── */}
          <div className="flex flex-col gap-6 z-10">
            <Subtitle>{heroContent.title}</Subtitle>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {heroContent.subtitleOne} <br />
              <span className="text-[#ffc631]">{heroContent.subtitleTwo}</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href={heroContent.ctaPrimary.href}
                className="inline-block bg-[#ffc631] hover:bg-[#e6b22c] text-[#1a1a2e] font-bold px-8 py-3.5 rounded transition-colors duration-200"
              >
                {heroContent.ctaPrimary.label}
              </Link>
              <Link
                href={heroContent.ctaSecondary.href}
                className="inline-block border border-white/30 hover:border-[#ffc631] text-white hover:text-[#ffc631] font-semibold px-8 py-3.5 rounded transition-colors duration-200"
              >
                {heroContent.ctaSecondary.label}
              </Link>
            </div>

            {/* Counters */}
            <div
              ref={ref}
              className="flex gap-10 mt-6 pt-6 border-t border-white/10"
            >
              <div>
                <p className="text-4xl font-extrabold text-white">
                  {count128}
                  <span className="text-[#ffc631]">+</span>
                </p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                  {heroContent.counters.projectsPerYear.label}
                </p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-4xl font-extrabold text-white">
                  {count4253.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                  {heroContent.counters.turnover2020.label}
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: image card ── */}
          <div className="relative z-10 hidden lg:block w-full h-full rounded-2xl overflow-hidden">
            {/* <Image
              src={imgSrc}
              alt="Building"
              fill
              onError={() => setImgSrc("/fallback.jpg")}
              className="object-cover"
            /> */}
            <BuildingConstruction />
          </div>
        </div>
      </div>
    </section>
  );
}
