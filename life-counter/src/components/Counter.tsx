import { useEffect, useState } from "react";
import { RotateCw, RotateCcw, Settings, X } from "lucide-react";

interface counterProps {
  amountOfPlayers: number;
}

export function Counter({ amountOfPlayers }: counterProps) {
  const [count, setCount] = useState<number>(amountOfPlayers > 2 ? 40 : 20);
  const [settingsIsActive, setSettingsIsActive] = useState(false);
  let [rotateAmount, setRotateAmount] = useState(0);

  useEffect(() => {
    setCount(amountOfPlayers > 2 ? 40 : 20);
  }, [amountOfPlayers]);

  function rotateCounter(direction: string) {
    if (direction === "clockwise") setRotateAmount((rotateAmount += 90));
    else setRotateAmount((rotateAmount -= 90));
  }

  return (
    <div
      style={{
        rotate: `${rotateAmount}deg`,
      }}
      className="counterContainerParent"
    >
      <div className="counterToolbarContainer">
        <div
          style={{ display: settingsIsActive ? "flex" : "none" }}
          className="counterToolBar"
        >
          <button
            onClick={() => rotateCounter("clockwise")}
            className="playerToolBarBtn hoverBtn"
          >
            <RotateCw />
          </button>
          <button
            className="playerToolBarBtn hoverBtn"
            onClick={() => rotateCounter("counterclockwise")}
          >
            <RotateCcw />
          </button>
          <button
            onClick={() => setSettingsIsActive(false)}
            className="playerToolBarBtn hoverBtn"
          >
            <X />
          </button>
        </div>
        <div style={{ display: !settingsIsActive ? "block" : "none" }}>
          <button
            onClick={() => setSettingsIsActive(true)}
            className="playerToolBarBtn hoverBtn"
          >
            <Settings />
          </button>
        </div>
      </div>
      <div className="counterBtnContainer">
        <button
          style={{
            width: amountOfPlayers === 2 ? "20%" : "30%",
          }}
          onClick={() => setCount(count - 1)}
          className="counterBtn hoverBtn"
        >
          - 1
        </button>
        <div className="count">{count}</div>
        <button
          style={{
            width: amountOfPlayers === 2 ? "20%" : "30%",
          }}
          onClick={() => setCount(count + 1)}
          className="counterBtn hoverBtn"
        >
          + 1
        </button>
      </div>
    </div>
  );
}
