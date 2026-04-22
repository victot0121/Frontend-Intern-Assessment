// components/TrainingSection/TrainingCard.tsx

import Image from "next/image";
import { TrainingItem } from "./content";

type Props = {
  item: TrainingItem;
  index: number;
};

export default function TrainingCard({ item, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col lg:items-center gap-8 lg:gap-16 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* TEXT */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {item.title}
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {item.description}
        </p>

        <ul className="grid gap-2">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-sm text-gray-700"
            >
              <span className="text-[#4A154B] rotate-45">✦</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE */}
      <div className="flex-1">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover hover:scale-105 transition duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}