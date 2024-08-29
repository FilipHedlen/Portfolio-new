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
    <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 flex flex-col">
      <img className="w-full h-32 sm:h-40 object-cover" src={imgSrc} alt={title} />
      <div className="flex-1 p-4 sm:p-6">
        <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 text-dark-grey dark:text-light-grey">{title}</div>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-2 sm:mb-4">
          {description}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4">
          <strong>Tech Stack:</strong> {techStack}
        </p>
      </div>
      <div className="px-4 sm:px-6 py-2 sm:py-4 flex justify-center">
        {liveLink && (
          <a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 mr-3 text-xs sm:text-sm font-semibold transition duration-300"
          >
            Live
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-700 hover:bg-gray-800 text-white rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition duration-300"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;