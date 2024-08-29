import React, { useState } from 'react';
import ProjectCards from '../ProjectCards/ProjectCards';
import { projects } from '../../../data/projectData';

const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-[800px] mx-auto">
      <div className="overflow-hidden">
        <div 
          className={`flex transition-transform duration-500 ease-in-out transform ${
            direction === 'right' ? 'translate-x-[-100%]' : 'translate-x-[100%]'
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              id={`slide${index + 1}`}
              className="carousel-item w-full flex justify-center my-20 min-w-[800px]"
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
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-5">
        <button
          onClick={handlePrev}
          className="text-5xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover transition duration-100"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="text-5xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover transition duration-100"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;