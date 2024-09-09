import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState<boolean>(() => 
    document.body.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <button onClick={toggleDarkMode} className="p-1.5 rounded bg-dark-grey dark:bg-light-grey hover:bg-primary-light-hover hover:dark:bg-primary-dark-hover">
      {darkMode ? <IoSunny /> : <IoMoon />}
    </button>
  );
};

export default DarkModeToggle;