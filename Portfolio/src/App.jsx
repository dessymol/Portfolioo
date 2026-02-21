import React from "react";
import Introduction from "./components/Introduction";
import Profile from "./components/Profile";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Connect from "./components/Connect";
import "./App.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Introduction />
      <Profile />
      <Expertise />
      <Work />
      <Connect />
      <Footer />
      <Topbar />
    </div>
  );
}

export default App;
