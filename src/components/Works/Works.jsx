import React, { useContext } from "react";
import "./Works.css";
import react from "../../img/react.png";
import node from "../../img/node.jpg";
import figma from "../../img/figma.png";
import mongodb from "../../img/mongodb.png";
import express from "../../img/express.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills
          </span>
          <span>Overview</span>
          <spane className="para">
          I possess advanced proficiency as a Full Stack web developer, with a diverse skill set<br/>encompassing various technologies such as JavaScript, React.js for front-end <br/> development, and Node.js, Express.js for back-end development. Additionally, I have<br/> considerable expertise in working with databases, specifically MongoDB. My dedication <br/>to continuous learning fuels my motivation to remain well-informed about the latest industry <br/>advancements. By partnering with you, we can convert your concepts into compelling web<br/> solutions that are fully functional and engaging.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img className="react" src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="node" src={node} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="figma" src={figma} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img className="mongodb" src={mongodb} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="express" src={express} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
