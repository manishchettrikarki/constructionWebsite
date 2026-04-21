import { ArrowLink } from "@/components/reusable/arrowLink";
import { Btn } from "@/components/reusable/button";
import { SectionLabel } from "@/components/reusable/sectionLabel";
import { useState, useEffect } from "react";
import Image from "next/image";

//
export function Hero() {
  const [projectCount, setProjectCount] = useState(0);
  const [turnoverCount, setTurnoverCount] = useState(0);

  useEffect(() => {
    const projectTarget = 128;
    const turnoverTarget = 4.253;
    const duration = 2000; // 2 seconds animation
    const steps = 60; // 60 frames for smooth animation

    const projectIncrement = projectTarget / steps;
    const turnoverIncrement = turnoverTarget / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      if (currentStep <= steps) {
        setProjectCount(Math.floor(projectIncrement * currentStep));
        setTurnoverCount(
          parseFloat((turnoverIncrement * currentStep).toFixed(3)),
        );
      } else {
        setProjectCount(projectTarget);
        setTurnoverCount(turnoverTarget);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative bg-[#001f3f] text-white overflow-hidden pt-25 pb-0 min-h-screen flex items-center">
      {/* Deco plan image bottom-left */}
      <div className="absolute bottom-[-10%] left-[-10%] w-1/2 max-w-175 opacity-50 rotate-154 pointer-events-none hidden sm:block">
        <div className="w-full aspect-square bg-[#ffc631]/10 rounded-full" />
      </div>

      <div className="max-w-322.5 mx-auto px-5 w-full relative z-10 pb-50">
        {/* Building image – right side */}
        <div
          className="absolute right-[-50%] bottom-[-25%] max-h-[50%] max-w-215 md:right-0 md:max-h-[60%] lg:right-[4%] lg:max-h-[70%] xl:max-h-none xl:h-[
        800px] pointer-events-none flex items-end"
        >
          {/* Placeholder silhouette */}
          <div className="w-75 lg:w-125 xl:w-150 aspect-3/4 bg-linear-to-t from-[#ffc631]/20 to-transparent rounded-t-full opacity-40" />
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
          {/* Header */}
          <div className="lg:max-w-137.5 xl:max-w-180">
            <SectionLabel light>
              Professional. Innovative. Reliable.
            </SectionLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mt-2 mb-4 font-['Arch ivo',sans-serif]">
              Exceptional Service Exceeding Expectations
            </h1>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-137.5">
              Our civil and structural team is committed to providing
              sustainable, creative &amp; efficient engineering solutions for
              our communities
            </p>
            <Btn href="#">Consult now</Btn>
          </div>

          {/* Numbers + Card */}
          <div className="mt-10 lg:mt-0 lg:flex lg:flex-col lg:items-end lg:gap-30 xl:gap-47.5">
            {/* Numbers */}
            <div className="flex flex-col gap-20 pt-20 lg:text-right">
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#ffc631] font-['Archivo',sans-serif]">
                  {projectCount}+
                </div>
                <div className="text-sm font-bold tracking-wide mt-1">
                  Projects / Year
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#ffc631] font-['Archivo',sans-serif]">
                  {turnoverCount}
                </div>
                <div className="text-sm font-bold tracking-wide mt-1 leading-tight">
                  Million euros
                  <br />
                  turnover in 2020
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="hidden sm:block backdrop-blur-2xl bg-white/80 text-[#000810] p-8 md:p-10 lg:p-12 max-w-125 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/90 to-white/52 -z-10" />
              {/* Random building image - bottom right */}
              <div className="absolute bottom-0 right-0 w-40 h-40 opacity-30 pointer-events-none">
                <Image
                  src="https://picsum.photos/seed/residential-building/160/160.jpg"
                  alt="Building"
                  fill
                  className="object-cover rounded-tl-lg"
                  sizes="160px"
                />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-xl font-['Archivo',sans-serif]">
                  Residential House
                </h3>
                <div className="text-4xl font-black text-[#0da574] font-['Archivo',sans-serif] mt-4 mb-2">
                  78 000 m<sup className="text-base">2</sup>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-8">
                  Amount work done
                </div>
                <ArrowLink href="#" className="inline-flex">
                  Details
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
