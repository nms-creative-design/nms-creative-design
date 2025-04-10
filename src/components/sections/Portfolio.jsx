'use client';

import React, { useState } from 'react';
import { IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Portfolio = () => {
  // Track which slide is currently visible
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Total number of slides in the carousel
  const totalSlides = 5;

  // Functions to navigate between slides
  const goToPreviousSlide = () => {
    setCurrentSlide(current => current === 0 ? totalSlides - 1 : current - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(current => current === totalSlides - 1 ? 0 : current + 1);
  };

  return (
    <section className="relative w-full bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">Our Portfolio</h2>
        </div>
        
        {/* Portfolio Projects Display */}
        <div className="flex overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Investment App Project */}
            <div className="relative bg-gray-700 rounded-lg overflow-hidden">
              <div className="flex p-8 justify-center">
                <img 
                  src="/images/portfolio/investment-1.png" 
                  alt="Investment App Mobile View" 
                  className="h-64 object-contain mr-4"
                />
                <img 
                  src="/images/portfolio/investment-2.png" 
                  alt="Investment App Details View" 
                  className="h-64 object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Make investment</h3>
                <p className="text-xl">smooth as breeze</p>
              </div>
            </div>
            
            {/* Payment Solution Project */}
            <div className="relative bg-gray-700 rounded-lg overflow-hidden">
              <div className="flex items-center justify-center p-8">
                <img 
                  src="/images/portfolio/payment.png" 
                  alt="Payment Solution" 
                  className="h-64 object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Make payment</h3>
                <p className="text-xl">smooth as breeze</p>
              </div>
            </div>
            
            {/* Corporate Card Project */}
            <div className="relative bg-gray-700 rounded-lg overflow-hidden">
              <div className="flex items-center justify-center p-8">
                <img 
                  src="/images/portfolio/corporate-card.png" 
                  alt="Corporate Card" 
                  className="h-64 object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Corporate card</h3>
                <p className="text-xl">that makes your life easier</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators (Dots) */}
        <div className="flex justify-center items-center mt-12">
          <div className="flex space-x-2">
            {/* Create an indicator for each slide */}
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-0.5 ${
                  index === currentSlide 
                    ? "w-8 bg-white" // Active indicator is longer and white
                    : "w-5 bg-gray-600" // Inactive indicators are shorter and gray
                } transition-all duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-end mt-4 space-x-4">
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={goToPreviousSlide}
            className="rounded-full"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </IconButton>
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={goToNextSlide}
            className="rounded-full"
          >
            <ArrowRightIcon className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;