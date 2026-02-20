import React from "react";

const Topbar = () => {
  return (
    <nav className="topbar">
      <div className="logo">Dessymol Dixon</div>
      <div className="nav-links">
        <a href="#profile">About</a>
        <a href="#work">Projects</a>
        {/* <a href="#curriculum">Resume</a> */}
        <a href="#connect">Contact</a>
      </div>
    </nav>
  );
};

export default Topbar;
