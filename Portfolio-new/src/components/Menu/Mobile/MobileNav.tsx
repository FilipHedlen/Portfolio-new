import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="lg:flex lg:items-center lg:w-auto lg:space-x-4 ">
      <div className="flex items-center justify-between">
        <button
          onClick={toggleMenu}
          className="text-dark-grey dark:text-light-grey cursor-pointer focus:outline-none lg:hidden z-50"
        >
          <div className="w-6 h-6">
            <span className={`block bg-dark-grey dark:bg-light-grey h-1 w-full mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block bg-dark-grey dark:bg-light-grey h-1 w-full mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block bg-dark-grey dark:bg-light-grey h-1 w-full transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      {isOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-dark-grey bg-opacity-50 z-50"
          onClick={closeMenu}
        >
          <div className="bg-semi-light-grey dark:bg-gray-800 w-[80%] max-w-md rounded-lg shadow-md opacity-100 animate-fade-in-left p-8">
            <ul className="flex flex-col items-center space-y-6 font-raleway font-bold text-2xl text-dark-grey dark:text-light-grey">
              <li>
                <Link 
                  to="/" 
                  onClick={() => closeMenu()}
                  className="hover:text-primary-light-hover hover:dark:text-primary-dark-hover transition duration-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  onClick={() => closeMenu()}
                  className="hover:text-primary-light-hover hover:dark:text-primary-dark-hover transition duration-100"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about" 
                  onClick={() => closeMenu()}
                  className="hover:text-primary-light-hover hover:dark:text-primary-dark-hover transition duration-100"
                >
                  About me
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => closeMenu()}
                  className="hover:text-primary-light-hover hover:dark:text-primary-dark-hover transition duration-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavMenu;