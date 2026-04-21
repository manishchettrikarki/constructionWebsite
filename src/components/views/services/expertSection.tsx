"use client";

import Image from "next/image";
import { useState } from "react";
import { Subtitle } from "@/components/reusable/subtitle";

const achievements = [
  {
    label: "Successfully Completed Projects",
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none">
        <path
          d="M36.4062 6.5625L21.4062 0.3125C20.9375 0.15625 20.4688 0.078125 20 0.078125C19.4531 0.078125 18.9844 0.15625 18.5156 0.3125L3.51562 6.5625C2.10938 7.1875 1.25 8.51562 1.25 10C1.25 25.5469 10.1562 36.25 18.5156 39.7656C19.4531 40.1562 20.4688 40.1562 21.4062 39.7656C28.125 36.9531 38.75 27.3438 38.75 10C38.75 8.51562 37.8125 7.1875 36.4062 6.5625ZM20.4688 37.4219C20.1562 37.5781 19.7656 37.5781 19.4531 37.4219C11.875 34.375 3.75 23.75 3.75 10C3.75 9.53125 3.98438 9.0625 4.45312 8.90625L19.4531 2.65625C19.7656 2.5 20.1562 2.5 20.4688 2.65625L35.4688 8.90625C35.9375 9.0625 36.25 9.53125 36.1719 10C36.25 23.75 28.125 34.375 20.4688 37.4219ZM31.0938 12.0312C30.7031 11.7188 30.1562 11.7188 29.7656 12.0312L17.0312 24.6875L11.6406 19.2969C11.25 18.9062 10.625 18.9062 10.3125 19.2969L9.60938 19.9219C9.21875 20.3125 9.21875 20.8594 9.60938 21.25L16.3281 28.0469C16.7188 28.3594 17.2656 28.3594 17.6562 28.0469L31.7188 14.0625C32.1094 13.6719 32.1094 13.125 31.7188 12.7344L31.0938 12.0312Z"
          fill="#0DA574"
        />
      </svg>
    ),
  },
  {
    label: "Simplicity In Design With Practicality In Mind",
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 41 40" fill="none">
        <path
          d="M39.4688 28.8281L29.8594 19.2188L33.7656 15.3125L39.0781 10C40.5625 8.51562 40.5625 6.17188 39.0781 4.6875L35.5625 1.17188C34.8594 0.390625 33.9219 0 32.9062 0C31.9688 0 31.0312 0.390625 30.25 1.17188L24.9375 6.48438L21.0312 10.3906L11.4219 0.78125C10.9531 0.3125 10.3281 0 9.70312 0C9.07812 0 8.45312 0.3125 7.98438 0.78125L0.953125 7.73438C-0.0625 8.75 -0.0625 10.3125 0.953125 11.25L10.5625 20.8594L1.73438 29.6875L0.25 38.125C0.015625 39.2969 1.10938 40.2344 2.125 40L10.5625 38.5156L19.3906 29.6875L29 39.2969C29.3906 39.7656 30.0156 40 30.7188 40C31.3438 40 31.9688 39.7656 32.4375 39.2969L39.4688 32.2656C40.4844 31.3281 40.4844 29.7656 39.4688 28.8281Z"
          fill="#0DA574"
        />
      </svg>
    ),
  },
  {
    label: "High Level of Construction Control Approval",
    icon: (
      <svg className="w-10 h-10 shrink-0" viewBox="0 0 41 40" fill="none">
        <path
          d="M37.75 27.5V25C37.75 17.1094 32.4375 10.4688 25.25 8.35938V7.5C25.25 6.17188 24.0781 5 22.75 5H17.75C16.3438 5 15.25 6.17188 15.25 7.5V8.35938C7.98438 10.4688 2.75 17.1094 2.75 25V27.5C1.34375 27.5 0.25 28.6719 0.25 30V32.5C0.25 33.9062 1.34375 35 2.75 35H37.75C39.0781 35 40.25 33.9062 40.25 32.5V30C40.25 28.6719 39.0781 27.5 37.75 27.5ZM5.25 25C5.25 18.9062 9 13.6719 14.3125 11.4062L16.3438 19.5312C16.4219 19.8438 16.6562 20 17.0469 20C17.3594 20 17.6719 19.6875 17.75 19.2969V7.5H22.75V19.2969C22.75 19.6875 23.0625 20 23.375 20C23.7656 20 24 19.8438 24.0781 19.5312L26.1094 11.4062C31.4219 13.6719 35.25 18.9062 35.25 25V27.5H5.25V25ZM37.75 32.5H2.75V30H37.75V32.5Z"
          fill="#0DA574"
        />
      </svg>
    ),
  },
];

export function ServicesExpertsSection() {
  const [imgSrc, setImgSrc] = useState("/img/about/02.jpg");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + achievements */}
          <div className="flex flex-col gap-8">
            <div>
              <Subtitle>The choice is yours, time is ours</Subtitle>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] mt-1">
                Solving Problems With the Help{" "}
                <span className="text-[#ffc631]">of Experts</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mt-4">
                Nibh praesent tristique magna sit amet purus gravida quis.
                Bibendum arcu vitae elementum curabitur vitae nulla facilisi.
                Quam vulputate dignissim suspendisse in.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {achievements.map((a, i) => (
                <li key={i} className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-xl bg-[#0da574]/10 flex items-center justify-center shrink-0">
                    {a.icon}
                  </div>
                  <span className="text-[#1a1a2e] font-semibold text-sm leading-snug">
                    {a.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image */}
          <div className="relative w-full h-115 rounded-2xl overflow-hidden bg-gray-100">
            <div className="relative w-full h-full">
              <Image
                src={imgSrc}
                alt="Experts at work"
                fill
                onError={() => setImgSrc("/fallback.jpg")}
                className="object-cover"
              />
            </div>
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
            {/* Gold accent */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ffc631] rounded-l-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
