// components/Inner.jsx

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Define props for the component
const OtherHeroSection = ({
  content
}) => {
  const { title, description, images } = content;

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for the gradient effect
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    // Animation on scroll with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Set up observers and event listeners
    if (sectionRef.current) { 
      observer.observe(sectionRef.current);
    }

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (currentContainer) {
        currentContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full flex flex-col items-center justify-center overflow-hidden py-16 pt-32`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800"></div>

        {/* Mouse follow effect */}
        <div
          className="absolute blur-3xl rounded-full opacity-20 pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: "600px",
            height: "600px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(200, 200, 200, 0.15) 35%, rgba(0, 0, 0, 0) 70%)",
            transition: "left 0.3s ease-out, top 0.3s ease-out",
          }}
        ></div>

        {/* Simple glow effects */}
        <div className="absolute top-1/3 left-1/4 w-1/2 h-64 bg-gray-100/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-64 bg-white/5 blur-3xl rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-2 max-w-6xl z-10">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 h-[200px]"
          ref={sectionRef}
        >
          {/* Text Content */}
          <div className="md:w-3/5">
            <h1
              className={`font-bold tracking-tight leading-tight fade-in-up`}
            >
              <span className="bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text">
                {title}
              </span>
            </h1>
            <p
              className={`text-gray-300 text-lg leading-relaxed fade-in-up`}
            >
              {description}
            </p>
          </div>

          {/* Image */}
    
            <div
              className={`md:w-2/5 flex justify-center md:justify-end fade-in-up hidden sm:flex items-center`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                <Image
                  src={images.hero.src}
                  alt={images.hero.alt}
                  width={images.hero.width}
                  height={images.hero.height}
                  className="relative z-10"
                  priority={false}
                />
              </div>
            </div>
        
        </div>
      </div>

      {/* Simplified CSS */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-in .fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-in .fade-in-up:nth-child(2) {
          transition-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default OtherHeroSection;