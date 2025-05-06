import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { projectsData } from '@/data/projectsData';
import Link from 'next/link';

const DynamicPortfolio = ({
  heading = "Portfolio Gallery",
  categories = [],
  sectionClassName = "",
  headingClassName = "",
  gridClassName = "",
  cardClassName = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Responsive items per page logic
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage(); // Run on mount
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Filter projects based on categories prop
  const displayProjects = categories.length > 0
    ? projectsData.filter(project =>
        project.categories.some(category => categories.includes(category))
      )
    : projectsData;

  const totalPages = Math.ceil(displayProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = displayProjects.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className={`relative bg-black py-32 ${sectionClassName}`}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-left mb-10">
          <h2
            className={`font-bold text-4xl bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text ${headingClassName}`}
          >
            {heading}
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center ${gridClassName}`}>
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className={`relative group rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/30 backdrop-blur-sm max-w-full ${cardClassName}`}
            >
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <Image
                  src={project.imagePreview}
                  alt={project.imageAlt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                  priority={false}
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-red-600 text-white px-2 py-0.5 rounded-full border border-red-500/50"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center text-white text-sm cursor-pointer">
                  <Link href={project.link || '/happy-wally'} className="flex items-center">
                  <span className="mr-2 text-xs font-bold text-white">View Project</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-16 space-x-2">
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-full font-medium ${
                  currentPage === page
                    ? 'bg-gray-300 text-black cursor-not-allowed'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
                disabled={currentPage === page}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicPortfolio;
