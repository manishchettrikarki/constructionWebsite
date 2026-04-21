interface SubtitleProps {
  children: React.ReactNode;
}

export function Subtitle({ children }: SubtitleProps) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#ffc631] mb-3">
      {children}
    </span>
  );
}
