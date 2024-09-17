import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-16 z-10 bg-frontend-bg bg-cover bg-center sm:bg-bottom lg:bg-center transition-all duration-500 dark:brightness-75 brightness-100">
      <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-0"></div>

      <div className="relative z-10 text-center">
        <header className="text-4xl lg:text-6xl font-bold text-dark-grey dark:text-light-grey mb-5 animate-fadeIn">
          <h1 className="overflow-hidden whitespace-nowrap">
            <span className="block animate-colorChange">Welcome...</span>
          </h1>
        </header>

        <h3 className="text-lg lg:text-xl text-semi-light-grey mb-6 font-lora font-bold animate-fadeIn">
          My name is Filip Hedlén and I'm a qualified Front End Developer
        </h3>

        <nav className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 animate-fadeIn">
          <Link
            to="/projects"
            className="px-6 py-3 text-lg font-semibold font-raleway text-semi-light-grey rounded-full shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-cyan-dark dark:hover:bg-cyan-light"
          >
            <span className="animate-slideIn">My Projects</span>
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 text-lg font-semibold font-raleway text-semi-light-grey rounded-full shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-green-dark dark:hover:bg-green-light"
          >
            <span className="animate-slideIn">Contact me</span>
          </Link>
        </nav>
      </div>
    </section>
  );
};