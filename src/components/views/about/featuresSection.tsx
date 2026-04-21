"use client";
import { Subtitle } from "@/components/reusable/subtitle";
import { Checklist } from "@/components/reusable/checklist";

const features = [
  {
    title: "We Develop Unique Projects",
    desc: "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.",
    icon: (
      <svg className="w-10 h-10 text-[#ffc631]" viewBox="0 0 60 62" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.391 29.7654C59.7584 29.9203 59.9994 30.2951 59.9995 30.7118C59.9994 31.1285 59.7584 31.5032 59.391 31.6581L41.0732 39.3729L59.391 47.0877C59.7588 47.2423 60 47.6171 60 48.0341C60 48.451 59.7588 48.8259 59.391 48.9804L30.3593 61.2079C30.1286 61.3047 29.8714 61.3047 29.6407 61.2079L0.608983 48.9804C0.241228 48.8259 0 48.451 0 48.0341C0 47.6171 0.241228 47.2423 0.608983 47.0877L18.9268 39.3729L0.608983 31.6581C0.241228 31.5036 0 31.1287 0 30.7118C0 30.2949 0.241228 29.92 0.608983 29.7654L18.9268 22.0506L0.608983 14.3359C0.241228 14.1813 0 13.8064 0 13.3895C0 12.9726 0.241228 12.5977 0.608983 12.4432L29.6407 0.215664C29.8714 0.118867 30.1286 0.118867 30.3593 0.215664L59.391 12.4432C59.7588 12.5977 60 12.9726 60 13.3895C60 13.8064 59.7588 14.1813 59.391 14.3359L41.0732 22.0506L59.391 29.7654ZM30 2.25995L3.57386 13.3895L30 24.5191L56.4262 13.3895L30 2.25995Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "We Value Convenience and Functionality",
    desc: "Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies.",
    icon: (
      <svg className="w-10 h-10 text-[#ffc631]" viewBox="0 0 60 62" fill="none">
        <circle
          cx="30"
          cy="31"
          r="12"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle
          cx="30"
          cy="31"
          r="22"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle
          cx="30"
          cy="31"
          r="28"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    ),
  },
  {
    title: "Experience Allows Us to Implement Ideas",
    desc: "Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim diam vulputate ut pharetra.",
    icon: (
      <svg className="w-10 h-10 text-[#ffc631]" viewBox="0 0 60 62" fill="none">
        <rect
          x="2"
          y="30"
          width="10"
          height="30"
          stroke="currentColor"
          strokeWidth="2.5"
          rx="1"
        />
        <rect
          x="17"
          y="18"
          width="10"
          height="42"
          stroke="currentColor"
          strokeWidth="2.5"
          rx="1"
        />
        <rect
          x="32"
          y="22"
          width="10"
          height="38"
          stroke="currentColor"
          strokeWidth="2.5"
          rx="1"
        />
        <rect
          x="47"
          y="8"
          width="10"
          height="52"
          stroke="currentColor"
          strokeWidth="2.5"
          rx="1"
        />
      </svg>
    ),
  },
  {
    title: "We Offer Innovative Technologies",
    desc: "Consectetur adipiscing elit pellentesque habitant. Arcu felis bibendum ut tristique.",
    icon: (
      <svg className="w-10 h-10 text-[#ffc631]" viewBox="0 0 60 62" fill="none">
        <path
          d="M30 8V2M46 14l4-4M52 31h6M46 48l4 4M30 54v6M14 48l-4 4M8 31H2M14 14l-4-4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          cx="30"
          cy="31"
          r="12"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    ),
  },
  {
    title: "We Focus on Long-term Relationships",
    desc: "Purus in massa tempor nec feugiat. Euismod lacinia at quis risus sed vulputate.",
    icon: (
      <svg className="w-10 h-10 text-[#ffc631]" viewBox="0 0 60 62" fill="none">
        <path
          d="M30 4l5.5 17h17.5l-14 10.5 5.5 17L30 39l-14.5 10 5.5-17L7 22h17.5z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const checklistItems = [
  "Building the future with ideas",
  "Designing future with excellence",
  "Discovering possibility concrete",
];

export function AboutFeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: header + checklist + video */}
          <div className="flex flex-col gap-8">
            <div>
              <Subtitle>Why Choose Us</Subtitle>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
                <span className="text-[#ffc631]">Design</span> Future with
                Excellence
              </h2>
            </div>

            <Checklist items={checklistItems} />

            {/* Video */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-black/40 border border-gray-200 flex items-center justify-center">
              <img
                src="/img/video/02.jpg"
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <button
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
              </button>
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 hover:border-[#ffc631]/30 hover:shadow-md rounded-xl p-6 flex flex-col gap-4 transition-all duration-300"
              >
                {f.icon}
                <h3 className="text-[#1a1a2e] font-bold text-sm leading-snug">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
