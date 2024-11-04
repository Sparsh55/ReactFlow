import "./AboutMe.css"; // Create a CSS file for styling
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
  return (
    <>
      <div className="info">
        <h1>--About This Project--</h1>
        <div
          style={{
            backgroundColor: "#FFFDD0",
            borderRadius: "12px",
            padding: "12px",
            marginLeft: "2px",
            marginRight: "10px",
          }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum sint
            ipsum tempore. Sit placeat eaque, sequi maiores obcaecati magnam,
            quis commodi sunt suscipit dicta, eius corrupti repellat animi
            numquam nulla! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eligendi nesciunt fuga ducimus, quibusdam repudiandae dolorum
            repellat, quam rerum magnam, molestiae animi tempora velit excepturi
            consequuntur aperiam voluptates! Quod, et vel.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            quam, minus numquam modi illo id earum sunt repellendus mollitia est
            cum. Optio dolorem consectetur quos iusto similique unde fuga
            temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum dolore, iure laborum dolor praesentium eligendi at ea
            vero est neque in obcaecati quos a molestias eveniet commodi
            distinctio debitis ipsum.
          </p>
        </div>
      </div>
      <footer
        style={{
          width: "100vw",
          height: "150px",
          backgroundColor: "#002D62",
          marginTop: "110px",
        }}
      >
        <p style={{ color: "white", textAlign: "center", paddingTop: "30px" }}>
          Designed and developed by Chetan Gupta , 2023, for Ford Motors Company
          India , All right reserved!
        </p>
        <p style={{ color: "white", textAlign: "center", marginTop: "-17px" }}>
          {" "}
          Learn More @<a href="https://www.ford.com/">https://www.ford.com</a>
        </p>
      </footer>
    </>
  );
};

export default AboutMe;
