import { Dispatch } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { availableCellNamesList } from "../../models/calcAvailableModel";
import {
  CellAction,
  CellActionTypes,
  CellMatrix,
  ICell,
} from "../../types/cellTypes";
import { FigureName } from "../../types/figureTypes";

const cellSetSelectAction = (cell: ICell): CellAction => ({
  type: CellActionTypes.CELL_SET_SELECT,
  payload: cell,
});

const cellUnSetSelectAction = (cell: ICell): CellAction => ({
  type: CellActionTypes.CELL_UNSET_SELECT,
  payload: cell,
});

const cellSetAvailablesAction = (currentCell: ICell, cells: CellMatrix) => {
  return (dispatch: Dispatch<CellAction>) => {
    const cellNames: string[] = availableCellNamesList(cells, currentCell);

    dispatch({
      type: CellActionTypes.CELL_SET_AVAILABLES,
      payload: cellNames,
    });
  };
};

const cellSetUnAvailablesAction = (): CellAction => ({
  type: CellActionTypes.CELL_SET_UNAVAILABLES,
});

const cellMoveFigureAction = (cell: ICell): CellAction => ({
  type: CellActionTypes.CELL_MOVE_FIGURE,
  payload: cell,
});

const cellToggleCurrentPlayerAction = (): CellAction => ({
  type: CellActionTypes.CELL_TOGGLE_CURRENT_PLAYER,
});

/** OLD */
const cellClickAction = (
  currentCell: ICell,
  selectCell: ICell | null,
  cells: CellMatrix,
  currentPlayer: string
) => {
  /* const { selectCell, cells, currentPlayer } = useTypedSelector(
    (state) => state.cells
  ); */
  /* return (dispatch: Dispatch<CellAction>) => {
    let newCells: ICell[];

    // Если клик для перемещения фигуры
    if (selectCell) {
      const selectFigure: ICell["figure"] = selectCell.figure
        ? selectCell.figure
        : null;
      const targetFigure: ICell["figure"] = currentCell.figure;

      // Move Figure
      newCells = cells.map((cell) => {
        if (
          currentCell.available &&
          (targetFigure === null || targetFigure.name !== FigureName.KING)
        ) {
          if (cell.selected) {
            cell.figure = null;
          }

          if (
            cell.y === currentCell.y &&
            cell.x === currentCell.x &&
            selectFigure
          ) {
            cell.figure = selectFigure;
          }

          // CLEAN_AVAILABLE_ALL
          if (cell.available) {
            cell.available = false;
          }
        }

        cell.selected = false;

        return cell;
      });
      dispatch({ type: CellActionTypes.CELL_RELOAD, payload: newCells });

      // Remove Select
      dispatch({ type: CellActionTypes.CELL_SET_SELECT, payload: null });

      // Change Current Player
      if (currentCell.available) {
        dispatch({ type: CellActionTypes.CELL_TOGGLE_CURRENT_PLAYER });
      }
      // dispatch({ type: CellActionTypes.MOVE_FIGURE, cell });
      // dispatch({ type: CellActionTypes.CLEAN_AVAILABLE_ALL, cell });
    } else {
      // или клик выбора фигуры
      // dispatch({ type: CellActionTypes.SELECT_CELL, cell });
      // ставим флаг selected для клетки по которой кликнули
      if (
        currentCell.figure !== null &&
        currentCell.figure.color === currentPlayer
      ) {
        newCells = cells.map((cell) => {
          if (cell.selected) {
            cell.selected = false;
          }
          if (cell.y === currentCell.y && cell.x === currentCell.x) {
            cell.selected = true;
          }

          return cell;
        });

        dispatch({ type: CellActionTypes.CELL_RELOAD, payload: newCells });
        dispatch({
          type: CellActionTypes.CELL_SET_SELECT,
          payload: currentCell,
        });

        // dispatch({ type: CellActionTypes.SET_AVAILABLE, cell });
        const availableCells = availableCellNamesList(cells, currentCell);

        newCells = cells.map((cell) => {
          if (
            cell.figure?.color === currentCell.figure?.color &&
            cell.name !== currentCell.name
          ) {
            return cell;
          }

          cell.available = availableCells.includes(cell.name);

          return cell;
        });
        dispatch({ type: CellActionTypes.CELL_RELOAD, payload: newCells });
      }
    }
  }; */
};

export const cellActions = {
  cellClickAction,
  cellSetSelectAction,
  cellUnSetSelectAction,
  cellSetAvailablesAction,
  cellSetUnAvailablesAction,
  cellMoveFigureAction,
  cellToggleCurrentPlayerAction,
};
