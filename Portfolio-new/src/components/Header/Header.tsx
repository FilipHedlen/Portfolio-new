import { Link } from 'react-router-dom';
import MobileNavMenu from '../Menu/Mobile/MobileNav';
import DesktopNavMenu from '../Menu/Desktop/DesktopNav';

const Header = () => {
  return (
    <header className="p-4 bg-header/footer dark:bg-header/footer-dark">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="/light-logo.png"
            alt="Logo"
            className="w-24 h-auto md:w-32 lg:w-40 dark:hidden"
          />
          <img
            src="/dark-logo.png"
            alt="Logo"
            className="w-24 h-auto md:w-32 lg:w-40 hidden dark:block"
          />
        </Link>
        <MobileNavMenu />
        <DesktopNavMenu />
      </div>
    </header>
  );
};

export default Header;