import React from "react";
import profileImage from "../assets/profile.jpg";

const Introduction = () => {
  return (
    <section className="section intro">
      <div className="intro-content">
        <div className="intro-text">
          <h1>Dessymol Dixon</h1>
          <h2>Full-Stack & Unity Developer</h2>
         <p>
          Full-stack developer experienced in the MERN stack and Unity 
          game development. I build scalable web applications and 
          interactive real-time experiences using modern technologies.
        </p>

          <div className="buttons">
            <a href="https://www.linkedin.com/in/dessymol-dixon-a56141263" 
        target="_blank"className="secondary-btn" >
             Linkedin
            </a>
            <a href="#connect" className="secondary-btn">
              Contact
            </a>
          </div>
        </div>

        <div className="intro-image">
          <img src={profileImage} alt="Dessymol Dixon" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
