import React from "react";

const certificates = [
  {
    title: "Full-Stack Web Developer LinkedIn Learning Course",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5awh5wQuZfpmwuwVXE-jIq607mEcAP9X0CA&s",
    links: [
      {
        label: "LinkedIn Certificate",
        url: "https://www.linkedin.com/learning/certificates/30f4217e1179a296bedb558df51af6c17ab76da206d1737e84622502e414174f?trk=share_certificate",
      },
      {
        label: "CompTIA Certificate",
        url: "https://www.linkedin.com/learning/certificates/af0607e1efc47a9132ed63b52ea55796a03f986f4bc061f9e517c206c7a447b7?trk=share_certificate",
      },
    ],
  },
  {
    title: "Google Docs Essential Training LinkedIn Learning Course",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5awh5wQuZfpmwuwVXE-jIq607mEcAP9X0CA&s",
    links: [
      {
        label: "LinkedIn Certificate",
        url: "https://www.linkedin.com/learning/certificates/a6e31f18c1b7d5abbe96463cd232db6b650df171dfbf3e4e66f41f1543afe3f3?trk=share_certificate",
      },
      {
        label: "NASBA Certificate",
        url: "https://www.linkedin.com/learning/certificates/71a3313089aae605e7fa207b4b40e10a16e44eb02cdf45b45748449645a51229?trk=share_certificate",
      },
    ],
  },
  {
    title: "React Essential Training LinkedIn Learning Course",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5awh5wQuZfpmwuwVXE-jIq607mEcAP9X0CA&s",
    links: [
      {
        label: "LinkedIn Certificate",
        url: "https://www.linkedin.com/learning/certificates/38a2d958549fff0058a9a39d3edea5970172fd048d3d8555dcf6908f5a82c763?trk=share_certificate",
      },
    ],
  },
];

const Profile = () => {
  return (
    <section className="section" id="profile">
      <h2 className="section-title">About Me</h2>

      <p className="section-text">
         I am a Full-Stack Developer specializing in the MERN stack and Unity game development. 
         I have built scalable web applications such as an Employee Management System, Blog Platform, 
         and Movie Application using REST APIs and MongoDB.

        <br /><br />

         Alongside web development, I design and develop interactive experiences using Unity and C#. 
         I am passionate about building clean, maintainable systems and continuously improving 
         my backend architecture, real-time systems, and game logic design skills.
      </p>

      <div className="profile-layout">
        <div className="card">
          <h3>Education</h3><br/>
           <p>+2</p>
          <p>Computer science</p>
          <p>GHSS Attingal</p><br/>
          <p>BCA</p>
          <p>UIT COLLEGE VAKKOM</p>
          <p>2020 - 2023</p><br/>
          <p>Unity Engine</p>
         <p>C# Scripting</p>
         <p>2D & 3D Game Mechanics</p>
         <p>Physics & Animation Systems</p>
         
        </div>

        <div className="card">
          <h3>Certificates</h3>
          <div className="certificate-list">
            {certificates.map((certificate) => (
              <article className="certificate-item" key={certificate.title}>
                <img className="certificate-image" src={certificate.image} alt={certificate.title} />

                <div className="certificate-content">
                  <p className="certificate-title">{certificate.title}</p>
                  <div className="certificate-links">
                    {certificate.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noreferrer noopener">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
