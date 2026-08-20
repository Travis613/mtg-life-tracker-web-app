import { Dices, User, X } from "lucide-react";
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
      <div className="toolbarBtn">
        <div style={{}} className="diceBtnContainer">
          <Dices
            onClick={() => (
              setDiceVisability(true),
              setTimeout(() => {
                setDiceVisability(false);
              }, 750)
            )}
            size={32}
          />
        </div>
        <div className="dropdownPlayerSelectingBtn">
          {playerMenu !== true ? (
            <User onClick={() => setPlayerMenu(true)} size={32} />
          ) : (
            <X onClick={() => setPlayerMenu(false)} size={32} />
          )}
        </div>
      </div>
      <div style={{ display: diceVisability ? "block" : "none" }}>
        {diceRoll()}
      </div>

      <div
        className="dropdownPlayerMenu"
        style={{
          display: playerMenu ? "flex" : "none",
        }}
      >
        <button
          onClick={() => (changePlayerAmount(2), setPlayerMenu(false))}
          className="playerSelectingBtn"
        >
          2
        </button>
        <button
          onClick={() => (changePlayerAmount(3), setPlayerMenu(false))}
          className="playerSelectingBtn"
        >
          3
        </button>
        <button
          onClick={() => (changePlayerAmount(4), setPlayerMenu(false))}
          className="playerSelectingBtn"
        >
          4
        </button>
        <button
          onClick={() => (changePlayerAmount(5), setPlayerMenu(false))}
          className="playerSelectingBtn"
        >
          5
        </button>
        <button
          onClick={() => (changePlayerAmount(6), setPlayerMenu(false))}
          className="playerSelectingBtn"
        >
          6
        </button>
        <button
          onClick={() => setPlayerMenu(false)}
          className="playerSelectingBtn"
          style={{ backgroundColor: "lightcoral" }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
