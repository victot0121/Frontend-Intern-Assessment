import Link from 'next/link';

interface CTAProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  href: string;
  variant?: 'banner' | 'card';
}

export default function CallToAction({ 
  title, 
  subtitle, 
  buttonText, 
  href, 
  variant = 'banner' 
}: CTAProps) {
  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className={`
        max-w-6xl mx-auto rounded-2xl bg-[#5C164E] text-white
        flex flex-col items-center justify-center text-center
        transition-all duration-300
        ${variant === 'banner' 
          ? 'py-10 px-6 md:py-16'//desktop screen 
          : 'py-16 px-10 max-w-2xl' //mobile screen
        }
      `}>
        <h2 className="text-xl md:text-1xl lg:text-1xl font-semibold mb-4 w-full leading-snug">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-white/80 mb-8 max-w-xl text-center text-sm md:text-base">
            {subtitle}
          </p>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-3 bg-white text-[#5C164E] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors group"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}