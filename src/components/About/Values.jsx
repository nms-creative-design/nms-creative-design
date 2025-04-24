import React from 'react';
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// CardWithLink Component
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

const Values = () => {
  // Card data array for multiple cards
  const cardData = [
    {
      title: "Creativity",
      description: "We embrace and celebrate creativity in all its forms. We believe in pushing boundaries, thinking outside the box, and finding innovative solutions to every challenge.",
      imageSrc: "/images/1.svg",
    },
    {
      title: "Collaboration",
      description: "We thrive on collaboration and believe that great ideas come from diverse perspectives. We foster a supportive and inclusive environment where everyone's voice is heard and valued.",
      imageSrc: "/images/2.svg",
    },
    {
      title: "Excellence",
      description: "We have a relentless pursuit of excellence in everything we do. We are dedicated to delivering high-quality work that exceeds expectations and leaves a lasting impression.",
      imageSrc: "/images/3.svg",
    },
    {
      title: "Passion",
      description: "We are passionate about our craft and genuinely care about the work we produce. Our enthusiasm fuels our creativity and drives us to constantly improve and evolve.",
      imageSrc: "/images/4.svg",
    },
    {
      title: "Integrity",
      description: "We operate with integrity and maintain the highest ethical standards. We value honesty, transparency, and treating everyone with respect and fairness.",
      imageSrc: "/images/5.svg",
    },
    {
      title: "Adaptability",
      description: "We embrace change and thrive in a dynamic, fast-paced environment. We are open to new ideas, willing to learn, and agile in adapting to emerging trends and technologies.",
      imageSrc: "/images/6.svg",
    },
    {
      title: "Client-Centric Approach",
      description: "We are committed to understanding our clients' needs and delivering solutions that exceed their expectations. We build strong relationships based on trust, communication, and delivering value.",
      imageSrc: "/images/7.svg",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-[48px] pb-[48px]">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-6xl z-10">
        <div className="flex flex-col gap-10">
          {/* Heading and Paragraph */}
          <div className="flex flex-col items-center text-center">
            <div className="space-y-6">
              <h2 className="font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text">
                  Our Team Values
                </span>
              </h2>
              <p className="text-gray-300 max-w-xl text-lg font-light leading-relaxed">
                These team values serve as the foundation of our creative studio, shaping our culture, guiding our work, and driving our success in delivering exceptional creative experiences.
              </p>
            </div>
          </div>
          
          {/* Horizontal Scrolling Container with Cards */}
          <div className="mt-10 w-full">
            <div className="flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
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
        </div>
      </div>

      {/* Inline CSS for animation and scrollbar */}
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
    </section>
  );
};

export default Values;