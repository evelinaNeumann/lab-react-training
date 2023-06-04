import React, { useState } from "react";
import emptyDiceImage from "../assets/assets/dice-empty.png";
import dice1Image from "../assets/assets/dice1.png";
import dice2Image from "../assets/assets/dice2.png";
import dice3Image from "../assets/assets/dice3.png";
import dice4Image from "../assets/assets/dice4.png";
import dice5Image from "../assets/assets/dice5.png";
import dice6Image from "../assets/assets/dice6.png";

const diceImages = [
  emptyDiceImage,
  dice1Image,
  dice2Image,
  dice3Image,
  dice4Image,
  dice5Image,
  dice6Image,
];

function Dice() {
  const [diceValue, setDiceValue] = useState(0);

  const rollDice = () => {
    setDiceValue(0); // Display empty picture
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1; // Generate random dice value from 1 to 6
      setDiceValue(randomValue);
    }, 1000);
  };

  return (
    <img
      src={diceImages[diceValue]}
      alt="Dice"
      onClick={rollDice}
      style={{ width: "100px" }}
    />
  );
}

export default Dice;
