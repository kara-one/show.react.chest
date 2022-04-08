import "./boardComponent.css";
import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CellAction, CellState } from "../type";
import CellComponent from "./CellComponent";

const BoardComponent = () => {
  const dispatch: Dispatch<CellAction> = useDispatch();
  const cells = useSelector((state: CellState) => state.cells);

  const horLabels = (
    <div className="hor-label">
      <div>A</div>
      <div>B</div>
      <div>C</div>
      <div>D</div>
      <div>E</div>
      <div>F</div>
      <div>G</div>
      <div>H</div>
    </div>
  );

  const vertLabels = (
    <div className="vert-label">
      <div>8</div>
      <div>7</div>
      <div>6</div>
      <div>5</div>
      <div>4</div>
      <div>3</div>
      <div>2</div>
      <div>1</div>
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
