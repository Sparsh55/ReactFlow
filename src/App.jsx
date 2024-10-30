import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';
import MobileMsg from './components/MobileMsg.jsx';

import "./App.css";


export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Threshold for mobile screens
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Check on resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // Simulate a 5-second loading period
    return () => clearTimeout(timer);
  }, []);

  if (isMobile) {
    return <MobileMsg />;
  }
  

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/getstarted",
          element: <GetStarted />,
        },

        {
          path: "/aboutme",
          element: <AboutMe />,
        }
      ]
    }
  ]);

  if (loading) {
    return <Loader />;
  }



  return (
    <>
    <div style={{ width: '100vw', height: '100vh' }}>
      <RouterProvider router={router} />
      </div>
    </>
    
  );


  // return (
  //   <Router>
  //     <div className="App">
  //       <Hero />
  //       <Navbar />
  //       <Routes>
  //         <Route path="/getstarted" element={<AboutMe />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}
