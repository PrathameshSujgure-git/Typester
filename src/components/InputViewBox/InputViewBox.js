import React from "react";
import "./InputViewBox.css";

const InputViewBox = () => {
  const capsIndi = () => {
    // var x = getModifierState("CapsLock");
    console.log("x");
  };
  // const textinput = document.getElementById("text-input");
  // textinput.addEventListener("focus", (e) => {
  //   const capsState = e.getModifierState("CapsLock");
  //   console.log(capsState);
  //   if (capsState === false) {
  //     document.getElementById("CapsLock").classList.toggle("on");
  //   }
  // });
  return (
    <div className="ok">
      <div className="view-port">
        <div className="text-display">
          It is a curious thing, Harry, but perhaps those who are best suited to
          power are those who have never sought it. Those who, like you, have
          leadership thrust upon them, and take up the mantle because they must,
          and find to their own surprise that they wear it well
        </div>

        <textarea
          id="text-input"
          className="view-input"
          placeholder="Lessssssss Gooooooooooo (Start Typing)"
          autoFocus
          onMouseDown={capsIndi()}
        ></textarea>
      </div>
    </div>
  );
};

export default InputViewBox;
