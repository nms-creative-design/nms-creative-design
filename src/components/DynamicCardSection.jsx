import React from 'react';
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// Reusable Card Component
function CardWithLink({ title, description, imageSrc, index }) {
  return (
    <Card className="w-80 sm:w-96 flex-shrink-0 snap-center bg-[#111111] border border-gray-800 rounded-lg text-left hover:border-gray-600 transition-all duration-300 slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
      <CardBody className="p-8">
        <div className="flex justify-left mb-6">
          <img
            src={imageSrc}
            alt={`${title} icon`}
            className="h-12 w-12 object-contain"
          />
        </div>
        <Typography variant="h5" className="text-white mb-2">
          {title}
        </Typography>
        <Typography className="text-gray-400">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

// Dynamic Card Section Component
const DynamicCardSection = ({
  sectionTitle,
  titleGradientClasses = "from-gray-500 via-white to-gray-200",
  description,
  cardData = [],
  sectionClassName = "relative w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-[48px] pb-[48px]",
  containerClassName = "container mx-auto px-6 py-16 max-w-6xl z-10",
  cardContainerClassName = "flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800",
  enableAnimations = true,
}) => {
  return (
    <section className={sectionClassName}>
      {/* Background */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Main Content */}
      <div className={containerClassName}>
        <div className="flex flex-col gap-10">
          {/* Heading and Description */}
          <div className="flex flex-col items-center text-center">
            <div className="space-y-6">
              <h2 className="font-bold tracking-tight leading-tight">
                <span className={`bg-gradient-to-r ${titleGradientClasses} text-transparent bg-clip-text`}>
                  {sectionTitle}
                </span>
              </h2>
              {description && (
                <p className="text-gray-300 max-w-xl text-lg font-light leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
          
          {/* Horizontal Scrolling Container with Cards */}
          {cardData.length > 0 && (
            <div className="mt-10 w-full">
              <div className={cardContainerClassName}>
                {cardData.map((card, index) => (
                  <CardWithLink
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageSrc={card.imageSrc}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Inline CSS for animation and scrollbar */}
          {enableAnimations && (
            <style jsx>{`
              .slide-in-right {
                animation: slideInRight 0.6s ease-out forwards;
              }

              @keyframes slideInRight {
                from {
                  opacity: 0;
                  transform: translateX(100px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }

              /* Custom Scrollbar Styling */
              .scrollbar-thin {
                scrollbar-width: thin;
              }

              .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
                background-color: #4b5563;
                border-radius: 10px;
              }

              .scrollbar-track-gray-800::-webkit-scrollbar-track {
                background-color: #1f2937;
              }

              .scrollbar-thin::-webkit-scrollbar {
                height: 8px;
              }
            `}</style>
          )}
        </div>
      </div>
    </section>
  );
};

export { DynamicCardSection, CardWithLink };