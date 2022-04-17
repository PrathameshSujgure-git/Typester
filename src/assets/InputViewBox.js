import React from "react";
import "./InputViewBox.css";
import { InputDisplayTexts } from "../../global/constants";

const InputViewBox = () => {
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
  const textDisplayElement = document.getElementById("textDisplay");
  const textInputElement = document.getElementById("textInput");
  async function renderNewText() {
    console.log(textDisplayElement);
    const InputDisplayText = InputDisplayTexts[Math.floor(Math.random() * 6)];
    InputDisplayText.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.innerText = char;
      textDisplayElement.appendChild(charSpan);
    });
  }
  renderNewText();

  function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
      .then((response) => response.json())
      .then((data) => data.content);
  }

  async function renderNewQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerHTML = "";
    quote.split("").forEach((character) => {
      const characterSpan = document.createElement("span");
      characterSpan.innerText = character;
      quoteDisplayElement.appendChild(characterSpan);
    });
    quoteInputElement.value = null;
  }

  return (
    <div className="ok">
      <div className="view-port">
        <div className="text-display" id="textDisplay"></div>
        <textarea
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
