import { ArrowRightIcon } from "@/icons";

interface ArrowLinkProps {
  href?: string;
  children: React.ReactNode;
  alt?: boolean;
  className?: string;
}
//
export function ArrowLink({
  href = "#",
  children,
  alt = false,
  className = "",
}: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 uppercase text-sm font-bold tracking-widest font-['Archivo',sans-serif] transition-all group ${
        alt ? "text-[#ffc631]" : "text-[#0da574]"
      } ${className}`}
    >
      {children}
      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
