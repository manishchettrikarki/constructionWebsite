import { Btn } from "@/components/reusable/button";
import { CheckItem } from "@/components/reusable/checkItem";
import { SectionLabel } from "@/components/reusable/sectionLabel";
import { useRef, useState } from "react";

export function Team() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="bg-[#001f3f] text-white py-20 lg:py-45">
      <div className="max-w-322.5 mx-auto px-5">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="max-w-153.75">
            <SectionLabel light>Truth in engineering</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-['Archivo',sans-serif] mt-2">
              <span className="text-[#ffc631]">Our Team</span> is Responsible
              for The Best Construction
            </h2>
          </div>
          <Btn href="#">Our team</Btn>
        </div>

        {/* Video */}
        <div
          className="relative max-h-150 overflow-hidden bg-black aspect-video cursor-pointer group"
          onClick={togglePlay}
        >
          {/* Cover image */}
          {!playing && (
            <div className="absolute inset-0 bg-[#0a2a4d] flex items-center justify-center">
              <div className="text-[#ffc631]/30 text-6xl font-black font-['Archivo',sans-serif]">
                VIDEO
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/video/full.mp4"
          />
          {/* Play btn */}
          {!playing && (
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-17.5 h-17.5 md:w-27.5 md:h-27.5 rounded-full border-2 border-[#001f3f] flex items-center justify-center text-[#001f3f] bg-white/80 hover:border-[#ffc631] hover:text-[#ffc631] transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 ml-1"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-15 mt-10">
          <div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Leo in vitae turpis massa sed elementum tempus egestas sed. Sed
              sed risus pretium quam vulputate dignissim suspendisse in.
              Placerat orci nulla pellentesque dignissim enim. Tortor pretium
              viverra suspendisse potenti nullam augue.
            </p>
            <ul className="flex flex-col gap-3">
              <CheckItem>Ingenuity for life</CheckItem>
              <CheckItem>Lets you shine with skill</CheckItem>
              <CheckItem>Make science your obedient servant</CheckItem>
              <CheckItem>Development of Electrical Schematics</CheckItem>
            </ul>
          </div>
          {/* Quote */}
          <div className="bg-white/10 backdrop-blur p-8 lg:p-10 flex flex-col justify-center">
            <blockquote className="text-lg md:text-2xl font-bold font-['Archivo',sans-serif] mb-6 leading-snug">
              &quot;Senectus et netus et malesuada. Nunc proin pulvinar sapien
              et ligula ulamcorper malesuada proin&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ffc631]/30 shrink-0" />
              <div>
                <div className="font-bold text-sm font-['Archivo',sans-serif]">
                  Daniel Strickland
                </div>
                <div className="text-gray-400 text-xs">
                  Founder of the company
                </div>
              </div>
              <svg
                className="ml-auto w-16 opacity-50"
                viewBox="0 0 83 73"
                fill="none"
              >
                <path
                  d="M47 0V36.5H71C71 49.9 60.2 60.8 47 60.8V73C66.9 73 83 56.6 83 36.5V0H47Z"
                  fill="#FFC631"
                />
                <path
                  d="M0 36.5H24C24 49.9 13.2 60.8 0 60.8V73C19.9 73 36 56.6 36 36.5V0H0V36.5Z"
                  fill="#FFC631"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
