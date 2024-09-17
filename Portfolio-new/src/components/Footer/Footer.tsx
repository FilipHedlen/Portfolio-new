import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import DarkModeToggle from "../DarkMode/DarkModeToggle";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 left-0 right-0 p-4 container mx-auto flex justify-between items-center z-20 h-auto">

      <div className="text-dark-grey dark:text-light-grey flex items-center font-bold">
        <FaCopyright className="mr-2" />
        <div className="flex flex-col sm:flex-row">
          <span>Filip</span>
          <span className="sm:ml-1">Hedlén</span>
        </div>
      </div>

      <div className="flex space-x-6 mr-14">
        <a
          href="https://www.linkedin.com/in/filip-hedl%C3%A9n-04b489252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-dark-grey dark:text-light-grey text-2xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover" />
        </a>
        <a
          href="https://github.com/FilipHedlen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-dark-grey dark:text-light-grey text-2xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover" />
        </a>
        <a
          href="mailto:filip.hedlen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail className="text-dark-grey dark:text-light-grey text-2xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover" />
        </a>
      </div>

      <div className="mr-2">
        <DarkModeToggle />
      </div>
    </footer>
  );
};

export default Footer;