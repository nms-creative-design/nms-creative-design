import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const particlesRef = useRef(null);
  const glowRef = useRef(null);
  
  useEffect(() => {
    // Create particles system for the wider beam
    if (particlesRef.current) {
      const container = particlesRef.current;
      container.innerHTML = '';
      
      // Increase number of particles for wider beam
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        
        // Wider distribution
        const size = Math.random() * 5 + 1; // 1-6px
        const xOffset = Math.random() * 300 - 150; // Wider spread: -150px to 150px
        const initialY = Math.random() * 60; // Start at different heights
        const opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8 opacity
        const blurAmount = Math.random() * 4 + 1; // 1-5px blur
        const delay = Math.random() * 5; // 0-5s delay
        const duration = Math.random() * 3 + 5; // 5-8s animation
        
        // Cleaner white color variations
        const hue = Math.random() * 20 + 210; // More blue-ish whites
        const saturation = Math.random() * 15 + 5; // Less saturation: 5-20%
        const lightness = Math.random() * 10 + 90; // Higher lightness: 90-100%
        const color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
        
        // Apply styles
        particle.className = 'absolute rounded-full';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${blurAmount}px ${blurAmount / 2}px ${color}`;
        particle.style.left = `calc(50% + ${xOffset}px)`;
        particle.style.bottom = `${initialY}%`;
        particle.style.transform = 'translate(-50%, 0)';
        particle.style.animation = `float-up ${duration}s ease-out ${delay}s infinite`;
        
        container.appendChild(particle);
      }
    }

    // Animate the glow effect (not the beam)
    if (glowRef.current) {
      const animateGlow = () => {
        const glowElements = glowRef.current.querySelectorAll('.glow-element');
        const now = Date.now() / 1000;
        
        glowElements.forEach((element, index) => {
          // Create different patterns for each glow element
          const phase = index * 0.5; // offset each element's phase
          const intensity = 0.6 + 0.4 * Math.sin(now * 0.3 + phase);
          const spread = 1 + 0.15 * Math.sin(now * 0.2 + phase);
          
          // Apply intensity and spread changes
          element.style.opacity = intensity;
          element.style.transform = `scaleX(${spread})`;
        });
        
        requestAnimationFrame(animateGlow);
      };
      
      animateGlow();
    }
  }, []);

  return (
    <section className="relative min-h-[80vh] w-full flex flex-col items-start justify-center overflow-hidden bg-black">
      {/* Pure black background - removed gradients */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Removed: Glass-like surface reflection at bottom */}
      
      {/* Light Beam Effect - FIXED POSITION */}
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ height: '70vh' }}>
        {/* Fixed position light beam container - using fixed pixel values */}
        <div className="absolute h-full w-[450px]" style={{ left: 'calc(50% + 150px)' }}>
          {/* Static Core Beam - FIXED POSITION */}
          <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 w-[10px] bg-white/90 shadow-[0_0_30px_10px_rgba(255,255,255,0.7)] blur-sm"></div>
          
          {/* Dynamic Glow Container */}
          <div 
            ref={glowRef}
            className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 w-full"
          >
            {/* Multiple glow layers with individual animations */}
            <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 glow-element transition-all duration-300 ease-in-out origin-center">
              {/* Inner glow - closest to beam */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[70px] bg-gradient-to-b from-transparent via-white/40 to-white/70 blur-md"></div>
            </div>
            
            <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 glow-element transition-all duration-500 ease-in-out origin-center">
              {/* Middle glow layer */}
              <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 h-[95%] w-[150px] bg-gradient-to-b from-transparent via-white/20 to-white/40 blur-lg"></div>
            </div>
            
            <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 glow-element transition-all duration-700 ease-in-out origin-center">
              {/* Outer glow layer */}
              <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 h-[90%] w-[300px] bg-gradient-to-b from-transparent via-white/10 to-white/20 blur-2xl"></div>
            </div>
          </div>
          
          {/* Cone effects with independent animations */}
          <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2">
            {/* Outer cone */}
            <div className="absolute top-[5%] h-[95%] w-0 opacity-60"
                style={{
                  clipPath: 'polygon(0px 0px, 0px 0px, 350px 100%, -350px 100%)',
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.15))',
                  width: '4px',
                  filter: 'blur(35px)',
                  animation: 'pulse-intensity 8s ease-in-out infinite'
                }}>
            </div>
            
            {/* Middle cone */}
            <div className="absolute top-[10%] h-[90%] w-0 opacity-80"
                style={{
                  clipPath: 'polygon(0px 0px, 0px 0px, 220px 100%, -220px 100%)',
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12) 60%, rgba(255,255,255,0.5))',
                  width: '8px',
                  filter: 'blur(18px)',
                  animation: 'pulse-intensity 6s ease-in-out infinite'
                }}>
            </div>
            
            {/* Inner cone */}
            <div className="absolute top-[15%] h-[85%] w-0 opacity-90"
                style={{
                  clipPath: 'polygon(0px 0px, 0px 0px, 140px 100%, -140px 100%)',
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0.8))',
                  width: '10px',
                  filter: 'blur(10px)',
                  animation: 'pulse-intensity 4s ease-in-out infinite'
                }}>
            </div>
          </div>
          
          {/* Removed: Dynamic bottom glow */}
          
          {/* Particles container */}
          <div 
            ref={particlesRef}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[600px] h-full overflow-hidden pointer-events-none"
          ></div>
        </div>
        
        {/* Enhanced ambient glow - made less intense for darker look */}
        <div className="absolute top-[30%] w-full h-full" style={{ left: 'calc(50% + 50px)' }}>
          <div className="absolute h-full w-full bg-gradient-radial from-white/10 via-white/5 to-transparent blur-3xl animate-pulse-very-slow"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-6xl z-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start text-left">
            <div className="space-y-6 max-w-3xl">
              {/* Modern gradient heading */}
              <h1 className="font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-300 via-white to-gray-200 text-transparent bg-clip-text">
                  Dominate Online with Creative Design's 
                </span>
              </h1>

              <p className="text-gray-300 max-w-xl text-lg font-light leading-relaxed">
                Boost your brand with Creative X—drive engagement, increase conversions, and dominate search results effortlessly.
              </p>

              <div className="flex flex-col md:flex-row justify-start gap-6 mt-6">
                <button className="bg-white text-black px-10 py-3 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Featured Video and Image */}
     <div className="container mx-auto px-6 py-8 max-w-6xl z-20">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Video (Rectangle 16:9) - Always visible */}
          <div className="relative rounded-xl overflow-hidden border border-white w-full md:w-2/3 h-[320px] shadow-xl">
            <video
              src="/images/vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover rounded-xl relative z-10 border border-white/30"
            />
          </div>

          {/* Image (Square) - Hidden on mobile and smaller screens, visible on lg screens and up */}
          <div className="hidden lg:block relative w-full md:w-1/3 h-[320px]">
            <Image
              src="/images/x.png"
              alt="Creative X"
              width={400}
              height={400}
              className="rounded-xl w-full h-full object-cover relative z-10 shadow-lg border border-white"
            />
          </div>
        </div>
      </div>

      {/* Enhanced animation keyframes */}
      <style jsx global>{`        
        @keyframes float-up {
          0% { transform: translate(-50%, 0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 0.5; }
          100% { transform: translate(-50%, -150px) scale(0.2); opacity: 0; }
        }
        
        @keyframes pulse-intensity {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
        
        @keyframes glow-move {
          0% { transform: translateX(-10px) scaleX(0.9); }
          50% { transform: translateX(10px) scaleX(1.1); }
          100% { transform: translateX(-10px) scaleX(0.9); }
        }
        
        .animate-pulse-slow {
          animation: pulse-intensity 8s ease-in-out infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-intensity 5s ease-in-out infinite;
        }
        
        .animate-pulse-very-slow {
          animation: pulse-intensity 12s ease-in-out infinite;
        }
        
        .animate-glow-shift {
          animation: glow-move 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;