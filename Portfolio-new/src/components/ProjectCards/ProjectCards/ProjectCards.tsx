import React from 'react';

type ProjectProps = {
  title: string;
  description: string;
  techStack: string;
  imgSrc: string;
  liveLink?: string;
  codeLink: string;
};

const ProjectCards: React.FC<ProjectProps> = ({ title, description, techStack, imgSrc, liveLink, codeLink }) => {
  return (
    <article className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-md rounded-lg overflow-hidden shadow-xl bg-cover bg-center group cursor-pointer transform transition-transform duration-500 hover:-translate-y-2" style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-75 transition-opacity duration-300"></div>
      <div className="relative p-6 sm:p-8 min-h-[20rem] flex flex-col justify-between text-center z-10">
        <h1 className="text-white text-2xl sm:text-3xl mb-4 transform transition-transform duration-300">
          {title}
        </h1>
        <p className="opacity-0 group-hover:opacity-80 text-white text-sm sm:text-xl mb-4 transform transition-opacity duration-500">
          {description}
        </p>
        <p className="opacity-0 group-hover:opacity-75 text-white text-sm sm:text-xl mb-4 transform transition-opacity duration-500">
          Tech stack: {techStack}
        </p>
        <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-dark hover:bg-green-dark text-light-grey rounded-full px-4 py-2 text-xs sm:text-sm font-bold font-raleway shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105"
            >
              Live
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-dark hover:bg-cyan-dark text-light-grey rounded-full px-4 py-2 text-sm sm:text-sm font-bold font-raleway shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105"
            > 
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCards;