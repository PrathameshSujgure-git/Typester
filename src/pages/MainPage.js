import React from "react";
import "./MainPage.css";
import NavBar from "../components/NavBar";

const MainPage = () => {
  return (
    <>
      <div>
        <div className="main">
          <div className="bg">
            <NavBar />
            <div className="bg-half"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
