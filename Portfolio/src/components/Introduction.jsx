import React from "react";
import profileImage from "../assets/profile.jpg";

const Introduction = () => {
  return (
    <section className="section intro">
      <div className="intro-content">
        <div className="intro-text">
          <h1>Dessymol Dixon</h1>
          <h2>MERN Stack Developer</h2>
          <p>
            Passionate full-stack developer specializing in React, Node.js,
            Express, and MongoDB. Focused on building scalable and user-friendly
            web applications.
          </p>

          <div className="buttons">
            <a href="#curriculum" className="primary-btn">
              View Resume
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
