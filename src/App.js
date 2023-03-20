// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Home from './components/Home'
import ContactInfo from './components/ContactInfo';
import OurBrands from './components/OurBrands';
import Programs from './components/Programs';
import OurStory from './components/OurStory';
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
        element: <OurStory />,
      },

      {
        path: "/our-brands",
        element: <OurBrands />,
      },
      {
        path: "/initiatives",
        element: <SocialInitiatives />,
      },
      {
        path: "/contact-us", // useParams to get restId
        element: <ContactInfo />,
      },
    ],
  },
]);

export default appRouter;
