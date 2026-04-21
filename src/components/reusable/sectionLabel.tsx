interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

//
export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`relative pl-14 inline-block text-xs font-bold uppercase tracking-widest mb-3 font-['Archivo',sans-serif] ${light ? "text-white" : "text-[#000810]"}`}
    >
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-0.5 bg-[#ffc631]" />
      {children}
    </span>
  );
}
