// components/DynamicTabs.jsx
import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import Image from "next/image";

// Main DynamicTabs Component
const DynamicTabs = ({
  heading = "What sets us apart", // Default heading
  items = [], // Array of accordion items: { id, title, description, icon }
  imageSrc = "/images/content.png", // Right-side image source
  imageAlt = "Creative studio workspace", // Image alt text
  showImage = true, // Toggle to show/hide the right-side image
  sectionClassName = "", // Additional classes for the section
  headingClassName = "", // Additional classes for the heading
  accordionClassName = "", // Additional classes for each accordion
  imageClassName = "", // Additional classes for the image
  iconsData = [], // Array of icon data: { name, src, alt }
}) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className={`bg-black py-24 ${sectionClassName}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-left mb-10">
          <h2
            className={`font-bold text-4xl bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text ${headingClassName}`}
          >
            {heading}
          </h2>
        </div>

        {/* Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Accordions */}
          <div className="space-y-4">
            {items.map((item) => {
              // Find the icon data from iconsData based on item.icon
              const iconData = iconsData.find((icon) => icon.name === item.icon);
              return (
                <div key={item.id} className="relative group">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <Accordion
                    open={open === item.id}
                    className={`relative border border-white/20 rounded-xl backdrop-blur-sm bg-black/80 shadow-lg hover:shadow-xl transition duration-300 ${accordionClassName}`}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(item.id)}
                      className="text-white hover:text-white text-lg font-medium text-left px-6 py-5 flex items-center border-b-0 transition-colors"
                      aria-expanded={open === item.id}
                      aria-controls={`accordion-body-${item.id}`}
                    >
                      <div className="flex items-center gap-2">
                        {/* Render the icon using Image component if iconData exists */}
                        {iconData && (
                          <Image
                            src={iconData.src}
                            alt={iconData.alt}
                            width={36}
                            height={36}
                            className="w-9 h-9"
                          />
                        )}
                        <span>{item.title}</span>
                      </div>
                    </AccordionHeader>
                    <AccordionBody
                      className="text-gray-300 text-base px-6 pb-6 pt-0"
                      id={`accordion-body-${item.id}`}
                    >
                      {item.description}
                    </AccordionBody>
                  </Accordion>
                </div>
              );
            })}
          </div>

          {/* Right Column - Image */}
          {showImage && (
            <div className="hidden lg:block">
              <div>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className={`max-w-full h-auto rounded-lg shadow-lg ${imageClassName}`}
                  priority={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DynamicTabs;