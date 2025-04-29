import React from 'react';
import Image from 'next/image';
import ReusableButton from '@/components/ReusableButton';

const DynamicPortfolio = ({
  heading = "Web Design Gallery",
  projects = [],
  sectionClassName = "",
  headingClassName = "",
  gridClassName = "",
  cardClassName = "",
}) => {
  const defaultProjects = [
    {
      id: 1,
      title: "Project 1",
      category: "Category",
      description: "Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites.",
      imageSrc: "/images/sidni.png",
      imageAlt: "Project 1 thumbnail",
    },
    {
      id: 2,
      title: "Project 2",
      category: "Category",
      description: "Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites.",
      imageSrc: "/images/tingo.png",
      imageAlt: "Project 2 thumbnail",
    },
    {
      id: 3,
      title: "Project 3",
      category: "Category",
      description: "Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites.",
      imageSrc: "/images/sidni.png",
      imageAlt: "Project 3 thumbnail",
    },
    {
      id: 4,
      title: "Project 4",
      category: "Category",
      description: "Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites.",
      imageSrc: "/images/tingo.png",
      imageAlt: "Project 4 thumbnail",
    },
  ];

  const displayProjects = projects.length > 0 ? projects.slice(0, 4) : defaultProjects;

  return (
    <section className={`bg-black py-32 ${sectionClassName}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className={`font-bold text-5xl md:text-6xl text-gray-200 ${headingClassName}`}>
            {heading}
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center ${gridClassName}`}>
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className={`relative group rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/30 backdrop-blur-sm max-w-full ${cardClassName}`}
            >
              <div className="relative h-80 md:h-96 w-full overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                  priority={false}
                />
              </div>

              <div className="p-8">
                <div className="inline-block mb-4">
                  <span className="text-sm font-medium bg-gray-800 text-gray-300 px-4 py-2 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 text-base">
                  {project.description}
                </p>
                
                <div className="flex items-center text-white text-lg cursor-pointer">
                  <span className="mr-2">View Project</span>
                  <span className="transform rotate-180"></span> {/* Upward Arrow */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
        <button className="bg-white text-black px-10 py-3 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 font-medium">
                  View Projects
                </button>
        </div>
      </div>
    </section>
  );
};

export default DynamicPortfolio;
