import { useState } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";
import { Counter } from "./components/Counter";
import { ToolBar } from "./components/toolBar";

export default function () {
  const [playerAmount, setPlayerAmount] = useState(2);

  const playersArray = [...Array(playerAmount)];

  const diceOptions = [
    <Dice1 />,
    <Dice2 />,
    <Dice3 />,
    <Dice4 />,
    <Dice5 />,
    <Dice6 />,
  ];

  function rollDice() {
    return diceOptions[Math.floor(Math.random() * diceOptions.length)];
  }

  function applyRandomBackgroundColor() {
    const colors = ["black", "blue", "green", "purple", "red", "yellow"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return `url("/${color}.svg")`;
  }

  function handleChangingPlayerAmounts(newPlayerAmount: number) {
    setPlayerAmount(newPlayerAmount);
  }

  return (
    <div>
      <div>
        <ToolBar
          diceRoll={rollDice}
          changePlayerAmount={handleChangingPlayerAmounts}
        />
      </div>
      <div>
        {playersArray.map((player, index) => (
          <Counter
            amountOfPlayers={playerAmount}
            background={applyRandomBackgroundColor()}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
