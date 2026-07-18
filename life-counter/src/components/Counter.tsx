import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(20);
  return (
    <div
      style={{
        border: "solid",
        width: "fit-content",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <button onClick={() => setCount(count - 1)}>- 1</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  );
}
