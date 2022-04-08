import "./boardComponent.css";
import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CellAction, CellState } from "../type";
import CellComponent from "./CellComponent";
import { labelChars, labelNums } from "../store/initState";

const BoardComponent = () => {
  const dispatch: Dispatch<CellAction> = useDispatch();
  const cells = useSelector((state: CellState) => state.cells);

  const horLabels = (
    <div className="hor-label">
      {labelChars.map((char) => (
        <div>{char}</div>
      ))}
    </div>
  );

  const vertLabels = (
    <div className="vert-label">
      {labelNums.map((char) => (
        <div>{char}</div>
      ))}
    </div>
  );

  // console.log(state);
  return (
    <div className="board">
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
