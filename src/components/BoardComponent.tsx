import "./boardComponent.scss";
import React, { useCallback, useEffect, useState } from "react";
import CellComponent from "./CellComponent";
import { labelChars, labelNums } from "../store/initCellState";
import { useTypedSelector } from "../hooks/useTypedSelector";

const BoardComponent = () => {
  const { cells } = useTypedSelector((state) => state.board);

  let [boardSide, setBoardSide] = useState(0);

  let resizeWindow = useCallback((elem) => {
    setBoardSide(
      Math.round(
        (elem.clientWidth > elem.clientHeight
          ? elem.clientHeight
          : elem.clientWidth) * 0.8
      )
    );
  }, []);

  useEffect(() => {
    const boardWrap = document.querySelector(".board-wrap");

    resizeWindow(boardWrap);
    window.addEventListener("resize", () => resizeWindow(boardWrap));

    return () =>
      window.removeEventListener("resize", () => resizeWindow(boardWrap));
  }, [resizeWindow]);

  const horLabels = (
    <div className="hor-label">
      {labelChars.map((char) => (
        <div key={char}>{char}</div>
      ))}
    </div>
  );

  const vertLabels = (
    <div className="vert-label">
      {labelNums.map((char) => (
        <div key={char}>{char}</div>
      ))}
    </div>
  );

  return (
    <div
      className="board"
      style={{ width: `${boardSide}px`, height: `${boardSide}px` }}
    >
      <div></div>
      {horLabels}
      <div></div>
      {vertLabels}
      <div className="cell-area">
        {cells.map((cellsRow) =>
          cellsRow.map((cell) => (
            <CellComponent key={cell.name} curentCell={cell} />
          ))
        )}
      </div>
      {vertLabels}
      <div></div>
      {horLabels}
      <div></div>
    </div>
  );
};

export default BoardComponent;
