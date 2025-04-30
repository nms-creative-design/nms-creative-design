import React, { useState, useEffect, useRef } from 'react';

// Define ImgWithShadow as a separate component
export function ImgWithShadow() {
  return (
    <img
      className="h-66 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
      src="/images/about.png"
      alt="nature image"
    />
  );
}

const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    growth: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    // Counter animation logic
    const targetValues = {
      projects: 100,
      clients: 50,
      growth: 200,
    };

    const duration = 2000; // Duration in ms
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters((prevCounters) => {
        const newCounters = { ...prevCounters };
        let completed = true;

        for (const key in targetValues) {
          if (newCounters[key] < targetValues[key]) {
            newCounters[key] = Math.min(
              newCounters[key] + Math.ceil(targetValues[key] / steps),
              targetValues[key]
            );
            completed = false;
          }
        }

        if (completed) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, interval);

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
      clearInterval(timer);
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
                  Who We Are
                </span>
              </h2>
              {/* Paragraph with animation class */}
              <p
                className="text-gray-300 max-w-xl text-lg font-light leading-relaxed animate-on-scroll"
                style={{ animationDelay: '0.2s' }} // Staggered effect
              >
                We're more than a company—we're changemakers. Our passionate team is driven by a singular mission: creating innovative products that transform everyday experiences. We don't just meet expectations; we redefine possibilities, delivering exceptional solutions that make a meaningful difference in people's lives.
              </p>
            </div>
          </div>
          {/* Add the ImgWithShadow component below the text */}
          <div className="mt-10">
            <ImgWithShadow />
          </div>
          
          {/* Counter Section */}
          <div className="mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mb-16">
              <div className="flex items-end mb-8 md:mb-0">
                <h3 className="text-gray-200 text-8xl font-bold leading-none">
                  {counters.projects}
                  <span className="text-6xl">+</span>
                </h3>
                <p className="text-gray-400 text-2xl ml-2 mb-3">projects</p>
              </div>
              
              <div className="flex items-end mb-8 md:mb-0">
                <h3 className="text-gray-200 text-8xl font-bold leading-none">
                  {counters.clients}
                  <span className="text-6xl">+</span>
                </h3>
                <p className="text-gray-400 text-2xl ml-2 mb-3">clients</p>
              </div>
              
              <div className="flex items-end">
                <h3 className="text-gray-200 text-8xl font-bold leading-none">
                  {counters.growth}
                  <span className="text-6xl">%</span>
                </h3>
                <p className="text-gray-400 text-2xl ml-2 mb-3">growth</p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-12 max-w-6xl mx-auto">
              <h2 className="text-center text-5xl font-bold mb-6 text-white">
                To make a positive impact on the world
              </h2>
              
              <p className="text-center text-gray-400 max-w-4xl mx-auto mb-2">
                We are a team of passionate individuals who are dedicated to providing high-quality products and services to our customers.
              </p>
              
              <p className="text-center text-gray-400 max-w-4xl mx-auto mb-12">
                Our team was founded with a simple mission: to make a positive impact on the world by creating innovative solutions that improve people's lives.
              </p>
              
              <div className="flex justify-center">
                <button className="bg-white text-black py-3 px-8 rounded-full font-medium hover:bg-gray-200 transition-colors">
                  Know More
                </button>
              </div>
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
};

export default About;