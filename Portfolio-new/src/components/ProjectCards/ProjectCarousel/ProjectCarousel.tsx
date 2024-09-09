import React, { useState } from 'react';
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
    <div className="relative min-h-screen w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 touch-pan-x">
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
      <div className="absolute top-52 left-0 right-0 flex justify-between px-5">
        <button
          onClick={handlePrev}
          className="text-4xl sm:text-5xl text-dark-grey dark:text-light-grey hover:text-primary-light-hover dark:hover:text-primary-dark-hover transition duration-100 p-2 sm:p-4"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="text-4xl sm:text-5xl color text-dark-grey dark:text-light-grey hover:text-primary-light-hover dark:hover:text-primary-dark-hover transition duration-100 p-2 sm:p-4"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;