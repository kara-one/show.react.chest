import { Dispatch } from "react";
import { availableCellNamesList } from "../../models/calcAvailableModel";
import {
  CellAction,
  CellActionTypes,
  CellMatrix,
  ICell,
} from "../../types/cellTypes";
import { FigureColor } from "../../types/figureTypes";
import { copyCells } from "../../utils/copyCells";
import { RootReducer } from "../redusers";

const cellSetSelectAction = (selectCell: ICell): Function => {
  return (dispatch: Dispatch<CellAction>, getState: Function) => {
    const { board }: RootReducer = getState();
    const cellsCopy: CellMatrix = copyCells(board.cells);
    cellsCopy[selectCell.y][selectCell.x].selected = true;

    dispatch({
      type: CellActionTypes.CELL_SET_SELECT,
      selectCell: selectCell,
    });
    dispatch({
      type: CellActionTypes.CELL_BOARD_UPDATE,
      cells: cellsCopy,
    });
  };
};

const cellUnSetSelectAction = (): Function => {
  return (dispatch: Dispatch<CellAction>, getState: Function) => {
    const { board }: RootReducer = getState();
    const cellsCopy: CellMatrix = copyCells(board.cells);
    const selectCell = board.selectCell;

    if (selectCell) {
      cellsCopy[selectCell.y][selectCell.x].selected = false;

      dispatch({
        type: CellActionTypes.CELL_UNSET_SELECT,
      });
      dispatch({
        type: CellActionTypes.CELL_BOARD_UPDATE,
        cells: cellsCopy,
      });
    }
  };
};

const cellSetAvailablesAction = (currentCell: ICell): Function => {
  return (dispatch: Dispatch<CellAction>, getState: Function) => {
    const { board }: RootReducer = getState();
    const cellNames: string[] = availableCellNamesList(
      board.cells,
      currentCell
    );
    const cellsCopy = board.cells.map((v1) => {
      v1.map((v2) => {
        if (cellNames.includes(v2.name)) {
          v2.available = true;
        }

        return v2;
      });

      return v1;
    });

    dispatch({
      type: CellActionTypes.CELL_BOARD_UPDATE,
      cells: cellsCopy,
    });
  };
};

const cellSetUnAvailablesAction = (): Function => {
  return (dispatch: Dispatch<CellAction>, getState: Function) => {
    const { board }: RootReducer = getState();
    const cellsCopy = board.cells.map((v1) => {
      v1.map((v2) => {
        v2.available = false;

        return v2;
      });

      return v1;
    });

    dispatch({
      type: CellActionTypes.CELL_BOARD_UPDATE,
      cells: cellsCopy,
    });
  };
};

const cellMoveFigureAction = (currentCell: ICell): Function => {
  return (dispatch: Dispatch<CellAction>, getState: Function) => {
    const { board }: RootReducer = getState();
    const cellsCopy: CellMatrix = copyCells(board.cells);

    if (board.selectCell) {
      cellsCopy[currentCell.y][currentCell.x].figure = board.selectCell.figure;
      cellsCopy[board.selectCell.y][board.selectCell.x].figure = null;

      dispatch({
        type: CellActionTypes.CELL_BOARD_UPDATE,
        cells: cellsCopy,
      });
    }
  };
};

const cellToggleCurrentPlayerAction = (): Function => {
  return (dispatch: Dispatch<CellAction>, getState: Function) => {
    const { board }: RootReducer = getState();
    const currentPlayer =
      board.currentPlayer === FigureColor.WHITE
        ? FigureColor.BLACK
        : FigureColor.WHITE;

    dispatch({
      type: CellActionTypes.CELL_TOGGLE_CURRENT_PLAYER,
      currentPlayer: currentPlayer,
    });
  };
};

const cellHistoryUpdateAction = (currentCell: ICell): Function => {
  return (dispatch: Dispatch<CellAction>, getState: Function) => {
    const { board }: RootReducer = getState();
    const history = board.history.map((step) => ({ ...step }));

    if (board.selectCell) {
      let currentHistory =
        board.selectCell.figure?.code + board.selectCell.name.toLowerCase();

      currentHistory += currentCell.figure ? "x" : "—";
      currentHistory += currentCell.name.toLowerCase();

      if (board.currentPlayer === FigureColor.WHITE) {
        history.push({ white: currentHistory });
      } else {
        history[history.length - 1].black = currentHistory;
      }

      dispatch({
        type: CellActionTypes.CELL_HISTORY_UPDATE,
        history: history,
      });
    }
  };
};

const cellClickAction = (curentCell: ICell): Function => {
  return (dispatch: Dispatch<CellAction | Function>, getState: Function) => {
    const { board }: RootReducer = getState();

    // Click by Cell with Figure
    if (curentCell.figure && curentCell.figure.color === board.currentPlayer) {
      // Unselect
      if (board.selectCell) {
        dispatch(cellUnSetSelectAction());
        dispatch(cellSetUnAvailablesAction());
      }

      // Set Select
      dispatch(cellSetSelectAction(curentCell));
      dispatch(cellSetAvailablesAction(curentCell));
    }
    // Click by Cell move Figure
    else if (board.selectCell && curentCell.available) {
      // Move Figure
      dispatch(cellHistoryUpdateAction(curentCell));
      dispatch(cellMoveFigureAction(curentCell));
      dispatch(cellToggleCurrentPlayerAction());

      // Unselect
      dispatch(cellUnSetSelectAction());
      dispatch(cellSetUnAvailablesAction());
    }
  };
};

export const cellActions = {
  cellClickAction,
};
