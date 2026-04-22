interface IFeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

//
export function FeatureCard({
  title,
  description,
  icon: Icon,
}: IFeatureCardProps) {
  return (
    <div className="border border-white/10 p-6 rounded-lg hover:border-[#ffc631] transition-colors">
      <div className="mb-4">
        <Icon className="w-10 h-10 text-[#ffc631]" />
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
