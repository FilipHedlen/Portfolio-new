import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg">
      <Header />
      <main className="relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;