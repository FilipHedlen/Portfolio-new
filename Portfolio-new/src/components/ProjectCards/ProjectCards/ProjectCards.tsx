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
    <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg overflow-hidden shadow-lg group mx-auto my-4">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-85 transition-opacity duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="relative p-6 sm:p-8 h-64 sm:h-72 lg:h-80 min-h-[20rem] flex flex-col justify-center items-center text-center z-10">
        {/* Title */}
        <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 text-white transform transition-transform duration-300">
          {title}
        </div>

        {/* Description */}
        <p className="text-white text-sm sm:text-base mb-2 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </p>

        {/* Tech Stack */}
        <p className="text-gray-200 text-xs sm:text-sm mb-2 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <strong>Tech Stack:</strong> {techStack}
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition duration-300"
            >
              Live
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition duration-300"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;