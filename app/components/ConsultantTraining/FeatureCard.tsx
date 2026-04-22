import { LuMoveUpRight } from "react-icons/lu";

interface Props {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="group relative pl-6">
      {/* Left Accent Line */}
      <span className="absolute left-0 top-1 h-6 w-[3px] bg-white/40 group-hover:bg-white transition-all" />

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed mt-1">
        {description}
      </p>
    </div>
  );
}