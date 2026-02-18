import React from "react";
import Introduction from "./components/Introduction";
import Profile from "./components/Profile";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Curriculum from "./components/Curriculum";
import Connect from "./components/Connect";
import "./App.css";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="app">
      <Introduction />
      <Profile />
      <Expertise />
      <Work />
      <Curriculum />
      <Connect />
      <Topbar/>
    </div>
  );
}

export default App;
