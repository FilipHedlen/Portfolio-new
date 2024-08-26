import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div className="min-h-screen bg-primary-light dark:bg-gray-900 text-dark-grey dark:text-light-grey">
          <Header />
          <Outlet />
          <Footer />
        </div>
    );
};

export default Layout;