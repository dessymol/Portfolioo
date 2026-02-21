import React from "react";

const Expertise = () => {
  return (
    <section className="section light-bg">
      <h2 className="section-title">Technical Skills</h2>

      <div className="grid">

      <div className="card">
          <h3>MERN Stack</h3>
          <p>MongoDB</p>
          <p>Express.js</p>
          <p>React.js</p>
          <p>Node.js</p>
       </div>

      <div className="card">
         <h3>Game Development</h3>
         <p>Unity</p>
        <p>C#</p>
        </div>

     <div className="card">
        <h3>Database</h3>
        <p>MongoDB</p>
       <p>MySQL</p>
    </div>

     <div className="card">
       <h3>Tools</h3>
       <p>Git & GitHub</p>
       <p>Postman</p>
       <p>VS Code</p>
    </div>

  </div>
    </section>
  );
};

export default Expertise;
