import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import DarkModeToggle from "../../components/DarkMode/DarkModeToggle";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light-bg dark:bg-dark-bg font-lora">
      <div className="text-center mb-80">
        <DarkModeToggle />
        <h1 className="text-6xl font-bold text-dark-grey dark:text-light-grey mb-10 mt-20">Oops!</h1>
        <p className="text-xl text-dark-grey dark:text-light-grey mb-10">The page you are looking for could not be found.</p>
        <p className="text-xl text-dark-grey dark:text-light-grey mb-10">Try going back to the homepage with the link below!</p>
        <Link
          to="/"
          className="px-6 py-3 text-lg font-semibold font-raleway text-dark-grey dark:text-light-grey rounded-full shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-cyan-dark dark:hover:bg-cyan-light"
        >
          <span>Homepage</span>
        </Link>
      </div>
      <p className="text-dark-grey dark:text-light-grey"><FaCopyright className="mr-2 inline-block" />2024 Filip Hedlén. All rights reserved.</p>
    </div>
    );
  };
  
  export default NotFoundPage;