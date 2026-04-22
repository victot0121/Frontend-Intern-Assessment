

import { GoZap } from "react-icons/go";

type Props = {
  label: string;
};

export default function BenefitItem({ label }: Props) {
  return (
    <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors duration-300 p-3 rounded-xl border border-white/5">
      <div className="bg-white/20 p-1 rounded-md">
        <GoZap className="w-4 h-4 text-white" />
      </div>
      <span className="text-sm md:text-base font-medium">
        {label}
      </span>
    </div>
  );
}