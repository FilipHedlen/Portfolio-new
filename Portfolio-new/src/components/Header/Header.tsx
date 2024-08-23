import { Link } from 'react-router-dom';
import MobileNavMenu from '../Menu/Mobile/MobileNav';
import DesktopNavMenu from '../Menu/Desktop/DesktopNav';

const Header = () => {
  return (
    <header className="p-4 bg-header/footer dark:bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="" />
        </Link>
        <MobileNavMenu />
        <DesktopNavMenu />
      </div>
    </header>
  );
};

export default Header;