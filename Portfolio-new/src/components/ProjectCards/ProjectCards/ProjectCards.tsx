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
    <div className="w-full max-w-sm h-[400px] rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 flex flex-col">
      <img className="w-full h-32 object-cover" src={imgSrc} alt={title} />
      <div className="flex-1 p-6">
        <div className="font-bold text-2xl mb-2 text-dark-grey dark:text-light-grey">{title}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
          {description}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          <strong>Tech Stack:</strong> {techStack}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-center">
        {liveLink && (
          <a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 mr-3 text-sm font-semibold transition duration-300"
          >
            Live
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-700 hover:bg-gray-800 text-white rounded-full px-4 py-2 text-sm font-semibold transition duration-300"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;