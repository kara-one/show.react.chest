import React, { FC } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ICell } from "../types/cellTypes";
import { getCellClasses } from "../utils/getCellClasses";
import "./cellComponent.scss";

interface CellProps {
  curentCell: ICell;
}

const CellComponent: FC<CellProps> = ({ curentCell }) => {
  const {
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

      // Set Select
      cellSetSelectAction(curentCell);
      cellSetAvailablesAction(curentCell, cells);
    }
    // Click by Cell without Figure
    else if (selectCell && curentCell.available) {
      // Move Figure
      cellMoveFigureAction(curentCell);
      cellToggleCurrentPlayerAction();

      // Unselect
      if (selectCell) {
        cellUnSetSelectAction(selectCell);
        cellSetUnAvailablesAction();
      }
    }
  }

  return <div className={getCellClasses(curentCell)} onClick={cellClick}></div>;
};

export default CellComponent;
