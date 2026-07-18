import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(20);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>- 1</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  );
}
