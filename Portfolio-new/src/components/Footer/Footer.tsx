import React from 'react';
import { FaBeer, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-header/footer dark:bg-gray-800 font-bold p-6 fixed bottom-0 w-full flex justify-around">
      <p className="text-gray-900 dark:text-gray-100">My Footer</p>
      <a href="https://www.linkedin.com/in/filip-hedl%C3%A9n-04b489252/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-900 dark:text-gray-100 text-2xl" />
      </a>
      
    </footer>
  );
};

export default Footer;