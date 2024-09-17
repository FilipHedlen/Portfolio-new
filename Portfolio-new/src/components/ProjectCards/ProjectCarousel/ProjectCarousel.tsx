import React, { useState } from 'react';
import SwipeHandler from '../../SwipeHandler/SwipeHandler';
import ProjectCards from '../ProjectCards/ProjectCards';
import { projects } from '../../../data/projectData';

const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center xl:mt-16 mt-20 z-10 animate-zoomOutBlur">
      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="text-4xl sm:text-5xl text-dark-grey dark:text-light-grey hover:text-primary-light-hover dark:hover:text-primary-dark-hover transition duration-100 p-2 sm:p-4 absolute left-2 sm:left-6 hidden sm:block"
          aria-label="Previous Slide"
        >
          ❮
        </button>

        <SwipeHandler onSwipeLeft={handleNext} onSwipeRight={handlePrev}>
          <div className="overflow-hidden w-full flex justify-center">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <article
                  id={`slide${index + 1}`}
                  className="flex-shrink-0 w-full flex justify-center"
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
        </SwipeHandler>

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