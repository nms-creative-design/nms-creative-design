import { Carousel, IconButton } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  const images = [
    [
      {
        src: "/images/sidni.png",
        alt: "Make Investment smooth as breeze",
        title: "Make Investment smooth as breeze",
      },
      {
        src: "/images/sidni.png",
        alt: "Make payment smooth as breeze",
        title: "Make payment smooth as breeze",
      },
      {
        src: "/images/sidni.png",
        alt: "Corporate card that makes your life easier",
        title: "Corporate card that makes your life easier",
      },
    ],
    [
      {
        src: "/images/sidni.png",
        alt: "Financial analytics dashboard",
        title: "Financial analytics dashboard",
      },
      {
        src: "/images/sidni.png",
        alt: "Mobile banking app",
        title: "Mobile banking app",
      },
      {
        src: "/images/sidni.png",
        alt: "Business credit card solution",
        title: "Business credit card solution",
      },
    ],
  ];

  const mobileImages = [
    [{ src: "/images/sidni.png", alt: "Make Investment smooth as breeze", title: "Make Investment smooth as breeze" }],
    [{ src: "/images/sidni.png", alt: "Make payment smooth as breeze", title: "Make payment smooth as breeze" }],
    [{ src: "/images/sidni.png", alt: "Corporate card that makes your life easier", title: "Corporate card that makes your life easier" }],
    [{ src: "/images/sidni.png", alt: "Financial analytics dashboard", title: "Financial analytics dashboard" }],
    [{ src: "/images/sidni.png", alt: "Mobile banking app", title: "Mobile banking app" }],
    [{ src: "/images/sidni.png", alt: "Business credit card solution", title: "Business credit card solution" }],
  ];

  const renderCarousel = (imageSet, isMobile = false) => (
    <Carousel
      className="rounded-xl relative"
      prevArrow={({ handlePrev }) => null} // Setting to null to remove default top arrows
      nextArrow={({ handleNext }) => null} // Setting to null to remove default top arrows
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-0 right-0 z-50 flex justify-between items-center px-4">
          {/* Pagination Dots */}
          <div className="flex gap-2">
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
          {/* Navigation Arrows (only at bottom) */}
          <div className="flex gap-2">
            <IconButton
              variant="text"
              color="white"
              size="sm"
              onClick={() => setActiveIndex(activeIndex === 0 ? length - 1 : activeIndex - 1)}
              className="flex items-center justify-center w-8 h-8"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </IconButton>
            <IconButton
              variant="text"
              color="white"
              size="sm"
              onClick={() => setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1)}
              className="flex items-center justify-center w-8 h-8"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </IconButton>
          </div>
        </div>
      )}
    >
      {imageSet.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"} gap-4 p-4 ${isMobile ? "pb-16" : "pb-20"}`}
        >
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
  );

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6 text-white">Our Latest Projects</h2>
      {/* Desktop Carousel */}
      <div className="hidden sm:block">{renderCarousel(images)}</div>
      {/* Mobile Carousel */}
      <div className="block sm:hidden">{renderCarousel(mobileImages, true)}</div>
    </div>
  );
}