import React from "react";
import "./About.css";

//need to add image here
// left contain profile image
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a year of
              professional experience in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for Frontend Development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to every project.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JavScript</p>
              <hr style={{ width: "80%" }}></hr>
            </div>
            <div className="about-skill">
              <p>ReactJs</p>
              <hr style={{ width: "80%" }}></hr>
            </div>
            <div className="about-skill">
              <p>NextJs</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Project Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
