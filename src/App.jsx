import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


export default function App() {

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
  ])


  return (
    <>
      <RouterProvider router={router} />
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
