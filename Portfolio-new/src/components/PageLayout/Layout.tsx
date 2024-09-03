import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      
      {/* Light and Dark Backgrounds */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950">

        {/* Light Mode Gradient */}
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,_#fff_40%,_#63e_100%)] dark:hidden"></div>

        {/* Dark Mode Gradients */}
        <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full hidden dark:block">
          <div className="h-full w-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full hidden dark:block">
          <div className="h-full w-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;