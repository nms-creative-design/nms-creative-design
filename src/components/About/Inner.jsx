// pages/about.js
import { StickyNavbar } from "@/components/StickyNavbar";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgcolor.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
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
}