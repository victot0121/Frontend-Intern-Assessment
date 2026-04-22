import Image from 'next/image';
import { LuMoveUpRight } from "react-icons/lu";
import { GoZap } from "react-icons/go";
import { HUB_FEATURES } from './types';
import hubImage from '../../assets/8.jpg'; 



export default function TransformationHub() {
  return (
    <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto bg-[#FDE2E4] rounded-[2rem] p-8 md:p-12 lg:p-16">
        
        {/* Top Header Section */}
        <header className="mb-8">
          <p className="text-[#3A86FF] italic font-medium mb-2">
            Learning With Our CEO:
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C164E] mb-6">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-gray-700 max-w-5xl leading-relaxed text-sm md:text-base">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, 
            Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, 
            this exclusive event offers invaluable insights and strategies for personal and 
            professional growth.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left: Image Container */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video lg:aspect-square max-h-[400px] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={hubImage}
                alt="Transformation Hub Session"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>

          {/* Right: Features and CTA */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 bg-[#faaab233] mt-7 px-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7 px-3">
              {HUB_FEATURES.map((feature) => (
                <div 
                  key={feature.label}
                   className="flex items-center gap-3 bg-white px-4 py-3 md:mt-2 rounded-xl shadow-sm border border-pink-100 hover:shadow-md transition-shadow"
                  >
                  <GoZap className="w-5 h-5 text-[#801b6b] fill-current" />
                  <span className="text-gray-800 font-medium text-sm md:text-1xl">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <button className="flex items-center justify-center gap-2 w-fit bg-[#5C164E] text-white px-8 py-3 rounded-lg hover:bg-[#4A154B] transition-all group shadow-lg">
              <span className="font-semibold">Learn More</span>
              <LuMoveUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}