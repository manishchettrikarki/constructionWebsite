interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
}

//
export function SocialLink({ icon, label }: SocialLinkProps) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#001f3f] text-white hover:bg-[#ffc631] hover:text-[#001f3f] transition-colors"
    >
      {icon}
    </a>
  );
}
