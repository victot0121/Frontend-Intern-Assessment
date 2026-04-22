// components/TrainingSection/TrainingSection.tsx

import { TRAINING_DATA } from "./content";
import TrainingCard from "./TrainingCard";

export default function TrainingSection() {
  return (
    <section className="px-4 py-16 lg:px-24 space-y-16">
      {TRAINING_DATA.map((item, index) => (
        <TrainingCard key={item.id} item={item} index={index} />
      ))}
    </section>
  );
}