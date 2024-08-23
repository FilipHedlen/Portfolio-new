import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DarkModeToggle from '../DarkMode/DarkModeToggle';

const Layout = () => {
    return (
        <div className="min-h-screen bg-primary-light dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Header />
          <main className="relative mb-20">
            <Outlet />
          </main>
          <Footer />
          <DarkModeToggle />
        </div>
    );
};

export default Layout;