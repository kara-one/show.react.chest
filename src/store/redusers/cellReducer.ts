import { CellAction, CellActionTypes, ICellState } from "../../types/cellTypes";
import { initCellState } from "../initCellState";

export const cellReducer = (
  state = initCellState,
  action: CellAction
): ICellState => {
  switch (action.type) {
    case CellActionTypes.CELL_SET_SELECT:
      return {
        ...state,
        selectCell: action.selectCell,
      };

    case CellActionTypes.CELL_UNSET_SELECT:
      return {
        ...state,
        selectCell: null,
      };

    case CellActionTypes.CELL_TOGGLE_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.currentPlayer,
      };

    case CellActionTypes.CELL_BOARD_UPDATE:
      return {
        ...state,
        cells: action.cells,
      };

    default:
      return state;
  }
};
