import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
// Removed the ImageSlider import

const Hero = () => {
  const particlesRef = useRef(null);
  
  useEffect(() => {
    // Create particles system for the wider beam - reduced number
    if (particlesRef.current) {
      const container = particlesRef.current;
      container.innerHTML = '';
      
      // Create fewer particles (20 instead of 40)
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        
        // More focused distribution
        const size = Math.random() * 4 + 1; // 1-5px (smaller particles)
        const xOffset = Math.random() * 140 - 70; // Narrower spread: -70px to 70px
        const initialY = Math.random() * 60; // Start at different heights
        const opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8 opacity
        const blurAmount = Math.random() * 3 + 1; // 1-4px blur (less blur)
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
  }, []);

  return (
    <section className="relative min-h-[80vh] w-full flex flex-col items-start justify-center overflow-hidden bg-black">
      {/* Modern subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95 z-0"></div>
      
      {/* Glass-like surface reflection at bottom - more subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/5 to-transparent z-0"></div>
      
      {/* Simplified Light Beam Effect - FURTHER REDUCED HEIGHT */}
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ height: '60vh' }}> {/* Reduced from 70vh to 60vh */}
        <div className="absolute right-[21%] top-0 h-full w-[250px]">
          {/* Simplified core beam - cleaner */}
          <div className="absolute left-[50%] top-0 h-full w-[4px] bg-white/90 shadow-[0_0_30px_10px_rgba(255,255,255,0.7)] blur-sm"></div>
          
          {/* Simplified inner glow */}
          <div className="absolute left-[45%] top-0 h-full w-[40px] bg-gradient-to-b from-transparent via-white/20 to-white/60 blur-md"></div>
          
          {/* Simplified primary cone - more modern, cleaner lines */}
          <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2">
            {/* Outer cone - simpler */}
            <div className="absolute top-[5%] h-[95%] w-0 opacity-60"
                style={{
                  clipPath: 'polygon(0px 0px, 0px 0px, 200px 100%, -200px 100%)',
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.15))',
                  width: '2px',
                  filter: 'blur(25px)',
                }}>
            </div>
            
            {/* Inner cone - cleaner */}
            <div className="absolute top-[15%] h-[85%] w-0 opacity-80"
                style={{
                  clipPath: 'polygon(0px 0px, 0px 0px, 120px 100%, -120px 100%)',
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12) 60%, rgba(255,255,255,0.5))',
                  width: '6px',
                  filter: 'blur(10px)',
                }}>
            </div>
            
            {/* Core cone - simplified */}
            <div className="absolute top-[20%] h-[80%] w-0 opacity-90"
                style={{
                  clipPath: 'polygon(0px 0px, 0px 0px, 70px 100%, -70px 100%)',
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0.8))',
                  width: '6px',
                  filter: 'blur(6px)',
                }}>
            </div>
          </div>
          
          {/* Modern bottom glow - simplified */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[400px] h-40">
            <div className="absolute inset-0 bg-gradient-radial from-white/30 via-white/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute inset-[35%] bg-gradient-radial from-white/50 to-transparent rounded-full blur-lg"></div>
          </div>
          
          {/* Reduced particles container */}
          <div 
            ref={particlesRef}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[300px] h-full overflow-hidden pointer-events-none"
          ></div>
        </div>
        
        {/* Subtle ambient glow */}
        <div className="absolute right-[23%] top-[30%] w-full h-full">
          <div className="absolute h-full w-full bg-gradient-radial from-white/5 via-white/2 to-transparent blur-2xl"></div>
        </div>
      </div>

      {/* Main Content - More modern typography and spacing */}
      <div className="container mx-auto px-6 py-16 max-w-6xl z-10"> {/* Reduced padding */}
        <div className="flex flex-col gap-10"> {/* Reduced gap */}
          <div className="flex flex-col items-start text-left">
            <div className="space-y-6 max-w-3xl"> {/* Reduced spacing */}
              {/* Modern gradient heading */}
              <h1 className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl mt-6 leading-tight"> {/* Reduced margin-top */}
                <span className="bg-gradient-to-r from-gray-300 via-white to-gray-200 text-transparent bg-clip-text">
                  Dominate Online with Creative X's Full Power
                </span>
              </h1>

              <p className="text-gray-300 max-w-xl text-lg font-light leading-relaxed">
                Boost your brand with Creative X—drive engagement, increase conversions, and dominate search results effortlessly.
              </p>

              <div className="flex flex-col md:flex-row justify-start gap-6 mt-6"> {/* Reduced margin-top */}
                <button className="bg-white text-black px-10 py-3 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Video and Image - REDUCED HEIGHT */}
      <div className="container mx-auto px-6 py-8 max-w-6xl z-20"> {/* Reduced padding */}
        <div className="flex flex-col md:flex-row items-start gap-10"> {/* Reduced gap */}
          {/* Video (Rectangle 16:9) - Reduced height */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 w-full md:w-2/3 h-[320px] shadow-xl"> {/* Reduced height from 400px to 320px */}
            <video
              src="/images/vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover rounded-xl relative z-10"
            />
          </div>

          {/* Image (Square) - Reduced height */}
          <div className="relative w-full md:w-1/3 h-[320px]"> {/* Reduced height from 400px to 320px */}
            {/* Square Image */}
            <Image
              src="/images/x.png"
              alt="Creative X"
              width={400}
              height={400}
              className="rounded-xl w-full h-full object-cover relative z-10 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* ImageSlider component removed */}

      {/* Simplified animation keyframes */}
      <style jsx global>{`        
        @keyframes float-up {
          0% { transform: translate(-50%, 0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 0.5; }
          100% { transform: translate(-50%, -120px) scale(0.3); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;