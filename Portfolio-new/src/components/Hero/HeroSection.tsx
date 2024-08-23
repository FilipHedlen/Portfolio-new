import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-light-blue-400 via-white to-light-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
      <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Welcome to My Portfolio!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          My name is Filip Hedlén and I'm a passionate Front End Developer!
        </p>
        <div className="space-x-4">
          <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
            My Projects
          </Link>
          <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};