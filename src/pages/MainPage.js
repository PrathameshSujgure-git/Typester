import React from "react";
import "./MainPage.css";
import NavBar from "../components/NavBar";
import Keyboard from "../components/Keyboard";

const MainPage = () => {
  return (
    <>
      <div>
        <div className="main">
          <div className="bg">
            <NavBar />
            <div className="bg-half"></div>
            <Keyboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
