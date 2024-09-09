import React, { useState, useRef } from 'react';
import ProjectCards from '../ProjectCards/ProjectCards';
import { projects } from '../../../data/projectData';

const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Variables to track touch and mouse movements
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const clickThreshold = 5; // Sensitivity for detecting clicks vs swipes

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  // Track touch/mouse down position
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Track touch/mouse move position
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Detect swipe or click after touch end
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;

      // If it's a swipe
      if (Math.abs(distance) > clickThreshold) {
        if (distance > 0) {
          handleNext(); // Swipe left to right
        } else {
          handlePrev(); // Swipe right to left
        }
      }
    }

    // Reset touch positions
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-20 z-10"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full flex items-center justify-center mt-10">
        <button
          onClick={handlePrev}
          className="text-4xl sm:text-5xl text-dark-grey dark:text-light-grey hover:text-primary-light-hover dark:hover:text-primary-dark-hover transition duration-100 p-2 sm:p-4 absolute left-2 sm:left-6 hidden sm:block"
          aria-label="Previous Slide"
        >
          ❮
        </button>

        <div className="overflow-hidden w-full flex justify-center">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <article
                id={`slide${index + 1}`}
                className="flex-shrink-0 w-full flex justify-center my-10 sm:my-20"
                key={project.id}
              >
                <ProjectCards
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  imgSrc={project.imgSrc}
                  liveLink={project.liveLink}
                  codeLink={project.codeLink}
                />
              </article>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="text-4xl sm:text-5xl text-dark-grey dark:text-light-grey hover:text-primary-light-hover dark:hover:text-primary-dark-hover transition duration-100 p-2 sm:p-4 absolute right-2 sm:right-6 hidden sm:block"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default ProjectsCarousel;