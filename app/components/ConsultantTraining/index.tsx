import { LuMoveUpRight } from "react-icons/lu";
import { CONSULTANT_FEATURES } from "./types";
import FeatureCard from "./FeatureCard";

export default function ConsultantTraining() {
  return (
    <section className="w-full bg-[#EAE3E9] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="w-full space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A154B]">
            Training The Consultant
          </h2>

          <p className="text-[#5C164E] font-medium italic">
            Maximise Your Potential as a Certified Trainer. 
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
           With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

        {/* Feature Box */}
        <div className="bg-[#5C164E] rounded-3xl p-10 md:p-14 shadow-xl">
          <div className="grid md:grid-cols-2 gap-10">
            {CONSULTANT_FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="flex items-center gap-2 bg-[#5C164E] text-white px-8 py-3 rounded-lg hover:bg-[#4A154B] transition-all group shadow-md">
            <span className="font-medium">Learn More</span>
            <LuMoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </section>
  );
}