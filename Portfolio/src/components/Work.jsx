import React from "react";

const Work = () => {
  return (
    <section className="section" id="work">
      <h2 className="section-title">Projects</h2>

      <div className="grid">
        <div className="card">
          <h3>Employee Management System</h3>
          <p> Completed Employee CRUD with EJS and MongoDB operations using MERN stack.</p>
          <p><strong>Tech:</strong> React, Node, Express, MongoDB</p>
          <a href="https://github.com/dessymol/Case-Study-Employee-App.git" target="_blank">GitHub</a>
        </div>

        <div className="card">
          <h3>Blog Application</h3>
          <p>JWT-based user authentication with blog CRUD functionality.</p>
          <p><strong>Tech:</strong> MERN Stack</p>
          <a href="https://github.com/dessymol/Blog-App.git" target="_blank">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Work;
