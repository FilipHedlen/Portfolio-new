import React, { useState, useRef } from 'react';
import ProjectCards from '../ProjectCards/ProjectCards';
import { projects } from '../../../data/projectData';

const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const touchStartTime = useRef<number>(0);

  const swipeThreshold = 50; // Minimum distance in pixels to be considered a swipe
  const tapThreshold = 200; // Maximum time in milliseconds to be considered a tap

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchEndTime = Date.now();
    const touchDuration = touchEndTime - touchStartTime.current;

    if (touchDuration < tapThreshold) {
      // Handle tap event
      if (touchStartX.current - touchEndX.current > swipeThreshold) {
        handleNext(); // Swipe left
      } else if (touchEndX.current - touchStartX.current > swipeThreshold) {
        handlePrev(); // Swipe right
      }
    }
  };

  return (
    <div
      className="relative min-h-screen w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              id={`slide${index + 1}`}
              className="carousel-item w-full flex justify-center my-10 sm:my-20"
              key={project.id}
              style={{ minWidth: "100%" }}
            >
              <ProjectCards
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                imgSrc={project.imgSrc}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-52 left-0 right-0 justify-between px-5 hidden sm:flex">
        <button
          onClick={handlePrev}
          className="text-4xl sm:text-5xl text-dark-grey dark:text-light-grey hover:text-primary-light-hover dark:hover:text-primary-dark-hover transition duration-100 p-2 sm:p-4"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="text-4xl sm:text-5xl text-dark-grey dark:text-light-grey hover:text-primary-light-hover dark:hover:text-primary-dark-hover transition duration-100 p-2 sm:p-4"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;