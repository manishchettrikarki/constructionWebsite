"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
//
import { navItems } from "@/utils/constant";
import { ChevronRightIcon, CrossIcon, MenuIcon } from "@/icons";
import { headerContent } from "@/contents/header";

//
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  //
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100000 transition-all duration-200 ${scrolled || mobileOpen ? "bg-[#001f3f] py-3" : "bg-transparent py-4 md:py-8"}`}
    >
      <div className="max-w-322.5 mx-auto px-5 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-white font-semibold text-lg font-['Archivo',sans-serif]"
        >
          <span className="w-12 h-12 rounded-sm flex items-center justify-center text-[#001f3f] font-black text-xs">
            {/* {headerContent.companyName} */}
            <img src={headerContent.logo} alt={headerContent.companyName} className="w-full h-full object-contain" />
          </span>
          <span>
            {headerContent.companyName}{" "}
            {/* <span className="text-[#0da574]">
              {headerContent.companySubname}
            </span> */}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-widest font-['Archivo',sans-serif] hover:text-[#ffc631] transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-[#ffc631] after:transition-all hover:after:w-full"
                >
                  {item.label}
                  {item.children && (
                    <ChevronRightIcon className="w-2.5 h-2.5 rotate-90" />
                  )}
                </a>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-3 z-50 min-w-45">
                    <ul className="bg-[#001f3f] py-4 px-5 flex flex-col gap-3">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a
                            href={c.href}
                            className="text-white text-xs font-semibold uppercase tracking-wider hover:text-[#ffc631] transition-colors font-['Archivo',sans-serif]"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <CrossIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden max-w-322.5 mx-auto px-5 pb-6 max-h-[calc(100vh-64px)] overflow-y-auto">
          <ul className="flex flex-col gap-6 mt-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider font-['Archivo',sans-serif] w-full text-left"
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  {item.children && (
                    <ChevronRightIcon
                      className={`w-3 h-3 text-[#ffc631] transition-transform ${mobileDropdown === item.label ? "rotate-90" : "rotate-0"}`}
                    />
                  )}
                </button>
                {item.children && mobileDropdown === item.label && (
                  <ul className="flex flex-col gap-3 mt-3 ml-4">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          className="text-gray-300 text-xs font-semibold uppercase tracking-wider hover:text-[#ffc631] transition-colors"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
