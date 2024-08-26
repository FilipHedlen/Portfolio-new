import { Link } from 'react-router-dom';

const DesktopNavMenu = () => {
  return (
    <nav className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-4">
      <ul className="flex flex-row justify-end font-raleway font-bold text-xl text-dark-grey dark:text-light-grey">
        <li className="mr-5">
          <Link 
            to="/"
            className="hover:text-primary-light-hover hover:dark:text-primary-dark-hover transition duration-100" 
          >
            Home
          </Link>
        </li>
        <li className="mr-5">
          <Link 
            to="/projects"
            className="hover:text-primary-light-hover hover:dark:text-primary-dark-hover transition duration-100" 
          >
            Projects
          </Link>
        </li>
        <li className="mr-5">
          <Link 
            to="/about"
            className="hover:text-primary-light-hover hover:dark:text-primary-dark-hover transition duration-100"
          >
            About me
          </Link>
        </li>
        <li className="mr-5">
          <Link 
            to="/contact"
            className="hover:text-primary-light-hover hover:dark:text-primary-dark-hover  transition duration-100" 
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavMenu;