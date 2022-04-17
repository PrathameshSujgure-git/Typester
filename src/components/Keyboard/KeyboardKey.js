import React from "react";
import "./KeyboardKey.css";

const KeyboardKey = (props) => {
  return (
    <li className={props.keyClass} id={props.keyID}>
      {props.keyName}
    </li>
  );
};

export default KeyboardKey;
