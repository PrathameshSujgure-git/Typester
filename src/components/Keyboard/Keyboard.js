import React from "react";
// import { useEffect, useState } from "react";
import "./Keyboard.css";
import "./KeyboardKey.css";
import {
  NameKeys0,
  NameKeys1,
  NameKeys2,
  NameKeys3,
  NameKeys4,
  NameKeysClass,
} from "../../global/constants";
import KeyboardKey from "./KeyboardKey";

// function useKeyPress(targetKey) {
//   const [keyPressed, setKeyPressed] = useState(false);
//   console.log(keyPressed);
//   function keyDownHandler({ key }) {
//     if (key === targetKey) {
//       setKeyPressed(true);
//     }
//   }
//   function keyUpHandler({ key }) {
//     if (key === targetKey) {
//       setKeyPressed(false);
//     }
//   }
//   useEffect(() => {
//     window.addEventListener("keydown", keyDownHandler);
//     window.addEventListener("keyup", keyUpHandler);

//     return () => {
//       window.removeEventListener("keydown", keyDownHandler);
//       window.removeEventListener("keyup", keyUpHandler);
//     };
//   });

//   return keyPressed;
//   // console.log(keyPressed);
// }

const Keyboard = () => {
  document.addEventListener("keyup", (e) => {
    const keyPressed = e.code;
    const keyElement = document.getElementById(keyPressed);
    keyElement && keyElement.classList.toggle("pressed");
    // console.log(keyElement.classList);
    // console.log(typeof Object.keys(Keys));
  });
  document.addEventListener("keydown", (e) => {
    const keyPressed = e.code;
    // console.log(e.code); //To check code of button pressed
    const keyElement = document.getElementById(keyPressed);
    keyElement && keyElement.classList.toggle("pressed");

    if (keyPressed === "CapsLock") {
      keyElement && keyElement.classList.toggle("on");
    }
    //getmodifierstate
  });

  const generateKeyboard = (objectName) => {
    return Object.keys(objectName).map((k, i) => {
      // console.log(i, k, objectName[k]);
      return (
        <KeyboardKey
          keyClass={NameKeysClass[k]}
          keyID={k}
          key={i}
          keyName={objectName[k]}
        />
      );
    });
  };

  return (
    <div className="keyboard">
      <ul className="row">{generateKeyboard(NameKeys0)}</ul>
      <ul className="row">{generateKeyboard(NameKeys1)}</ul>
      <ul className="row">{generateKeyboard(NameKeys2)}</ul>
      <ul className="row">{generateKeyboard(NameKeys3)}</ul>
      <ul className="row">{generateKeyboard(NameKeys4)}</ul>
    </div>
  );
};

export default Keyboard;
