import React from "react";
import "./KeyboardKey.css";

const KeyboardKey = (props) => {
  return <div id={props.keyID}>{props.keyName}</div>;
};

export default KeyboardKey;
