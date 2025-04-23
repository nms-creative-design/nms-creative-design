// pages/services.js
import React, { useEffect, useRef } from "react";
import Bento from "./Bento";

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center bg-black pt-12 pb-12 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-6xl z-10">
        <div ref={sectionRef} className="text-center">
          <h2 className="font-bold tracking-tight text-4xl animate-on-scroll bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text">
            Services Tailored to You
          </h2>
        </div>
        <div className="mt-10">
          <Bento />
        </div>
      </div>

      {/* Styles */}
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