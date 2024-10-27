import "./AboutMe.css"; // Create a CSS file for styling
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
  return (
    <>
      <div className="info">
        <h1>--About This Project--</h1>
        <div style={{backgroundColor:"#FFFDD0",borderRadius:"12px",padding:"12px",marginLeft:"2px",marginRight:"10px"}}>
        <p >
          Hello! I'm a passionate web developer with experience in building
          dynamic web applications. I love creating user-friendly interfaces and
          ensuring optimal performance. My journey in coding started with a
          fascination for technology and how it can solve real-world problems.
        </p>
        <p>
          In my spare time, I enjoy learning about new technologies,
          contributing to open source, and sharing knowledge with fellow
          developers. Let's connect!
        </p>
        </div>
      </div>
      <footer
        style={{
          width: "100vw",
          height: "150px",
          backgroundColor: "#002D62",
          marginTop:"150px"
        }}
      >
        <p style={{ color: "white", textAlign: "center", paddingTop: "30px" }}>
          Designed and developed by Chetan Gupta , 2023, for Ford Motors Company
          India , All right reserved!
        </p>
        <p style={{color: "white", textAlign: "center", marginTop: "-17px"}}> Learn More @<a  href = "https://www.ford.com/">https://www.ford.com</a></p>
      </footer>
    </>
  );
};

export default AboutMe;
