import { Link } from 'react-router-dom';

const DesktopNavMenu = () => {
  return (
    <nav className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-4">
      <ul className="flex flex-row justify-end font-poppins text-xl text-gray-900 dark:text-gray-100">
        <li className="mr-5">
          <Link 
            to="/"
            className="hover:text-primary-grey-hover hover:dark:text-primary-light-grey-hover transition duration-100" 
          >
            Home
          </Link>
        </li>
        <li className="mr-5">
          <Link 
            to="/projects"
            className="hover:text-gray-600 hover:dark:text-gray-500 transition duration-100" 
          >
            Projects
          </Link>
        </li>
        <li className="mr-5">
          <Link 
            to="/about"
            className="hover:text-gray-600 hover:dark:text-gray-500 transition duration-100"
          >
            About me
          </Link>
        </li>
        <li className="mr-5">
          <Link 
            to="/contact"
            className="hover:text-gray-600 hover:dark:text-gray-500 transition duration-100" 
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavMenu;