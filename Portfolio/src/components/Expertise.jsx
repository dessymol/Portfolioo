import React from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiUnity } from "react-icons/si";
import { MdBuild } from "react-icons/md";

const skillGroups = [
  {
    title: "MERN Stack",
    icon: FaReact,
    items: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Game Development",
    icon: SiUnity,
    items: ["Unity Engine", "C# Scripting", "2D & 3D Mechanics", "Physics & Animation"],
  },
  {
    title: "Database",
    icon: SiMongodb,
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: MdBuild,
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

const Expertise = () => {
  return (
    <section className="section light-bg">
      <h2 className="section-title">Technical Skills</h2>

      <div className="grid">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon;

          return (
            <div className="card skill-group" key={group.title}>
              <div className="skill-group-title">
                <GroupIcon className="skill-group-icon" />
                <h3>{group.title}</h3>
              </div>

              <ul className="skill-bullets">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
