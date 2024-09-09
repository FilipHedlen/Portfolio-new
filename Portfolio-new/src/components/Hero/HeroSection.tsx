import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-16 bg-light-bg dark:bg-dark-bg">
      <div className="relative text-center lg:absolute lg:left-[26%] flex flex-col items-center justify-center lg:mt-0">
        <div className="relative text-4xl lg:text-6xl font-bold text-dark-grey dark:text-light-grey mb-5 animate-slideIn">
          <h1 className="relative overflow-hidden whitespace-nowrap">
            <span className="block animate-colorChange">Welcome...</span>
          </h1>
        </div>
        <h3 className="text-lg text-dark-grey dark:text-semi-light-grey mb-6 font-lora font-bold animate-fadeIn">
          My name is Filip Hedlén and I'm a qualified Front End Developer
        </h3>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 animate-fadeIn">
          <Link
            to="/projects"
            className="relative z-10 inline-block px-6 py-3 text-lg font-semibold font-raleway dark:text-semi-light-grey text-dark-grey rounded-full shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-cyan-dark hover:animate-bounce-light"
          >
            <span className="animate-slideIn">My Projects</span>
          </Link>
          <Link
            to="/contact"
            className="relative z-10 inline-block px-6 py-3 text-lg font-semibold font-raleway dark:text-semi-light-grey text-dark-grey rounded-full shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-green-dark hover:animate-bounce-light"
          >
            <span className="animate-slideIn">Contact me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};