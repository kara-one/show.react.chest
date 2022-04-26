import "./boardComponent.scss";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CellComponent from "./CellComponent";
import { labelChars, labelNums } from "../store/initCellState";
import { ICellState } from "../types/cellTypes";
import { useTypedSelector } from "../hooks/useTypedSelector";

const BoardComponent = () => {
  // const cells = useSelector((state: ICellState) => state.cells);
  const { cells } = useTypedSelector((state) => state.cells);
  let [boardSide, setBoardSide] = useState(
    Math.round(
      (window.innerWidth > window.innerHeight
        ? window.innerHeight
        : window.innerWidth) * 0.9
    )
  );

  let resizeWindow = useCallback(() => {
    setBoardSide(
      Math.round(
        (window.innerWidth > window.innerHeight
          ? window.innerHeight
          : window.innerWidth) * 0.9
      )
    );
  }, []);

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
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

  // console.log(state);
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
        {cells.map((cell) => (
          <CellComponent key={cell.name} cell={cell} />
        ))}
      </div>
      {vertLabels}
      <div></div>
      {horLabels}
      <div></div>
    </div>
  );
};

export default BoardComponent;
