import React, { useEffect, useRef } from 'react';

// Define ImgWithShadow as a separate component
export function ImgWithShadow() {
  return (
    <img
      className="h-66 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
      src="/images/image.png"
      alt="nature image"
    />
  );
}

const Setapart = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
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
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black py-[48px]">
      <div className="absolute inset-0 bg-black z-0"></div>

      <div className="container mx-auto px-6 py-16 max-w-6xl z-10">
        <div className="flex flex-col gap-10">
          <div
            ref={sectionRef}
            className="flex flex-col md:flex-row md:items-start md:justify-between text-left space-y-6 md:space-y-0 md:space-x-12"
          >
            {/* Left Column - Heading */}
            <div className="md:w-1/3">
              <h2 className="font-bold text-4xl tracking-tight leading-tight animate-on-scroll text-gray-300">
                What sets us<br />apart
              </h2>
            </div>

            {/* Right Column - Paragraph */}
            <div className="md:w-2/3">
              <p
                className="text-gray-400 text-lg font-light leading-relaxed animate-on-scroll"
                style={{ animationDelay: '0.2s' }}
              >
                We are a team of passionate individuals who are dedicated to providing high-quality products and services to our customers. Our team was founded with a simple mission: to make a positive impact on the world by creating innovative solutions that improve people's lives. We believe that everyone deserves access to products and services that enhance their daily experiences, and we strive to deliver on that promise every day.
              </p>
            </div>
          </div>

          {/* Optional Image Below */}
          <div className="mt-16">
            <ImgWithShadow />
          </div>
        </div>
      </div>

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

export default Setapart;
