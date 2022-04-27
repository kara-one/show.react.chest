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
  curentCell: ICell;
}

const CellComponent: FC<CellProps> = ({ curentCell }) => {
  /* const dispatch: Dispatch<CellActionOld> = useDispatch();
  const selectCell = useSelector((state: ICellState) => state.selectCell); */
  const {
    cellClickAction,
    cellSetSelectAction,
    cellUnSetSelectAction,
    cellSetAvailablesAction,
    cellSetUnAvailablesAction,
    cellMoveFigureAction,
    cellToggleCurrentPlayerAction,
  } = useActions();
  const { selectCell, cells, currentPlayer } = useTypedSelector(
    (state) => state.cells
  );

  function cellClick() {
    // Click by Cell with Figure
    if (curentCell.figure && curentCell.figure.color === currentPlayer) {
      // Unselect
      if (selectCell) {
        cellUnSetSelectAction(selectCell);
        cellSetUnAvailablesAction();
      }

      cellSetSelectAction(curentCell);
      cellSetAvailablesAction(curentCell, cells);
    } else if (selectCell && curentCell.available) {
      cellMoveFigureAction(curentCell);
      cellToggleCurrentPlayerAction();
      console.log(curentCell);
      // Unselect
      if (selectCell) {
        cellUnSetSelectAction(selectCell);
        cellSetUnAvailablesAction();
      }
    }

    // cellClickAction(curentCell, selectCell, cells, currentPlayer);
    /* if (selectCell) {
      dispatch({ type: CellActionTypes.MOVE_FIGURE, curentCell });
      dispatch({ type: CellActionTypes.CLEAN_AVAILABLE_ALL, curentCell });
    } else {
      dispatch({ type: CellActionTypes.SELECT_CELL, curentCell });
      dispatch({ type: CellActionTypes.SET_AVAILABLE, curentCell });
    } */
  }

  return <div className={getCellClasses(curentCell)} onClick={cellClick}></div>;
};

export default CellComponent;
