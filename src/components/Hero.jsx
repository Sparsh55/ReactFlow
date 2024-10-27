import { Link } from "react-router-dom";
import "./Hero.css";
import {FontAwesomeIcon}from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <>
      <div>
        <div className="fordvideo">
          <video
            src="/4489-179376355_medium.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="overlay" />
        <div className="hero">
          <h2>
            <span className="wave"> 👋</span> Hello Everyone !
          </h2>
          <h1>
            This is <span className="Chetan">Chetan Gupta</span>
          </h1>

          <h4>
           I am a junior maanger at ppc at ford office banglore.
          </h4>
          <p>this presentaion is blakesss alice in worderland somthing soomthing</p>
          <div className="hero-buttons">
            <div className="icon"> 
          <Link to= "/aboutme" className="button">About This Project </Link></div>
          <div className="icon">
          <Link to='/getstarted' className='button'>Get Started Now<FontAwesomeIcon icon={faArrowDownWideShort}  style={{"marginleft":"10px"}}/></Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
