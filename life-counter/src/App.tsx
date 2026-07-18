import { Counter } from "./components/Counter";
import { Dices, User, RefreshCw, Heart } from "lucide-react";

export default function () {
  return (
    <div>
      <div className="settings-bar">
        <Dices />
        <User />
        <RefreshCw />
        <Heart />
      </div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
