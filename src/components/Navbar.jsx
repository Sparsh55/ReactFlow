
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/"><img src="../../public/pngwing.com.png" alt="Ford Logo" /></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/aboutme">AboutMe</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/getstarted">GetStared!</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>

  );
};

export default Navbar;
