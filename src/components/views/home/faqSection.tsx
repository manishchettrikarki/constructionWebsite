import { Btn } from "@/components/reusable/button";
import { SectionLabel } from "@/components/reusable/sectionLabel";
import { MinusIcon } from "@/icons/icons/minus";
import { PlusIcon } from "@/icons/icons/plus";
import { faqs } from "@/utils/constant";
import { useState } from "react";

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="pt-20 lg:pt-45">
      <div className="max-w-322.5 mx-auto px-5 flex flex-col lg:flex-row gap-12 lg:gap-15">
        {/* Header */}
        <div className="lg:max-w-95 lg:mt-36">
          <SectionLabel>Dealing with your worries</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black font-['Archivo',sans-serif] mt-2 mb-4">
            If Your Question Is Not Here{" "}
            <span className="text-[#0da574]">Contact Us</span>
          </h2>
          <p className="text-[#162739] leading-relaxed mb-6">
            Porttitor rhoncus dolor purus non enim praesent elementum facilisis.
            Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus
          </p>
          <Btn href="#">Contact Us</Btn>
        </div>

        {/* Accordion */}
        <div className="flex-1 lg:max-w-185 flex flex-col gap-7">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className={`w-full flex items-center justify-between gap-5 border p-5 md:p-7 text-left transition-colors ${open === i ? "border-[#0da574] border-b-0 text-[#0da574]" : "border-[#c8c8c8]"}`}
              >
                <span className="text-lg md:text-xl font-bold font-['Archivo',sans-serif]">
                  {f.question}
                </span>
                <span className="shrink-0">
                  {open === i ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>
              {open === i && (
                <div className="border border-[#0da574] border-t-0 p-5 md:p-7">
                  <p className="text-sm leading-relaxed text-[#202c38]">
                    {f.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
