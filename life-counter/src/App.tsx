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
    const playerColors = [
      "#7C3AED",
      "#2563EB",
      "#059669",
      "#DC2626",
      "#D97706",
      "#0891B2",
      "#DB2777",
      "#4B5563",
    ];
    const color = playerColors[Math.floor(Math.random() * playerColors.length)];
    return color;
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
        className="counterContainer"
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
