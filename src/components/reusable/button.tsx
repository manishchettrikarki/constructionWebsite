interface BtnProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

//
export function Btn({ href = "#", children, className = "" }: BtnProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center h-13.5 px-8 bg-[#ffc631] text-[#000810] font-bold uppercase text-sm tracking-wider font-['Archivo',sans-serif] transition-all hover:-translate-y-1 ${className}`}
    >
      {children}
    </a>
  );
}
