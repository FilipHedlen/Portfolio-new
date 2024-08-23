import { createBrowserRouter } from "react-router-dom";
//import Layout from "./components/Layout/Layout"; 
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import ProjectsPage from "./pages/Projects/ProjectsPage"
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import AboutPage from "./pages/About/AboutPage";
import Layout from "./components/PageLayout/Layout";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: (
            <>
              <HomePage />
            </>
          ),
        index: true,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);