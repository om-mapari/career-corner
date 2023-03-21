import React from 'react'
import Home from './components/Home'
import ContactUs from './components/ContactUs';
import Brands from './components/Brands';
import Programs from './components/Programs';
import AboutUs from './components/AboutUs';
import SocialInitiatives from './components/SocialInitiatives';
import Error from './components/Error'
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet /> {/* Is like a placeholder where children is filled in */}
      <Footer />
    </div>
  );
}

// routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      // all children will go into the outlet
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/our-brands",
        element: <Brands />,
      },
      {
        path: "/initiatives",
        element: <SocialInitiatives />,
      },
      {
        path: "/contact-us", // useParams to get restId
        element: <ContactUs />,
      },
    ],
  },
]);

export default appRouter;
