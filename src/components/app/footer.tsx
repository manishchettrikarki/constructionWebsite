import { footerContent } from "@/contents/footer";
import { getContactDetails } from "@/lib/data/contact";
import {
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "@/icons";

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export async function Footer() {
  const year = new Date().getFullYear();
  const contact = await getContactDetails();

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
                <a
                  href={telHref(contact.phone)}
                  className="hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="text-[#ffc631] mt-0.5">📍</span>
                <span>{contact.address}</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="text-[#ffc631] mt-0.5">✉️</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
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

            <div className="bg-white rounded-lg overflow-hidden">
              <iframe
                title="Facebook Page"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkallistoengineeringconsultancy&tabs=timeline&width=320&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                width="100%"
                height="150"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
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
              { icon: <FacebookIcon />, label: "Facebook", link: "https://www.facebook.com/kallistoengineeringconsultancy" },
              // { icon: <InstagramIcon />, label: "Instagram" },
              // { icon: <TwitterIcon fill="white" />, label: "Twitter" },
              // { icon: <WhatsAppIcon />, label: "WhatsApp" },
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