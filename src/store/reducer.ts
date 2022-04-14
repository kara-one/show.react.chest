import { initState } from "./initState";
import { calcAvailables } from "../models/calcAvailableModel";
import { Color, FigureName } from "../models/getFigureModel";
import { CellAction, CellActions, CellState, Figure } from "../types/cell";

const reducer = (
  state: CellState = initState,
  action: CellAction
): CellState => {
  switch (action.type) {
    /** MOVE_FIGURE */
    case CellActions.MOVE_FIGURE:
      const selectFigure: Figure = state.selectCell?.figure
        ? state.selectCell?.figure
        : null;
      const targetFigure: Figure = action.cell.figure;
      let currentPlayer: string = state.currentPlayer;

      if (action.cell.available) {
        currentPlayer =
          currentPlayer === Color.WHITE ? Color.BLACK : Color.WHITE;
      }

      return {
        ...state,
        selectCell: null,
        currentPlayer: currentPlayer,
        cells: state.cells.map((cell) => {
          if (
            action.cell.available &&
            (targetFigure === null || targetFigure.name !== FigureName.KING)
          ) {
            if (cell.selected) {
              cell.figure = null;
            }

            if (
              cell.y === action.cell.y &&
              cell.x === action.cell.x &&
              selectFigure
            ) {
              cell.figure = selectFigure;
            }
          }

          cell.selected = false;

          return cell;
        }),
      };
    /** SELECT_FIGURE */
    case CellActions.SELECT_FIGURE:
      return { ...state };
    /** SELECT_CELL */
    case CellActions.SELECT_CELL:
      if (
        action.cell.figure === null ||
        action.cell.figure.color !== state.currentPlayer
      ) {
        return state;
      }

      return {
        ...state,
        selectCell: action.cell,
        cells: state.cells.map((cell) => {
          if (cell.selected) {
            cell.selected = false;
          }
          if (cell.y === action.cell.y && cell.x === action.cell.x) {
            cell.selected = true;
          }

          return cell;
        }),
      };
    /** SET_AVAILABLE */
    case CellActions.SET_AVAILABLE:
      if (action.cell.figure === null) {
        return state;
      }

      const availableCells = calcAvailables(state);

      return {
        ...state,
        cells: state.cells.map((cell) => {
          // console.log(cell);
          // console.log(action.cell);
          if (
            cell.figure?.color === action.cell?.figure?.color &&
            state.selectCell?.name !== cell.name
          ) {
            return cell;
          }

          // cell.available = calcAvailables(cell, action.cell);
          cell.available = availableCells.includes(cell.name);

          return cell;
        }),
      };
    /** CLEAN_AVAILABLE_ALL */
    case CellActions.CLEAN_AVAILABLE_ALL:
      return {
        ...state,
        cells: state.cells.map((cell) => {
          if (cell.available) {
            cell.available = false;
          }

          return cell;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
