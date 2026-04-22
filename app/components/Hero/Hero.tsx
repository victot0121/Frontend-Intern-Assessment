// components/hero/Hero.tsx

import Image from "next/image";
import heroImage from "../../assets/2.jpg"; // replace with your image

export default function Hero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Training and Development"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        
        {/* Badge */}
        <span className="text-xs md:text-sm uppercase tracking-widest bg-white/10 text-white px-4 py-1 rounded-full mb-4">
          What We Do
        </span>

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
          Training and Development
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg text-gray-200 max-w-2xl mb-6">
          Our comprehensive range of programs and resources is designed to enhance skills,
          broaden knowledge, and propel careers forward in today’s ever-evolving landscape.
        </p>

        {/* Button */}
        <button className="bg-[#571244] text-white px-6 py-3 rounded-md text-sm md:text-base hover:opacity-90 transition">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}