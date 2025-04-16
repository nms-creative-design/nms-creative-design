import React from 'react';
import Image from 'next/image';

export const Cta = () => {
  return (
    <div className="w-full bg-black py-24">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="relative">
          {/* Back div - with almost entirely dark gradient (just a sliver of white) */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-black from-0% via-black via-80% to-gray-800 to-95% animate-rotate-gradient"></div>
          
          {/* Main CTA card */}
          <div className="w-full rounded-2xl bg-gradient-to-b from-gray-900 to-black p-8 md:p-12 lg:p-14 border border-gray-800 shadow-xl relative z-10">
            {/* Image Logo */}
            <div className="flex justify-center">
              <div className="relative w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48">
                <Image
                  src="/images/cta.png"
                  alt="CTA Logo"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* CTA Text Content */}
            <div className="text-center">
              <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
                Ready to make your vision a reality?
              </h2>

              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                Join over 800+ happy site owners boosting productivity
                and efficiency!
              </p>

              <div className="flex justify-center mt-6">
                <button className="bg-white text-black hover:bg-gray-100 transition-colors py-3 px-8 rounded-full font-medium">
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;