import { useEffect, useState } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";
import { Counter } from "./components/Counter";
import { ToolBar } from "./components/ToolBar";

export default function () {
  const [playerAmount, setPlayerAmount] = useState(2);

  useEffect(() => {
    isPortraitMode();
  }, []);

  const playersArray = [...Array(playerAmount)];

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

  const diceOptions = [
    <Dice1 className="dice" />,
    <Dice2 className="dice" />,
    <Dice3 className="dice" />,
    <Dice4 className="dice" />,
    <Dice5 className="dice" />,
    <Dice6 className="dice" />,
  ];

  function rollDice() {
    return diceOptions[Math.floor(Math.random() * diceOptions.length)];
  }

  function handleChangingPlayerAmounts(newPlayerAmount: number) {
    setPlayerAmount(newPlayerAmount);
  }

  function isPortraitMode() {
    let deviceOrientation = window.matchMedia("(orientation: portrait)");
    if (deviceOrientation.matches) {
      return true;
    }
    return false;
  }

  return (
    <div
      style={{
        height: "95dvh",
        width: "100%",
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
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1%",
        }}
        className="counterContainer"
      >
        {playersArray.map((_player, index) => (
          <div
            key={index}
            style={{
              //height: (playerAmount > 4 && isPortraitMode() ? "30%" : "45%"),
              height: isPortraitMode()
                ? playerAmount > 4
                  ? "30%"
                  : "45%"
                : "35%",
              width: playerAmount === 2 ? "95%" : "45%",
              backgroundColor: playerColors[index],
            }}
          >
            <Counter amountOfPlayers={playerAmount} />
          </div>
        ))}
      </div>
    </div>
  );
}
