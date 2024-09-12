import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import DarkModeToggle from "../DarkMode/DarkModeToggle";

const Footer = () => {
  return (
    <footer className="font-bold p-6 h-auto bottom-0 w-full flex justify-between items-center bg-inherit">
      <div className="text-dark-grey dark:text-light-grey flex items-center">
        <FaCopyright className="mr-2" /> Filip Hedlén
      </div>

      <div className="flex space-x-6 mr-14">
        <a
          href="https://www.linkedin.com/in/filip-hedl%C3%A9n-04b489252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-dark-grey dark:text-light-grey text-2xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover"/>
        </a>
        <a
          href="https://github.com/FilipHedlen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-dark-grey dark:text-light-grey text-2xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover"/>
        </a>
        <a
          href="mailto:filip.hedlen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail className="text-dark-grey dark:text-light-grey text-2xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover"/>
        </a>
      </div>
      <div className="mr-2">
        <DarkModeToggle />
      </div>
    </footer>
  );
};

export default Footer;