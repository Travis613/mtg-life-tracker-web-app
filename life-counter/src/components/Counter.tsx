import { useEffect, useState } from "react";
import { RotateCw } from "lucide-react";

interface counterProps {
  amountOfPlayers: number;
  background: string;
}

export function Counter({ amountOfPlayers, background }: counterProps) {
  const [count, setCount] = useState<number>(amountOfPlayers > 2 ? 40 : 20);
  const [rotateAmount, setRotateAmount] = useState(0);

  useEffect(() => {
    setCount(amountOfPlayers > 2 ? 40 : 20);
  }, [amountOfPlayers]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: background,
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        fontSize: "75px",
        rotate: `${rotateAmount}deg`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() =>
            rotateAmount === 0 ? setRotateAmount(180) : setRotateAmount(0)
          }
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            border: "solid",
            borderColor: "black",
            color: "black",
            borderRadius: "20%",
          }}
          className="rotateBtn hoverBtn"
        >
          <RotateCw />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{
            width: amountOfPlayers === 2 ? "15%" : "30%",
            height: "100%",
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
            height: "100%",
          }}
          onClick={() => setCount(count + 1)}
          className="counterBtn"
        >
          + 1
        </button>
      </div>
    </div>
  );
}
