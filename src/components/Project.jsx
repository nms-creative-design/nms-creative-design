import React from 'react';
import { CarouselCustomNavigation } from './CarouselCustomNavigation';

const Project = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-[48px] pb-[48px]">
      <div className="absolute inset-0 bg-black z-0"></div>

      <div className="container mx-auto px-6 max-w-6xl z-10">
        <div className="flex flex-col gap-10">

          <div className="mt-10 rounded-xl overflow-hidden">
            <CarouselCustomNavigation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
