import { footerContent } from "@/contents/footer";
import {
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "@/icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#001f3f] text-white pt-20 pb-16">
      <div className="max-w-322.5 mx-auto px-5">
        {/* Main grid */}
        <div className="flex flex-wrap gap-x-20 gap-y-10 pb-20 border-b border-[#a9a9a9]">
          {/* Brand */}
          <div className="w-full sm:w-[calc(50%-40px)] lg:w-auto lg:max-w-70">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 font-bold text-xl font-['Archivo',sans-serif] mb-5"
            >
              <span className="w-12 h-12 rounded-sm flex items-center justify-center text-[#001f3f] font-black text-xs">
                {/* {headerContent.companyName} */}
                <img src={footerContent.brand.logo} alt={footerContent.brand.name} className="w-full h-full object-contain" />
              </span>
              {footerContent.brand.name}{" "}
              <span className="text-[#0da574]">
                {footerContent.brand.highlight}
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footerContent.brand.description}
            </p>
          </div>

          {/* Contacts */}
          <div className="w-full sm:w-[calc(50%-40px)] lg:w-auto">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 font-['Archivo',sans-serif]">
              {footerContent.contacts.title}
            </h4>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <div className="flex gap-2.5 items-start">
                <span className="text-[#ffc631] mt-0.5">📞</span>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+13136453395"
                    className="hover:text-white transition-colors"
                  >
                    {footerContent.contacts.phones[0]}
                  </a>
                  <a
                    href="tel:+14699702609"
                    className="hover:text-white transition-colors"
                  >
                    {footerContent.contacts.phones[1]}
                  </a>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="text-[#ffc631] mt-0.5">📍</span>
                <div className="flex flex-col gap-1">
                  <span>{footerContent.contacts.address[0]}</span>
                  <span>{footerContent.contacts.address[1]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div className="w-full sm:w-[calc(50%-40px)] lg:w-auto">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 font-['Archivo',sans-serif]">
              {footerContent.companyLinks[0].label}
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              {footerContent.companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 hover:text-[#ffc631] transition-colors font-semibold uppercase tracking-wider text-xs font-['Archivo',sans-serif]"
                  >
                    <ChevronRightIcon className="w-2.5 h-2.5 text-[#ffc631]" />{" "}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full sm:w-[calc(50%-40px)] lg:w-auto lg:max-w-82.5">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-3 font-['Archivo',sans-serif]">
              {footerContent.newsletter.title}
            </h4>
            <p className="text-gray-400 text-sm mb-5">
              {footerContent.newsletter.description}
            </p>
            <div className="flex mt-5">
              <input
                className="flex-1 h-13.5 bg-transparent border border-white/30 border-r-0 px-4 text-sm text-white placeholder:text-gray-500 focus:border-[#ffc631] outline-none transition-colors"
                placeholder={footerContent.newsletter.placeholder}
              />
              <button className="w-13.5 h-13.5 bg-[#ffc631] flex items-center justify-center shrink-0 hover:bg-[#ffd464] transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#001f3f"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-14">
          <p className="text-gray-400 text-sm">
            <span>{footerContent.copyright.text}</span>
            <span className="ml-4">All rights reserved Copyrights {year}</span>
          </p>
          <div className="flex gap-4">
            {[
              { icon: <FacebookIcon />, label: "Facebook" },
              { icon: <InstagramIcon />, label: "Instagram" },
              { icon: <TwitterIcon fill="white" />, label: "Twitter" },
              { icon: <WhatsAppIcon />, label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex items-center justify-center w-10 h-10 rounded-full text-[#001f3f] hover:scale-110 transition-transform"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
