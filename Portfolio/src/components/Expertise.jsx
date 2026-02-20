import React from "react";

const Expertise = () => {
  return (
    <section className="section light-bg">
      <h2 className="section-title">Technical Skills</h2>

      <div className="grid">
        <div className="card">
          <h3>Frontend</h3>
          <p>React.js</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>JavaScript (ES6)</p>
          <p>C#</p>
        </div>

        <div className="card">
          <h3>Backend</h3>
          <p>Node.js</p>
          <p>Express.js</p>
        </div>

        <div className="card">
          <h3>Database</h3>
          <p>MongoDB</p>
          <p>My SQl</p>
        </div>

        <div className="card">
          <h3>Tools</h3>
          <p>Git & GitHub</p>
          <p>Postman</p>
          <p>VS Code</p>
          <p>Unity</p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
