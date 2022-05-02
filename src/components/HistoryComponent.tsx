import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./HistoryComponent.scss";
import TimerComponent from "./TimerComponent";

const HistoryComponent = () => {
  const { history } = useTypedSelector((store) => store.board);

  return (
    <div className="history">
      <TimerComponent />
      <div className="history-list">
        <h3>History</h3>
        <ol>
          {history.map((row, id) => (
            <li key={id}>
              {row.white} {row.black}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default HistoryComponent;
