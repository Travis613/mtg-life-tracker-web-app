import { useState } from "react";
import {
  Dices,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  User,
} from "lucide-react";
import { Counter } from "./components/Counter";

export default function () {
  const [diceVisability, setDiceVisability] = useState(false);
  const [playerMenu, setPlayerMenu] = useState(false);
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

  return (
    <div>
      <div>
        <Dices
          onClick={() => (
            setDiceVisability(true),
            setTimeout(() => {
              setDiceVisability(false);
            }, 750)
          )}
        />
        <User
          onClick={() =>
            playerMenu ? setPlayerMenu(false) : setPlayerMenu(true)
          }
        />
      </div>

      <div style={{ display: diceVisability ? "block" : "none" }}>
        {rollDice()}
      </div>

      <div
        style={{
          display: playerMenu ? "block" : "none",
          border: "solid",
          height: "75px",
          width: "50px",
        }}
      >
        <button onClick={() => (setPlayerAmount(2), setPlayerMenu(false))}>
          2
        </button>
        <button onClick={() => (setPlayerAmount(3), setPlayerMenu(false))}>
          3
        </button>
        <button onClick={() => (setPlayerAmount(4), setPlayerMenu(false))}>
          4
        </button>
        <button onClick={() => (setPlayerAmount(5), setPlayerMenu(false))}>
          5
        </button>
        <button onClick={() => (setPlayerAmount(6), setPlayerMenu(false))}>
          6
        </button>
      </div>

      <div>
        <Counter amountOfPlayers={playerAmount} />
        <Counter amountOfPlayers={playerAmount} />
        <div style={{ display: playerAmount > 2 ? "block" : "none" }}>
          <Counter amountOfPlayers={playerAmount} />
        </div>
        <div style={{ display: playerAmount > 3 ? "block" : "none" }}>
          <Counter amountOfPlayers={playerAmount} />
        </div>
        <div style={{ display: playerAmount > 4 ? "block" : "none" }}>
          <Counter amountOfPlayers={playerAmount} />
        </div>
        <div style={{ display: playerAmount > 5 ? "block" : "none" }}>
          <Counter amountOfPlayers={playerAmount} />
        </div>
      </div>
    </div>
  );
}
