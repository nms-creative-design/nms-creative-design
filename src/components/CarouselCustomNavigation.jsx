// components/CarouselCustomNavigation.jsx
import { Carousel, IconButton } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  // Array of image data for the carousel
  const images = [
    [
      {
        src:"/images/sidni.png",
        alt: "Make Investment smooth as breeze",
        title: "Make Investment smooth as breeze",
      },
      {
        src:"/images/sidni.png",
        alt: "Make payment smooth as breeze",
        title: "Make payment smooth as breeze",
      },
      {
        src:"/images/sidni.png",
        alt: "Corporate card that makes your life easier",
        title: "Corporate card that makes your life easier",
      },
    ],
    [
      {
        src:"/images/sidni.png",
        alt: "Financial analytics dashboard",
        title: "Financial analytics dashboard",
      },
      {
        src:"/images/sidni.png",
        alt: "Mobile banking app",
        title: "Mobile banking app",
      },
      {
        src:"/images/sidni.png",
        alt: "Business credit card solution",
        title: "Business credit card solution",
      },
    ],
  ];

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6 text-white">Our Latest Projects</h2>

      <Carousel
        className="rounded-xl relative"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-4 z-50 flex gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute bottom-4 right-16 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute bottom-4 right-4 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        {images.map((group, groupIndex) => (
          <div key={groupIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 pb-20">
            {group.map((image, imageIndex) => (
              <div 
                key={imageIndex} 
                className="relative rounded-lg overflow-hidden bg-gray-800 h-64"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium text-sm">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
