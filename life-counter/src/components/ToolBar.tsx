import { Dices, User } from "lucide-react";
import { useState, type ReactElement } from "react";

interface Props {
  diceRoll: () => ReactElement;
  changePlayerAmount: (playerAmount: number) => void;
}

export function ToolBar({ diceRoll, changePlayerAmount }: Props) {
  const [diceVisability, setDiceVisability] = useState(false);
  const [playerMenu, setPlayerMenu] = useState(false);

  return (
    <div>
      <div style={{ backgroundColor: "white" }}>
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
        {diceRoll()}
      </div>

      <div
        style={{
          display: playerMenu ? "block" : "none",
          border: "solid",
          height: "75px",
          width: "50px",
        }}
      >
        <button onClick={() => (changePlayerAmount(2), setPlayerMenu(false))}>
          2
        </button>
        <button onClick={() => (changePlayerAmount(3), setPlayerMenu(false))}>
          3
        </button>
        <button onClick={() => (changePlayerAmount(4), setPlayerMenu(false))}>
          4
        </button>
        <button onClick={() => (changePlayerAmount(5), setPlayerMenu(false))}>
          5
        </button>
        <button onClick={() => (changePlayerAmount(6), setPlayerMenu(false))}>
          6
        </button>
      </div>
    </div>
  );
}
