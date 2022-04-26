import { CellAction, CellActionTypes, ICellState } from "../../types/cellTypes";
import { FigureColor } from "../../types/figureTypes";
import { initCellState } from "../initCellState";

export const cellReducer = (
  state = initCellState,
  action: CellAction
): ICellState => {
  switch (action.type) {
    case CellActionTypes.CELL_TOGGLE_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer:
          state.currentPlayer === FigureColor.WHITE
            ? FigureColor.BLACK
            : FigureColor.WHITE,
      };
    case CellActionTypes.CELL_SET_SELECT:
      return { ...state, selectCell: action.payload };
    case CellActionTypes.CELL_RELOAD:
      return { ...state, cells: action.payload };
    case CellActionTypes.SET_AVAILABLE:
      return { ...state };
    case CellActionTypes.CLEAN_AVAILABLE_ALL:
      return { ...state };
    default:
      return state;
  }
};
