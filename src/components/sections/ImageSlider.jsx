import React, { useState, useEffect, useRef, memo } from "react";

const ImageSlider = () => {
  const sliderTrackRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [layoutReady, setLayoutReady] = useState(false);

  // Preload images before starting animations
  useEffect(() => {
    const imagesToPreload = [1, 2, 3, 4, 5, 6, 7].map(num => `/images/logo${num}.png`);
    let loadedCount = 0;
    
    const imagePromises = imagesToPreload.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imagesToPreload.length) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => resolve();
        img.src = src;
      });
    });
    
    Promise.all(imagePromises).then(() => {
      if (!imagesLoaded) {
        setTimeout(() => setImagesLoaded(true), 200);
      }
    });
    
    return () => {
      setImagesLoaded(false);
      setLayoutReady(false);
    };
  }, []);

  // Calculate layout and set initial positions
  useEffect(() => {
    if (imagesLoaded) {
      if (sliderTrackRef.current) {
        const width = sliderTrackRef.current.offsetWidth;
        sliderTrackRef.current.style.transform = 'translateX(0)';
      }
      
      setTimeout(() => {
        setLayoutReady(true);
        const SPEED_FACTOR = 9;
        const imageCount = 4;
        
        if (sliderTrackRef.current) {
          sliderTrackRef.current.style.animationDuration = `${imageCount * SPEED_FACTOR}s`;
        }
      }, 100);
    }
  }, [imagesLoaded]);

  const animationClass = layoutReady ? "animate-rightToLeft" : "";

  return (
    <div className="bg-black pt-8 overflow-hidden">
      <div className={imagesLoaded ? "block" : "invisible"}>
        <div className="w-3/4 mx-auto px-6 lg:px-8 mb-6">
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
          mask-image: linear-gradient(to right, 
            transparent 0%, 
            rgba(0, 0, 0, 0.6) 10%, 
            black 20%, 
            black 80%, 
            rgba(0, 0, 0, 0.6) 90%, 
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(to right, 
            transparent 0%, 
            rgba(0, 0, 0, 0.3) 10%, 
            black 20%, 
            black 80%, 
            rgba(0, 0, 0, 0.3) 90%, 
            transparent 100%
          );
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
          min-width: 100px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

const ImageGroup = () => (
  <div className="image-group flex">
    {[1, 2, 3, 4, 5].map((num) => (
      <div key={num} className="image-wrapper flex-shrink-0 mx-2">
        <img
          src={`/images/logo${num}.png`}
          alt={`Logo ${num}`}
          className="h-[55px] w-50px block"
          loading="eager"
        />
      </div>
    ))}
  </div>
);

const MemoizedImageGroup = memo(ImageGroup);

export default ImageSlider;