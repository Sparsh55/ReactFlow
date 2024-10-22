import './AboutMe.css'; // Create a CSS file for styling
import { faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {FontAwesomeIcon}from "@fortawesome/react-fontawesome";

const AboutMe = () => {
  return (
    <>
    <div className="about-me">
      <div className="profile">
        <img 
          src="../../public/maledemopic.jpeg" 
          alt="Developer" 
          className="profile-picture"
        />
        <h2>Chetan Gupta</h2>
      </div>
      <div className="info">
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate web developer with experience in building dynamic web applications.
          I love creating user-friendly interfaces and ensuring optimal performance. 
          My journey in coding started with a fascination for technology and how it can solve real-world problems.
        </p>
        <p>
          In my spare time, I enjoy learning about new technologies, contributing to open source, and 
          sharing knowledge with fellow developers. Let's connect!
        </p>
        <div className="links">
          <a href="mailto:your-email@example.com" className="link"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a 
            href="https://www.linkedin.com/in/your-linkedin-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link"
          >
           <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
