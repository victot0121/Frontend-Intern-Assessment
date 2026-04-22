"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TESTIMONIAL_DATA } from './types';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TESTIMONIAL_DATA.length;

  // Infinite Loop Logic
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Helper to get visible items based on current index (looping array)
  const getVisibleItems = (count: number) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(TESTIMONIAL_DATA[(currentIndex + i) % total]);
    }
    return items;
  };

  return (
    <section className="w-full py-16 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>

        <div className="relative">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {/* On Mobile: show 1 (first item of the slice)
               On Desktop: show 3
            */}
            {getVisibleItems(3).map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className={`bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-500 flex flex-col justify-between transition-opacity duration-300
                  ${idx > 0 ? 'hidden md:flex' : 'flex'} 
                `}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-yellow-400">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 leading-none">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.role}, {item.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    &quot;{item.content}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-end gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="cursor-pointer p-3 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="cursor-pointer p-3 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}