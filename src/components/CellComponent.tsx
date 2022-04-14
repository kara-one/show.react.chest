import React, { Dispatch, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CellAction, CellActions, CellState, ICell } from "../types/cell";
import "./cellComponent.scss";

interface CellProps {
  cell: ICell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
  const dispatch: Dispatch<CellAction> = useDispatch();
  const selectCell = useSelector((state: CellState) => state.selectCell);

  const cellClasses = ["cell"];

  cellClasses.push(`x${cell.x.toString()}`);
  cellClasses.push(`y${cell.y.toString()}`);

  if ((cell.x + cell.y) % 2 === 0) {
    cellClasses.push("dark");
  } else {
    cellClasses.push("light");
  }

  if (cell.figure) {
    cellClasses.push(cell.figure.color);
    cellClasses.push(cell.figure.name);
  }

  if (cell.selected) {
    cellClasses.push("highlight");
  }

  if (cell.available) {
    cellClasses.push("hint");
  }

  function cellClick() {
    // console.log(cell);
    if (selectCell) {
      dispatch({ type: CellActions.MOVE_FIGURE, cell });
      dispatch({ type: CellActions.CLEAN_AVAILABLE_ALL, cell });
    } else {
      dispatch({ type: CellActions.SELECT_CELL, cell });
      dispatch({ type: CellActions.SET_AVAILABLE, cell });
    }
  }

  return <div className={cellClasses.join(" ")} onClick={cellClick}></div>;
};

export default CellComponent;
