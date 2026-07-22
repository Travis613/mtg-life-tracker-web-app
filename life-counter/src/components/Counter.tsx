import { useEffect, useState } from "react";

interface counterProps {
  amountOfPlayers: number;
}

export function Counter({ amountOfPlayers }: counterProps) {
  const [count, setCount] = useState<number>(amountOfPlayers > 2 ? 40 : 20);

  useEffect(() => {
    setCount(amountOfPlayers > 2 ? 40 : 20);
  }, [amountOfPlayers]);

  function applyRandomBackgroundColor() {
    const colors = ["black", "blue", "green", "purple", "red", "yellow"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return `url("/${color}.svg")`;
  }

  return (
    <div
      style={{
        backgroundImage: applyRandomBackgroundColor(),
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <button onClick={() => setCount(count - 1)}>- 1</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  );
}
