import React, { useState, useEffect, useRef, memo } from "react";

const ImageSlider = () => {
  const sliderTrackRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [layoutReady, setLayoutReady] = useState(false);

  // Preload images before starting animations
  useEffect(() => {
    const imagesToPreload = [1, 2, 3, 4, 5, 6, 7].map(num => `/images/logo${num}.png`);
    let loadedCount = 0;
    
    // Create an array to track loading progress
    const imagePromises = imagesToPreload.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imagesToPreload.length) {
            // All images loaded
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => resolve(); // Continue even if image fails to load
        img.src = src;
      });
    });
    
    // Wait for all images to load
    Promise.all(imagePromises).then(() => {
      // Backup in case some images fail to trigger onload
      if (!imagesLoaded) {
        setTimeout(() => setImagesLoaded(true), 200);
      }
    });
    
    // Cleanup
    return () => {
      setImagesLoaded(false);
      setLayoutReady(false);
    };
  }, []);

  // Calculate layout and set initial positions
  useEffect(() => {
    if (imagesLoaded) {
      // Force layout calculation
      if (sliderTrackRef.current) {
        // Force a layout calculation by reading offsetWidth
        const width = sliderTrackRef.current.offsetWidth;
        
        // Position track at starting position before animation begins
        sliderTrackRef.current.style.transform = 'translateX(0)';
      }
      
      // Small delay before enabling animations to ensure proper layout
      setTimeout(() => {
        setLayoutReady(true);
        
        // Set animation duration
        const SPEED_FACTOR = 9;
        const imageCount = 4;
        
        if (sliderTrackRef.current) {
          sliderTrackRef.current.style.animationDuration = `${imageCount * SPEED_FACTOR}s`;
        }
      }, 100);
    }
  }, [imagesLoaded]);

  // Prepare animation class
  const animationClass = layoutReady ? "animate-rightToLeft" : "";

  return (
    <div className="bg-black pt-8 overflow-hidden">
      {/* No loading animation, content is simply hidden until ready */}
      
      <div className={imagesLoaded ? "block" : "invisible"}>
        <div className="w-3/4 mx-auto px-6 lg:px-8 mb-6">
          {/* Only the middle slider - Right to Left */}
          <div className="slider-container relative overflow-hidden">
            <div
              ref={sliderTrackRef}
              className={`slider-track flex ${animationClass}`}
            >
              {[...Array(3)].map((_, index) => (
                <MemoizedImageGroup key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slider-container {
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        .slider-track {
          width: max-content;
          will-change: transform;
        }

        @keyframes rightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-rightToLeft {
          animation: rightToLeft 15s linear infinite;
        }

        .image-wrapper {
          min-width: 120px; /* Fixed width to prevent compression */
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

// Image group component with fixed sizing
const ImageGroup = () => (
  <div className="image-group flex">
    {[1, 2, 3, 4, 5].map((num) => (
      <div key={num} className="image-wrapper flex-shrink-0 mx-2">
        <img
          src={`/images/logo${num}.png`}
          alt={`Logo ${num}`}
          className="h-[70px] w-auto block"
          loading="eager" // Changed from lazy to eager for preloading
        />
      </div>
    ))}
  </div>
);

// Memoize the component to avoid unnecessary re-renders
const MemoizedImageGroup = memo(ImageGroup);

export default ImageSlider;