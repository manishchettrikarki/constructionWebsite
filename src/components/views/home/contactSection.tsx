import { SectionLabel } from "@/components/reusable/sectionLabel";
import { SocialLink } from "@/components/reusable/socialLink";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "@/icons";

export function Contact() {
  return (
    <section className="py-20 lg:py-45">
      <div className="max-w-322.5 mx-auto px-5 flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-35">
        {/* Form */}
        <div className="flex-1">
          <SectionLabel>Contact us</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black font-['Archivo',sans-serif] mt-2 mb-7">
            Do You Have any <span className="text-[#0da574]">Questions?</span>
          </h2>
          <form className="flex flex-wrap gap-y-0 justify-between">
            <input
              className="w-full sm:w-[calc(50%-15px)] h-13.5 border border-[#a9a9a9] px-5 mb-7 text-[#202c38] placeholder:text-[#a9a9a9] focus:border-[#202c38] outline-none text-sm transition-colors"
              placeholder="Full name"
            />
            <input
              className="w-full sm:w-[calc(50%-15px)] h-13.5 border border-[#a9a9a9] px-5 mb-7 text-[#202c38] placeholder:text-[#a9a9a9] focus:border-[#202c38] outline-none text-sm transition-colors"
              placeholder="Phone"
            />
            <input
              className="w-full h-13.5 border border-[#a9a9a9] px-5 mb-7 text-[#202c38] placeholder:text-[#a9a9a9] focus:border-[#202c38] outline-none text-sm transition-colors"
              placeholder="Email Address"
            />
            <textarea
              className="w-full border border-[#a9a9a9] px-5 py-4 min-h-41 mb-0 text-[#202c38] placeholder:text-[#a9a9a9] focus:border-[#202c38] outline-none text-sm transition-colors resize-none"
              placeholder="Message"
            />
            <button
              type="submit"
              className="mt-10 h-13.5 px-8 bg-[#ffc631] text-[#000810] font-bold uppercase text-sm tracking-wider font-['Archivo',sans-serif] hover:-translate-y-1 transition-transform"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="lg:max-w-95">
          <h3 className="text-2xl font-bold font-['Archivo',sans-serif] mb-8">
            Are You Going to Implement Project?
          </h3>
          <ul className="flex flex-col gap-8 mb-8">
            {[
              { label: "Address", val: "2047 Cyrus Viaduct East Jadynchester" },
              {
                label: "Email",
                val: ["info@construct.com", "support@construct.com"],
              },
              {
                label: "Phone",
                val: ["1 - 313 - 645 - 3395", "1 - 469 - 970 - 2609"],
              },
            ].map((item) => (
              <li key={item.label} className="font-['Archivo',sans-serif]">
                <span className="text-xs uppercase text-[#a9a9a9] tracking-widest font-medium block mb-1">
                  {item.label}
                </span>
                {Array.isArray(item.val) ? (
                  <div className="flex flex-col gap-1">
                    {item.val.map((v) => (
                      <a
                        key={v}
                        href="#"
                        className="text-[#000810] font-semibold hover:text-[#0da574] transition-colors"
                      >
                        {v}
                      </a>
                    ))}
                  </div>
                ) : (
                  <span className="text-[#000810] font-semibold">
                    {item.val}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <SocialLink icon={<FacebookIcon />} label="Facebook" />
            <SocialLink icon={<InstagramIcon />} label="Instagram" />
            <SocialLink icon={<TwitterIcon />} label="Twitter" />
            <SocialLink icon={<WhatsAppIcon />} label="WhatsApp" />
          </div>
        </div>
      </div>
    </section>
  );
}
