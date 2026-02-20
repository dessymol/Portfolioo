import React from "react";

const Profile = () => {
  return (
    <section className="section" id="profile">
      <h2 className="section-title">About Me</h2>
      <p className="section-text">
        I am a MERN Stack Developer with hands-on experience in building
        full-stack web applications. I have developed projects including an
        Employee Management System, Blog Platform, and Movie Application using
        REST APIs and MongoDB.
        <br /><br />
        I am focused on writing clean, maintainable code and continuously
        improving my backend architecture and system design skills.
      </p><br/><br/>
      <div>
      <div className="grid" >
        <div className="card">
          <h3>Education</h3>
          <p>BCA</p>
          <p>UIT COLLEGE VAKKOM</p>
          <p>2020-2023</p><br/>
          <h3>Certificates</h3>
          <p>Full-Stack Web Develpoer Linkedin lernig cousre</p>
           <a href="https://www.linkedin.com/learning/certificates/30f4217e1179a296bedb558df51af6c17ab76da206d1737e84622502e414174f?trk=share_certificate" target="_blank">Linkedin Certificate</a><br/>
           <a href="https://www.linkedin.com/learning/certificates/af0607e1efc47a9132ed63b52ea55796a03f986f4bc061f9e517c206c7a447b7?trk=share_certificate" target="_blank">CompTIA Certificate</a><br/>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5awh5wQuZfpmwuwVXE-jIq607mEcAP9X0CA&s"/>
          <p>Google Docs Essential Trainig Linkedin lernig cousre</p>
           <a href="https://www.linkedin.com/learning/certificates/a6e31f18c1b7d5abbe96463cd232db6b650df171dfbf3e4e66f41f1543afe3f3?trk=share_certificate" target="_blank">Linkedin Certificate</a><br/>
           <a href="https://www.linkedin.com/learning/certificates/71a3313089aae605e7fa207b4b40e10a16e44eb02cdf45b45748449645a51229?trk=share_certificate" target="_blank">NASBA Certificate</a><br/>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5awh5wQuZfpmwuwVXE-jIq607mEcAP9X0CA&s"/>
          <p>React Essential trainig lernig cousre</p>
           <a href="https://www.linkedin.com/learning/certificates/38a2d958549fff0058a9a39d3edea5970172fd048d3d8555dcf6908f5a82c763?trk=share_certificate" target="_blank">Linkedin Certificate</a><br/>
        </div>
       </div>
       </div>
    </section>
  );
};

export default Profile;
