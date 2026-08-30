import { Dices, User, X } from "lucide-react";
import { useState, type ReactElement } from "react";
import { PlayerSelectingBtn } from "./playerSelectingBtn";

interface Props {
  diceRoll: () => ReactElement;
  changePlayerAmount: (playerAmount: number) => void;
}

export function ToolBar({ diceRoll, changePlayerAmount }: Props) {
  const [diceVisability, setDiceVisability] = useState(false);
  const [playerMenu, setPlayerMenu] = useState(false);

  const playerBtnChoices = [2, 3, 4, 5, 6, "Close"];

  function handlePlayerSelectingBtnClicks(choice: string | number) {
    if (typeof choice === "number") {
      changePlayerAmount(choice);
      setPlayerMenu(false);
    }
    setPlayerMenu(false);
  }

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
        {playerBtnChoices.map((choice) => (
          <PlayerSelectingBtn
            handleClicks={() => handlePlayerSelectingBtnClicks(choice)}
            btnText={choice}
          />
        ))}
      </div>
    </div>
  );
}
