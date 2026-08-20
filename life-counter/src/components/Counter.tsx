import { useEffect, useState } from "react";
import { RotateCw, RotateCcw } from "lucide-react";

interface counterProps {
  amountOfPlayers: number;
}

export function Counter({ amountOfPlayers }: counterProps) {
  const [count, setCount] = useState<number>(amountOfPlayers > 2 ? 40 : 20);
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
        <button
          onClick={() => rotateCounter("clockwise")}
          className="rotateBtn hoverBtn"
        >
          <RotateCw />
        </button>
        <button
          className="rotateBtn hoverBtn"
          onClick={() => rotateCounter("counterclockwise")}
        >
          <RotateCcw />
        </button>
      </div>
      <div className="counterBtnContainer">
        <button
          style={{
            width: amountOfPlayers === 2 ? "15%" : "30%",
          }}
          onClick={() => setCount(count - 1)}
          className="counterBtn hoverBtn"
        >
          - 1
        </button>
        <div className="count">{count}</div>
        <button
          style={{
            width: amountOfPlayers === 2 ? "15%" : "30%",
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
