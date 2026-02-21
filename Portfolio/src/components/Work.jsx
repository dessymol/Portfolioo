import React from "react";
import { FaBook, FaCodeBranch, FaGithub, FaLaptopCode } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

const Work = () => {
  return (
    <section className="section" id="work">
      <h2 className="section-title">Projects</h2>

      <div className="grid">
        <div className="card">
          <h3 className="project-title"><MdBusinessCenter className="project-icon" />Employee Management System</h3><br/>
          <p>Completed Employee CRUD with EJS and MongoDB operations using MERN stack.</p>
          <p className="project-tech"><FaCodeBranch className="project-mini-icon" /><strong>Tech:</strong> React, Node, Express, MongoDB</p>
          <a href="https://github.com/dessymol/Case-Study-Employee-App.git" target="_blank" rel="noreferrer noopener" className="project-link"><FaGithub className="project-mini-icon" />GitHub</a>
        </div>

        <div className="card">
          <h3 className="project-title"><FaLaptopCode className="project-icon" />Blog Application</h3><br/>
          <p>JWT-based user authentication with blog CRUD functionality.</p>
          <p className="project-tech"><FaCodeBranch className="project-mini-icon" /><strong>Tech:</strong> MERN Stack</p>
          <a href="https://github.com/dessymol/Blog-App.git" target="_blank" rel="noreferrer noopener" className="project-link"><FaGithub className="project-mini-icon" />GitHub</a>
        </div>

        <div className="card">
          <h3 className="project-title"><FaBook className="project-icon" />City Central Library</h3><br/>
          <p>HTML based library UI design project.</p>
          <p className="project-tech"><FaCodeBranch className="project-mini-icon" /><strong>Tech:</strong> HTML</p>
          <a href="https://github.com/dessymol/City-Central-Library.git" target="_blank" rel="noreferrer noopener" className="project-link"><FaGithub className="project-mini-icon" />GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Work;
