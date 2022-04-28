import { Dispatch } from "react";
import { availableCellNamesList } from "../../models/calcAvailableModel";
import {
  CellAction,
  CellActionTypes,
  CellMatrix,
  ICell,
} from "../../types/cellTypes";

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

export const cellActions = {
  cellSetSelectAction,
  cellUnSetSelectAction,
  cellSetAvailablesAction,
  cellSetUnAvailablesAction,
  cellMoveFigureAction,
  cellToggleCurrentPlayerAction,
};
