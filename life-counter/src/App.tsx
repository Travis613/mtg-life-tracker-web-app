import { useState } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";
import { Counter } from "./components/Counter";
import { ToolBar } from "./components/toolBar";

export default function () {
  const [playerAmount, setPlayerAmount] = useState(2);

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
    console.log("clicked me");
    console.log(newPlayerAmount);
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
        <Counter
          amountOfPlayers={playerAmount}
          background={applyRandomBackgroundColor()}
        />
        <Counter
          amountOfPlayers={playerAmount}
          background={applyRandomBackgroundColor()}
        />
        <div style={{ display: playerAmount > 2 ? "block" : "none" }}>
          <Counter
            amountOfPlayers={playerAmount}
            background={applyRandomBackgroundColor()}
          />
        </div>
        <div style={{ display: playerAmount > 3 ? "block" : "none" }}>
          <Counter
            amountOfPlayers={playerAmount}
            background={applyRandomBackgroundColor()}
          />
        </div>
        <div style={{ display: playerAmount > 4 ? "block" : "none" }}>
          <Counter
            amountOfPlayers={playerAmount}
            background={applyRandomBackgroundColor()}
          />
        </div>
        <div style={{ display: playerAmount > 5 ? "block" : "none" }}>
          <Counter
            amountOfPlayers={playerAmount}
            background={applyRandomBackgroundColor()}
          />
        </div>
      </div>
    </div>
  );
}
