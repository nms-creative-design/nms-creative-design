import React, { useEffect, useRef, useState } from "react";
import { Head } from 'next/document';

export default function Innerservice() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement to update gradient position
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
    // IntersectionObserver for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Add mouse move event listener
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("mousemove", handleMouseMove);
    }

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
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-16 pt-32"
    >
      {/* Ultra-Modern Background with Advanced Effects */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          {/* Base Layer with Modern Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800"></div>

          {/* Subtle Mesh Gradient Overlay */}
          <div className="absolute inset-0 mesh-gradient opacity-30"></div>

          {/* Cursor Following Gradient Effect with White/Gray Tones */}
          <div
            className="cursor-gradient absolute blur-3xl rounded-full opacity-20 pointer-events-none"
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

          {/* Enhanced Futuristic Blob Effects in White/Gray Tones */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-1/4 w-1/2 h-64 bg-gray-100/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-1/2 h-64 bg-white/5 blur-3xl rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-1/3 h-40 bg-gray-200/5 blur-3xl rounded-full"></div>
            {/* Additional subtle blobs for modern feel */}
            <div className="absolute top-1/2 left-1/5 w-64 h-64 bg-blue-500/3 blur-3xl rounded-full animate-float-slow"></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/3 blur-3xl rounded-full animate-float-slow-reverse"></div>
          </div>

          {/* Digital Noise Texture - kept for subtle texture */}
          <div className="absolute inset-0 digital-noise opacity-30"></div>
        </div>

        {/* Enhanced Glow Effects */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-64 bg-gradient-radial opacity-10 animate-pulse-slow"></div>
        </div>

        {/* Advanced Vignette with Depth */}
        <div className="absolute inset-0 advanced-vignette"></div>
      </div>

      {/* Main Content with Extra Top Padding */}
      <div className="container mx-auto px-6 py-2 max-w-6xl z-10">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          ref={sectionRef}
        >
          {/* Left Content */}
          <div className="md:w-3/5">
            <h1 className="font-bold tracking-tight leading-tight animate-on-scroll">
                <span className="bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text">
                Our Services
                </span>
              </h1>
            <p className="text-gray-300 text-lg leading-relaxed animate-on-scroll">
            Transform your digital footprint instantly with Creative X. Our cutting-edge solutions drive engagement, boost conversions, and propel your brand to the top of search results. Stop disappearing online—start commanding attention today.
            </p>
          </div>

          {/* Right Content - Image with glowing effect instead of SVG */}
          <div className="md:w-2/5 flex justify-center md:justify-end animate-on-scroll hidden sm:flex items-center">
            <div className="image-glow-container">
              {/* Glowing background effect */}
              <div className="glow-effect"></div>
              {/* Image */}
              <img
                src="images/logoinner.png"
                alt="Company Logo"
                className="relative z-10 w-60 h-60"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS for ultra-modern effects */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .animate-in .animate-on-scroll {
          opacity: 1;
          transform: translateY(0);
        }

        /* Staggered animation for multiple elements */
        .animate-in .animate-on-scroll:nth-child(2) {
          transition-delay: 0.2s;
        }

        /* Text glow effect with white tint */
        .glow-text {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
        }

        /* Image container with enhanced glow effect */
        .image-glow-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .image-glow-container:hover {
          transform: scale(1.05);
        }

        /* Glowing effect behind the image */
        .glow-effect {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(150, 150, 150, 0.2) 40%,
            transparent 70%
          );
          filter: blur(20px);
          opacity: 0.6;
          z-index: 1;
          animation: glow-pulse 3s infinite alternate ease-in-out;
        }

        @keyframes glow-pulse {
          0% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        /* Digital noise effect - kept but reduced opacity */
        .digital-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        }

        /* Modern mesh gradient overlay */
        .mesh-gradient {
          background: radial-gradient(
              at 30% 20%,
              rgba(120, 119, 198, 0.1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 80% 90%,
              rgba(64, 93, 230, 0.1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 10% 80%,
              rgba(120, 30, 150, 0.1) 0px,
              transparent 50%
            );
        }

        /* Advanced vignette */
        .advanced-vignette {
          background: radial-gradient(
            circle at center,
            transparent 15%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }

        /* Radial gradient with white tint */
        .bg-gradient-radial {
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(180, 180, 180, 0) 70%
          );
        }

        .animate-pulse-slow {
          animation: pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* New float animations for blob elements */
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(15px);
          }
        }

        @keyframes float-slow-reverse {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(15px) translateX(-15px);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slow-reverse {
          animation: float-slow-reverse 18s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.25;
          }
        }
      `}</style>
    </section>
  );
}