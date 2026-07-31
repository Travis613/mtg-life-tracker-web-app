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
    let color = playerColors[Math.floor(Math.random() * playerColors.length)];
    return color;
  }

  function handleChangingPlayerAmounts(newPlayerAmount: number) {
    setPlayerAmount(newPlayerAmount);
  }

  return (
    <div
      style={{
        height: "95dvh",
        width: "95dvw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1%",
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
          gap: "1%",
        }}
        className="counterContainer"
      >
        {playersArray.map((player, index) => (
          <div
            key={index}
            style={{
              height: playerAmount === 3 ? "95%" : "45%",
              width: playerAmount === 2 ? "95%" : "30%",
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
