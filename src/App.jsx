import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';

import "./App.css";


export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Simulate a 5-second loading period
    return () => clearTimeout(timer);
  }, []);

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
