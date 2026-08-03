import { useEffect, useState } from "react";

interface counterProps {
  amountOfPlayers: number;
  background: string;
}

export function Counter({ amountOfPlayers, background }: counterProps) {
  const [count, setCount] = useState<number>(amountOfPlayers > 2 ? 40 : 20);

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
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "75px",
      }}
    >
      <button
        style={{
          backgroundColor: "lightcoral",
          width: amountOfPlayers === 2 ? "15%" : "30%",
          height: amountOfPlayers === 3 ? "15%" : "30%",
        }}
        onClick={() => setCount(count - 1)}
        className="counterBtn"
      >
        - 1
      </button>
      <div className="count">{count}</div>
      <button
        style={{
          backgroundColor: "lightgreen",
          width: amountOfPlayers === 2 ? "15%" : "30%",
          height: amountOfPlayers === 3 ? "15%" : "30%",
        }}
        onClick={() => setCount(count + 1)}
        className="counterBtn"
      >
        + 1
      </button>
    </div>
  );
}
