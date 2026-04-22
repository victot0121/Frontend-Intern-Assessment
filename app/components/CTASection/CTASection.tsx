
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="w-full bg-[#1a051d] py-12 px-6 md:py-20 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        
        {/* Text Content */}
        <div className="space-y-4 max-w-2xl">
          <p className="text-gray-300 text-sm md:text-base font-medium tracking-wide">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="text-white text-3xl md:text-2xl font-bold leading-tight">
            Let&apos;s work together to create a difference
          </h2>
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="inline-block bg-[#5e1647] hover:bg-[#7a1d5c] text-white font-semibold 
                       py-4 px-8 rounded-lg transition-all duration-300 ease-in-out 
                       text-center min-w-[160px] md:min-w-[200px]"
          >
            Get In Touch
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTASection;