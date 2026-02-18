import React from "react";

const Curriculum = () => {
  return (
    <section id="curriculum" className="section resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-container">

        {/* Professional Summary */}
        <div className="resume-block">
          <h3>Professional Summary</h3>
          <p>
            MERN Stack Developer with hands-on experience in building scalable 
            and responsive web applications. Strong knowledge of React.js, 
            Node.js, Express.js, and MongoDB. Focused on writing clean, 
            maintainable code and developing efficient RESTful APIs.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="resume-block">
          <h3>Technical Skills</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript (ES6)</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>Tools:</strong> Git, GitHub, Postman, VS Code</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="resume-block">
          <h3>Projects</h3>

          <h4>Employee Management System</h4>
          <ul>
            <li>Developed CRUD operations for employee data.</li>
            <li>Built RESTful APIs using Express and MongoDB.</li>
          </ul>

          <h4>Blog Application</h4>
          <ul>
            <li>JWT-based authentication system.</li>
            <li>Create, edit, and delete blog functionality.</li>
            <li>Responsive frontend built with React.</li>
          </ul>
        </div>

        {/* Education */}
        <div className="resume-block">
          <h3>Education</h3>
          <p>
           BCA <br />
            UIT College Vakkom <br />
            2020-2023
          </p>
        </div>

      </div>
    </section>
  );
};

export default Curriculum;
