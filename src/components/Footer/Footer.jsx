import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Footer = () => {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? "darkfooter" : "footer"}>
      {/* <img alt="" style={{ width: "100%" }} /> */}
      <div className="f-content">
        <span>guptarahul1479@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/geek-Rahul"><Gitub color="white" size={"2rem"} /></a>
          <a href="https://www.linkedin.com/in/rahul-gupta-28241a263"><LinkedIn color="white" size={"2rem"} /></a>
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
