import React from "react";
import Stats from "../components/Stats";
import "./styles/About.css";
import ReactHtmlParser from 'html-react-parser';
import data from "../data/about/about.json";

const About = (props) => {
  return (
    <div className="about_wrapper">
      <div className="about_text">
        <div  className="about_heading">
          <h1 >About Us</h1>
          {/* <img
            src="logo3-removebg-preview.png"
            alt=""
            className="about_logo"
            style={{padding:0}}
          ></img> */}
        </div>
        <p className="about_content">
          {ReactHtmlParser(data.para_one)}<br /><br />{ReactHtmlParser(data.para_two)}
        </p>
      </div>
      <Stats current={props.current} />
    </div>
  );
};

export default About;
