import React, { useState, useEffect } from "react";
import "./InputViewBox.css";
import { InputDisplayTexts } from "../../global/constants";
import KAudio1 from "../../assets/audio/k1(1).mp3";
import KAudio2 from "../../assets/audio/k2(1).mp3";
import KAudio3 from "../../assets/audio/k3(1).mp3";
import KAudio4 from "../../assets/audio/k4(1).mp3";
import KAudio5 from "../../assets/audio/k5(1).mp3";
import KAudio6 from "../../assets/audio/k6(1).mp3";
import KAudio7 from "../../assets/audio/k7(1).mp3";
import KAudio8 from "../../assets/audio/k8(1).mp3";
import KAudio9 from "../../assets/audio/k9(1).mp3";
import KAudio10 from "../../assets/audio/k10(1).mp3";
import KAudio11 from "../../assets/audio/k11(1).mp3";
import KAudio12 from "../../assets/audio/k12(1).mp3";
import KAudio13 from "../../assets/audio/k13(1).mp3";
import ErrorAudio from "../../assets/audio/error.mp3";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

const KAudioArray = [
  // KAudio1,
  // KAudio2,
  // KAudio3,
  // KAudio4,
  // KAudio5,
  // KAudio6,
  // KAudio7,
  // KAudio8,
  KAudio9,
  KAudio10,
  KAudio11,
  KAudio12,
  KAudio13,
];
// const KAudioArray2 = [
//   KAudio1,
//   KAudio2,
//   // KAudio3,
//   // KAudio4,
//   KAudio5,
//   KAudio6,
//   KAudio7,
//   KAudio8,
//   // KAudio9,
//   // KAudio10,
//   // KAudio11,
//   // KAudio12,
//   // KAudio13,
// ];

const InputViewBox = () => {
  const [value, setValue] = useState(Math.floor(Math.random() * 6));
  const [length, setLength] = useState(0);

  // useEffect(() => {
  //   console.log(value);
  // });
  // const capsIndi = () => {
  //   var x = getModifierState("CapsLock");
  //   console.log("x");
  // };
  // const textinput = document.getElementById("text-input");
  // textinput.addEventListener("focus", (e) => {
  //   const capsState = e.getModifierState("CapsLock");
  //   console.log(capsState);
  //   if (capsState === false) {
  //     document.getElementById("CapsLock").classList.toggle("on");
  //   }
  // });

  const renderNewQuote = (i = 0) => {
    if (i === -1 && value === 0) {
      setValue(InputDisplayTexts.length - 1);
    } else if (i === 1 && value === InputDisplayTexts.length - 1) {
      setValue(0);
    } else setValue(value + i);
    const quoteDisplayElement = document.getElementById("textDisplay");
    const quoteInputElement = document.getElementById("textInput");
    const quote = InputDisplayTexts[value];
    quoteDisplayElement.innerHTML = "";
    quote.split("").forEach((char) => {
      const charSpan = document.createElement("span");

      charSpan.innerText = char;
      quoteDisplayElement.appendChild(charSpan);
    });
    quoteInputElement.value = null;
  };
  useEffect(() => {
    const renderNewQuote = (i = 0) => {
      if (i === -1 && value === 0) {
        setValue(InputDisplayTexts.length - 1);
      } else if (i === 1 && value === InputDisplayTexts.length - 1) {
        setValue(0);
      } else setValue(value + i);
      const quoteDisplayElement = document.getElementById("textDisplay");
      const quoteInputElement = document.getElementById("textInput");
      const quote = InputDisplayTexts[value];
      quoteDisplayElement.innerHTML = "";
      quote.split("").forEach((char) => {
        const charSpan = document.createElement("span");

        charSpan.innerText = char;
        quoteDisplayElement.appendChild(charSpan);
      });
      quoteInputElement.value = null;
    };
    renderNewQuote();
    document.getElementById("button").click();
  }, []);

  const checkText = () => {
    const quoteList = [],
      ipList = [];

    // console.log(a);
    // console.log(b);
    let correct = true;
    const quoteDisplayElement = document.getElementById("textDisplay");
    const quoteInputElement = document.getElementById("textInput");
    const arrayQuote = quoteDisplayElement.querySelectorAll("span");
    const arrayValue = quoteInputElement.value.split("");

    arrayQuote.forEach((charSpan, index, arr) => {
      const char = arrayValue[index];
      console.log(arrayValue[index - 1]);

      if (char == null) {
        charSpan.classList.add("current");
        charSpan.classList.remove("correct");
        charSpan.classList.remove("incorrect");
        correct = false;
      } else if (char === charSpan.innerText) {
        charSpan.classList.remove("current");
        charSpan.classList.add("correct");
        charSpan.classList.remove("incorrect");
        quoteList.push(char);
        ipList.push(charSpan.innerText);
      } else {
        charSpan.classList.remove("current");
        charSpan.classList.remove("correct");
        charSpan.classList.add("incorrect");
        quoteList.push("!");
        ipList.push(charSpan.innerText);
        correct = false;
      }
      if (arrayValue[index - 1] == null) {
        charSpan.classList.remove("current");
      }
    });

    if (correct) renderNewQuote(1);

    if (quoteInputElement.value.length < length) {
      // console.log("bspce");
      var audioElement1 = new Audio(KAudio4);
      audioElement1.play();
    } else if (quoteList[quoteList.length - 1] === "!") {
      var audioElement2 = new Audio(ErrorAudio);
      audioElement2.play();
    } else if (quoteList[quoteList.length - 1] === " ") {
      var audioElement3 = new Audio(KAudio3);
      audioElement3.play();
    } else {
      var audioElement4 = new Audio(KAudioArray[Math.floor(Math.random() * 5)]);
      // var audioElement = new Audio(KAudio9);
      audioElement4.play();
    }
    setLength(quoteInputElement.value.length);
  };

  const checkArrow = (e) => {
    console.log(e.keyCode);
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  };

  return (
    <div className="ok">
      <div className="view-port">
        <div className="view-box">
          <button onClick={() => renderNewQuote(-1)}> -1 </button>
          <div className="text-display" id="textDisplay"></div>{" "}
          <button
            id="button"
            onClick={() => {
              renderNewQuote(1);
            }}
          >
            +1
          </button>
        </div>
        <textarea
          onChange={() => {
            checkText();
          }}
          onKeyDown={(e) => {
            checkArrow(e);
          }}
          id="textInput"
          className="view-input"
          placeholder="Lessssssss Gooooooooooo (Start Typing)"
          autoFocus
          // onMouseDown={capsIndi()}
        ></textarea>
      </div>
    </div>
  );
};

export default InputViewBox;
