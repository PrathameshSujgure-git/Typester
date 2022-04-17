import React, { useEffect } from "react";
import "./MainPage.css";
import NavBar from "../components/NavBar";
import Keyboard from "../components/Keyboard";
import InputViewBox from "../components/InputViewBox/InputViewBox";

const MainPage = () => {
  return (
    <>
      <div>
        <div className="main">
          <div className="bg">
            <NavBar />

            <div className="bg-half"></div>
            <InputViewBox />
            <Keyboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
