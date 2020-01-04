import React, { useState } from "react";
import "./App.css";
import Key from "./components/Key";

const keyboard = ["azertyuiop", "qsdfghjklm", "wxcvbn"];

function App() {
  // On déclare nos states
  const [text, setText] = useState("");
  const [upperCase, setUpperCase] = useState(true);
  const [lockUpperCase, setLockUpperCase] = useState(false);

  // On déclare les lignes du tableau
  const line1 = [];
  const line2 = [];
  const line3 = [];

  function initializeKeyboard() {
    for (let i = 0; i < keyboard[0].length; i++) {
      const currentLetter = keyboard[0][i];
      line1.push(
        <Key
          upperCase={upperCase}
          value={currentLetter}
          onClick={value => {
            addLetter(value);
          }}
        />
      );
    }
    line1.push(
      <Key
        upperCase={upperCase}
        value="DEL"
        onClick={() => {
          deleteLetter();
        }}
      />
    );

    for (let i = 0; i < keyboard[1].length; i++) {
      const currentLetter = keyboard[1][i];
      line2.push(
        <Key
          upperCase={upperCase}
          value={currentLetter}
          onClick={value => {
            addLetter(value);
          }}
        />
      );
    }
    line2.push(
      <Key
        upperCase={upperCase}
        value="ENTER"
        onClick={() => {
          enterLetter();
        }}
      />
    );

    line3.push(
      <Key
        upperCase={upperCase}
        value={"MAJ"}
        isLockUpperCase={lockUpperCase}
        onClick={() => {
          handleUpperCase();
        }}
      />
    );
    for (let i = 0; i < keyboard[2].length; i++) {
      const currentLetter = keyboard[2][i];
      line3.push(
        <Key
          upperCase={upperCase}
          value={currentLetter}
          onClick={value => {
            addLetter(value);
          }}
        />
      );
      if (i === 2) {
        line3.push(
          <Key
            value={"SPACE"}
            onClick={() => {
              addSpace();
            }}
          />
        );
      }
    }
  }

  function addLetter(value) {
    setText(text + value);
    // Ici si on est en uppercase mais pas en lockUpperCase on remet en miniscule
    if (upperCase && !lockUpperCase) setUpperCase(false);
  }

  function deleteLetter() {
    setText(text.substring(0, text.length - 1));
  }

  function addSpace() {
    setText(text + " ");
  }

  function enterLetter() {
    setText(text + "\n");
  }

  function handleUpperCase() {
    if (lockUpperCase) {
      // Ici si on est en lockUpperCase on remet en miniscule
      setLockUpperCase(false);
      setUpperCase(false);
    } else if (upperCase) {
      // Ici si on est en uppercase seulement on le lock
      setLockUpperCase(true);
    } else {
      // sinon on met en uppercase
      setUpperCase(true);
    }
  }

  initializeKeyboard();

  function formatedText() {
    const splitedStr = text.split("\n");
    const formatedText = splitedStr.map((str, i) => {
      return (
        <div>
          {str}
          {text.indexOf("\n") !== -1 && i !== splitedStr.length - 1 && <br />}
        </div>
      );
    });

    return formatedText;
  }

  return (
    <div className="keyboard">
      <div className="textContainer">
        <div className="text">{formatedText()}</div>
        <span className="blink">|</span>
      </div>
      <div className="line">{line1}</div>
      <div className="line">{line2}</div>
      <div className="line">{line3}</div>
    </div>
  );
}

export default App;
