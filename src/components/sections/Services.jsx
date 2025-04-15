import React, { useEffect, useRef } from 'react';
import Bento from '../Bento';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-[48px] pb-[48px]">
      {/* Pure black background - matching Hero */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-6xl z-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-6" ref={sectionRef}>
              {/* Heading with animation class */}
              <h2
                className="font-bold tracking-tight leading-tight animate-on-scroll"
              >
                <span className="bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text">
                  Services Tailored to You
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bento Component */}
      <div className="container mx-auto px-6 pb-16 max-w-6xl z-10">
        <Bento />
      </div>

      {/* Inline CSS for animation */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-in .animate-on-scroll {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Services;