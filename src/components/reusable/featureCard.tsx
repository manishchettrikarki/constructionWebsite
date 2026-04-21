interface IFeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

//
export function FeatureCard({
  title,
  description,
  delay = 0,
}: IFeatureCardProps) {
  return (
    <div className="border border-white/30 p-8 lg:p-12 hover:border-[#ffc631] transition-colors cursor-pointer">
      <div className="w-14 h-14 rounded-full bg-[#ffc631]/20 flex items-center justify-center mb-6">
        <div className="w-6 h-6 bg-[#ffc631] rounded-sm" />
      </div>
      <h4 className="text-lg font-bold mb-3 font-['Archivo',sans-serif]">
        {title}
      </h4>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
