import React, { Dispatch, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  CellActionOld,
  CellActionTypes,
  ICellState,
  ICell,
} from "../types/cellTypes";
import { getCellClasses } from "../utils/getCellClasses";
import "./cellComponent.scss";

interface CellProps {
  cell: ICell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
  /* const dispatch: Dispatch<CellActionOld> = useDispatch();
  const selectCell = useSelector((state: ICellState) => state.selectCell); */
  const { cellClickAction } = useActions();
  const { selectCell, cells, currentPlayer } = useTypedSelector(
    (state) => state.cells
  );

  function cellClick() {
    // console.log(cell);
    cellClickAction(cell, selectCell, cells, currentPlayer);
    /* if (selectCell) {
      dispatch({ type: CellActionTypes.MOVE_FIGURE, cell });
      dispatch({ type: CellActionTypes.CLEAN_AVAILABLE_ALL, cell });
    } else {
      dispatch({ type: CellActionTypes.SELECT_CELL, cell });
      dispatch({ type: CellActionTypes.SET_AVAILABLE, cell });
    } */
  }

  return <div className={getCellClasses(cell)} onClick={cellClick}></div>;
};

export default CellComponent;
