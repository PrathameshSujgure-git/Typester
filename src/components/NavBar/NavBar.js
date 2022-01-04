import React from "react";
import "./NavBar.css";
// import logo from "./assets/logo.png";

const NavBar = () => {
  return (
    <div className="mainN">
      <img src="./logo.png" alt="Logo" className="Logo" />

      <div className="settings">Settings</div>
    </div>
  );
};

export default NavBar;
