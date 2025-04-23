// pages/about.js
import { StickyNavbar } from "@/components/StickyNavbar";
import React, { useEffect, useRef } from "react";

export default function Inner() {
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
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-[48px] pb-[48px]">
      {/* Modern Black Background with Monochrome Light Effect */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Modern Light Effect at Top */}
        <div className="absolute top-0 left-0 w-full h-1/3">
          {/* Main Light Beam */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-64 bg-gradient-light opacity-20 blur-3xl"></div>
          
          {/* Secondary Light Effects in grayscale */}
          <div className="absolute top-0 left-1/4 w-1/3 h-40 bg-gradient-gray-light opacity-15 blur-2xl"></div>
          <div className="absolute top-0 right-1/4 w-1/3 h-40 bg-gradient-gray-dark opacity-15 blur-2xl"></div>
          
          {/* Ultra-thin Horizontal Lines */}
          <div className="absolute top-0 left-0 w-full h-full thin-lines"></div>
        </div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0 vignette-effect"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-6xl z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8" ref={sectionRef}>
          {/* Left Content */}
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold text-white mb-6 animate-on-scroll">About Us</h1>
            <p className="text-gray-300 text-lg leading-relaxed animate-on-scroll">
              Transform your digital footprint instantly with NMS Creative Design. Our
              cutting-edge solutions drive engagement, boost conversions, and propel
              your brand to the top of search results. Stop disappearing online—start
              commanding attention today.
            </p>
          </div>
          
          {/* Right Content - X Logo */}
          <div className="md:w-1/3 flex justify-center md:justify-end animate-on-scroll">
            <div>
              <svg width="202" height="202" viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.4893 1.9375H172.429C187.944 1.9375 200.521 14.5153 200.521 30.0303V171.97C200.521 187.485 187.944 200.062 172.429 200.062H30.4893C14.9743 200.062 2.39648 187.485 2.39648 171.97V30.0303C2.39648 14.5153 14.9743 1.9375 30.4893 1.9375Z" fill="black" stroke="url(#paint0_linear_1897_14449)" stroke-width="2.95709"/>
                <path d="M79.5488 69.4102L134.058 125.869H123.153L102.145 104.23L101.352 103.413L100.559 104.23L79.5498 125.869H68.5498L95.1045 98.5156L95.8486 97.749L95.1064 96.9795L68.5371 69.4102H79.5488ZM134.061 69.4102L111.382 92.9492L105.976 87.293L123.156 69.4102H134.061Z" fill="white" stroke="url(#paint1_linear_1897_14449)" stroke-width="2.2101"/>
                <defs>
                <linearGradient id="paint0_linear_1897_14449" x1="101.459" y1="0.458984" x2="101.459" y2="201.541" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="#999999"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1897_14449" x1="101.298" y1="68.3047" x2="101.298" y2="126.974" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="#999999"/>
                </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for animations and modern background effects */}
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
        
        .bg-gradient-light {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
        }
        
        .bg-gradient-gray-light {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(180, 180, 180, 0.2) 100%);
        }
        
        .bg-gradient-gray-dark {
          background: linear-gradient(135deg, rgba(180, 180, 180, 0.2) 0%, rgba(100, 100, 100, 0.2) 100%);
        }
        
        .thin-lines {
          background-image: repeating-linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.03),
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px,
            transparent 8px
          );
        }
        
        .grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        
        .vignette-effect {
          background: radial-gradient(
            circle at center,
            transparent 30%,
            rgba(0, 0, 0, 0.4) 100%
          );
        }
      `}</style>
    </section>
  );
}