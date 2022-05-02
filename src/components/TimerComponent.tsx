import React from "react";
import { useTimer } from "../hooks/useTimer";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./TimerComponent.scss";

const TimerComponent = () => {
  const { currentPlayer } = useTypedSelector((store) => store.board);
  const tt = useTimer();

  return (
    <div className="timer-wrap">
      <div
        className={[
          "timer",
          "white",
          currentPlayer === "white" ? "active" : "",
        ].join(" ")}
      >
        {tt.white}
      </div>
      <div
        className={[
          "timer",
          "black",
          currentPlayer === "black" ? "active" : "",
        ].join(" ")}
      >
        {tt.black}
      </div>
    </div>
  );
};

export default TimerComponent;
