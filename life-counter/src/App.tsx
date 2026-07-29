import { useState } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";
import { Counter } from "./components/Counter";
import { ToolBar } from "./components/ToolBar";

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
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <ToolBar
          diceRoll={rollDice}
          changePlayerAmount={handleChangingPlayerAmounts}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: playerAmount === 2 ? "column" : "row",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          border: "solid",
          flexWrap: "wrap",
        }}
      >
        {playersArray.map((player, index) => (
          <div
            key={index}
            style={{
              height: playerAmount === 3 ? "100%" : "50%",
              width: playerAmount === 2 ? "100%" : "33.333333333%",
            }}
          >
            <Counter
              amountOfPlayers={playerAmount}
              background={applyRandomBackgroundColor()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
