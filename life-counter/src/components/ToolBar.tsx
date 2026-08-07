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
      <div
        style={{
          backgroundColor: "#121417",
          display: "flex",
          flexDirection: "row",
          gap: "1%",
        }}
        className="toolbarBtn"
      >
        <div
          style={{
            border: "solid",
            borderRadius: "20%",
            backgroundColor: "white",
          }}
        >
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
        <div
          style={{
            border: "solid",
            borderRadius: "20%",
            backgroundColor: "white",
          }}
        >
          <User
            onClick={() =>
              playerMenu ? setPlayerMenu(false) : setPlayerMenu(true)
            }
            size={32}
          />
        </div>
      </div>
      <div style={{ display: diceVisability ? "block" : "none" }}>
        {diceRoll()}
      </div>

      <div
        style={{
          display: playerMenu ? "flex" : "none",
          flexWrap: "wrap",
          backgroundColor: "white",
          border: "solid",
          borderRadius: "10%",
          height: "55%",
          width: "35%",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
          justifyContent: "center",
          alignItems: "center",
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
      </div>
    </div>
  );
}
