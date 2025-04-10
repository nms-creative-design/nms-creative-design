import React from 'react';
import Bento from '../Bento';

const Services = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-[48px] pb-[48px]">
      {/* Pure black background - matching Hero */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-6xl z-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-6">
              {/* Modern gradient heading */}
              <h2 className="font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text">
                  Services Tailored to You
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bento Component */}
      <div className="container mx-auto px-6 pb-16 max-w-6xl z-10">
        <Bento />
      </div>
    </section>
  );
};

export default Services;