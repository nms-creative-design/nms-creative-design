import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const particlesRef = useRef(null);
  const glowRef = useRef(null);
  
  useEffect(() => {
    // Create particles system
    if (particlesRef.current) {
      const container = particlesRef.current;
      container.innerHTML = '';
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        
        const size = Math.random() * 5 + 1;
        const xOffset = Math.random() * 300 - 150;
        const initialY = Math.random() * 60;
        const opacity = Math.random() * 0.5 + 0.3;
        const blurAmount = Math.random() * 4 + 1;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 5;
        const color = `hsla(220, 10%, 95%, ${opacity})`;
        
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

    // Animate the glow effect
    if (glowRef.current) {
      const animateGlow = () => {
        const glowElements = glowRef.current.querySelectorAll('.glow-element');
        const now = Date.now() / 1000;
        
        glowElements.forEach((element, index) => {
          const phase = index * 0.5;
          const intensity = 0.6 + 0.4 * Math.sin(now * 0.3 + phase);
          const spread = 1 + 0.15 * Math.sin(now * 0.2 + phase);
          
          element.style.opacity = intensity;
          element.style.transform = `scaleX(${spread})`;
        });
        
        requestAnimationFrame(animateGlow);
      };
      
      animateGlow();
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-start justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Light Beam Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ height: '70vh' }}>
        <div className="absolute h-full w-[450px]" style={{ left: 'calc(50% + 150px)' }}>
          {/* Core Beam */}
          <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 w-[10px] bg-white/90 shadow-[0_0_30px_10px_rgba(255,255,255,0.7)] blur-sm"></div>
          
          {/* Glow Effects */}
          <div ref={glowRef} className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 w-full">
            {/* Inner glow */}
            <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 glow-element transition-all duration-300 ease-in-out origin-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[70px] bg-gradient-to-b from-transparent via-white/40 to-white/70 blur-md"></div>
            </div>
            
            {/* Middle glow */}
            <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 glow-element transition-all duration-500 ease-in-out origin-center">
              <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 h-[95%] w-[150px] bg-gradient-to-b from-transparent via-white/20 to-white/40 blur-lg"></div>
            </div>
            
            {/* Outer glow */}
            <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 glow-element transition-all duration-700 ease-in-out origin-center">
              <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 h-[90%] w-[300px] bg-gradient-to-b from-transparent via-white/10 to-white/20 blur-2xl"></div>
            </div>
          </div>
          
          {/* Light Cones */}
          <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2">
            {/* Outer cone */}
            <div 
              className="absolute top-[5%] h-[95%] w-0 opacity-60 animate-pulse-slow"
              style={{
                clipPath: 'polygon(0px 0px, 0px 0px, 350px 100%, -350px 100%)',
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.15))',
                width: '4px',
                filter: 'blur(35px)'
              }}>
            </div>
            
            {/* Middle cone */}
            <div 
              className="absolute top-[10%] h-[90%] w-0 opacity-80 animate-pulse-medium"
              style={{
                clipPath: 'polygon(0px 0px, 0px 0px, 220px 100%, -220px 100%)',
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12) 60%, rgba(255,255,255,0.5))',
                width: '8px',
                filter: 'blur(18px)'
              }}>
            </div>
            
            {/* Inner cone */}
            <div 
              className="absolute top-[15%] h-[85%] w-0 opacity-90 animate-pulse-intensity"
              style={{
                clipPath: 'polygon(0px 0px, 0px 0px, 140px 100%, -140px 100%)',
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0.8))',
                width: '10px',
                filter: 'blur(10px)'
              }}>
            </div>
          </div>
          
          {/* Particles container */}
          <div ref={particlesRef} className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[600px] h-full overflow-hidden pointer-events-none"></div>
        </div>
        
        {/* Ambient glow */}
        <div className="absolute top-[30%] w-full h-full" style={{ left: 'calc(50% + 50px)' }}>
          <div className="absolute h-full w-full bg-gradient-radial from-white/10 via-white/5 to-transparent blur-3xl animate-pulse-very-slow"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-6xl z-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start text-left">
            <div className="space-y-6 max-w-3xl">
              <h1 className="font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text">
                  Dominate Online with Creative Design
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

      {/* Media Content */}
      <div className="container mx-auto px-6 py-8 max-w-6xl z-20">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Video */}
          <div className="relative rounded-xl overflow-hidden border border-white w-full md:w-2/3 h-[320px] shadow-xl">
            <video
              src="/images/vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl relative z-10 border border-white/30"
            />
          </div>

          {/* Image - Hidden on mobile */}
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

      {/* Animation keyframes */}
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
        
        .animate-pulse-slow {
          animation: pulse-intensity 8s ease-in-out infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-intensity 5s ease-in-out infinite;
        }
        
        .animate-pulse-very-slow {
          animation: pulse-intensity 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;