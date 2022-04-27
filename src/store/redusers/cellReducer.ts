import {
  CellAction,
  CellActionTypes,
  CellMatrix,
  ICellState,
} from "../../types/cellTypes";
import { FigureColor } from "../../types/figureTypes";
import { initCellState } from "../initCellState";

export const cellReducer = (
  state = initCellState,
  action: CellAction
): ICellState => {
  const cellsCopy = copyCells(state.cells);

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
      cellsCopy[action.payload.y][action.payload.x].selected = true;

      return {
        ...state,
        selectCell: action.payload,
        cells: cellsCopy,
      };
    case CellActionTypes.CELL_UNSET_SELECT:
      cellsCopy[action.payload.y][action.payload.x].selected = false;

      return {
        ...state,
        selectCell: null,
        cells: cellsCopy,
      };
    case CellActionTypes.CELL_SET_AVAILABLES:
      return {
        ...state,
        cells: state.cells.map((v1) => {
          v1.map((v2) => {
            if (action.payload.includes(v2.name)) {
              v2.available = true;
            }

            return v2;
          });

          return v1;
        }),
      };
    case CellActionTypes.CELL_SET_UNAVAILABLES:
      return {
        ...state,
        cells: state.cells.map((v1) => {
          v1.map((v2) => {
            v2.available = false;

            return v2;
          });

          return v1;
        }),
      };
    case CellActionTypes.CELL_MOVE_FIGURE:
      if (state.selectCell) {
        cellsCopy[action.payload.y][action.payload.x].figure =
          state.selectCell.figure;
        cellsCopy[state.selectCell.y][state.selectCell.x].figure = null;
      }

      return {
        ...state,
        selectCell: null,
        cells: cellsCopy,
      };
    /** OLD */
    case CellActionTypes.CELL_RELOAD:
      return { ...state, cells: action.payload };
    case CellActionTypes.CLEAN_AVAILABLE_ALL:
      return { ...state };
    default:
      return state;
  }
};

function copyCells(cells: CellMatrix): CellMatrix {
  return cells.map((row) =>
    row.map((cell) => {
      let figure = null;
      if (cell.figure) {
        figure = { ...cell.figure };
      }

      return { ...cell, figure };
    })
  );
}
