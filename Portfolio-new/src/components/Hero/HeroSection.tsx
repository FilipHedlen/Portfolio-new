import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-16 bg-light-bg dark:bg-dark-bg">

      <div className="relative text-center lg:absolute lg:top-[40%] lg:left-[26%] flex flex-col items-center justify-center mt-32 lg:mt-0">
        <div className="relative text-4xl lg:text-6xl font-bold text-dark-gray dark:text-light-grey mb-5">
          <h1 className="relative overflow-hidden whitespace-nowrap">
            <span className="block animate-colorChange">Welcome...</span>
          </h1>
        </div>
        <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          My name is Filip Hedlén and I'm a qualified Front End Developer
        </h4>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <Link
            to="/projects"
            className="relative z-10 inline-block px-6 py-3 text-lg font-medium text-white rounded-full shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-cyan-dark border-solid border-2 border-cyan"
          >
            <span>My Projects</span>
          </Link>
          <Link
            to="/contact"
            className="relative z-10 inline-block px-6 py-3 text-lg font-medium text-white rounded-full shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-green-dark border-solid border-2 border-green-dark"
          >
            <span>Contact me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};