import React from "react";

const Work = () => {
  return (
    <section className="section" id="work">
      <h2 className="section-title">Projects</h2>

      <div className="grid">
        <div className="card">
          <h3>Employee Management System</h3><br/>
          <p> Completed Employee CRUD with EJS and MongoDB operations using MERN stack.</p><br/>
          <p><strong>Tech:</strong> React, Node, Express, MongoDB</p><br/>
          <a href="https://github.com/dessymol/Case-Study-Employee-App.git" target="_blank">GitHub</a>
        </div>

        <div className="card">
          <h3>Blog Application</h3><br/>
          <p>JWT-based user authentication with blog CRUD functionality.</p><br/>
          <p><strong>Tech:</strong> MERN Stack</p><br/>
          <a href="https://github.com/dessymol/Blog-App.git" target="_blank">GitHub</a>
        </div>
         <div className="card">
          <h3>City central Library</h3><br/>
          <p>HTML bsaed library UI designing.</p><br/>
          <p><strong>Tech:</strong>HTML</p><br/>
          <a href="https://github.com/dessymol/City-Central-Library.git" target="_blank">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Work;
