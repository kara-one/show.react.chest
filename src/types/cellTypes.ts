import { IFigure } from "./figureTypes";

export interface ICell {
  name: string;
  figure: IFigure | null;
  available: boolean;
  selected: boolean;
  x: number;
  y: number;
}

export type CellMatrix = ICell[][];

export type HistoryNoteType = "" | "#" | "+" | "0-0" | "0-0-0";

export interface IHistory {
  white: string;
  black: string;
  note: HistoryNoteType;
}

export interface ICellState {
  cells: CellMatrix;
  selectCell: ICell | null;
  currentPlayer: string;
  history: IHistory[];
}

export interface ICoordinates {
  xn: number;
  yn: number;
}

export enum CellActionTypes {
  CELL_TOGGLE_CURRENT_PLAYER = "CELL_TOGGLE_CURRENT_PLAYER",
  CELL_SET_SELECT = "CELL_SET_SELECT",
  CELL_UNSET_SELECT = "CELL_UNSET_SELECT",
  CELL_SET_AVAILABLES = "CELL_SET_AVAILABLES",
  CELL_SET_UNAVAILABLES = "CELL_SET_UNAVAILABLES",
  CELL_MOVE_FIGURE = "CELL_MOVE_FIGURE",
  /** OLD */
  CELL_RELOAD = "CELL_RELOAD",
  MOVE_FIGURE = "MOVE_FIGURE",
  SELECT_CELL = "SELECT_CELL",
  SET_AVAILABLE = "SET_AVAILABLE",
  CLEAN_AVAILABLE_ALL = "CLEAN_AVAILABLE_ALL",
}

interface CellToggleCurrentPlayerAction {
  type: CellActionTypes.CELL_TOGGLE_CURRENT_PLAYER;
}
interface CellSetSelectAction {
  type: CellActionTypes.CELL_SET_SELECT;
  payload: ICell;
}
interface CellUnSetSelectAction {
  type: CellActionTypes.CELL_UNSET_SELECT;
  payload: ICell;
}
interface CellSetAvailablesAction {
  type: CellActionTypes.CELL_SET_AVAILABLES;
  payload: string[];
}
interface CellSetUnAvailablesAction {
  type: CellActionTypes.CELL_SET_UNAVAILABLES;
}
interface CellMoveFigureAction {
  type: CellActionTypes.CELL_MOVE_FIGURE;
  payload: ICell;
}
/** OLD */
interface CellReloadAction {
  type: CellActionTypes.CELL_RELOAD;
  payload: CellMatrix;
}
interface CellCleanAvailableAllAction {
  type: CellActionTypes.CLEAN_AVAILABLE_ALL;
  payload: ICell;
}

export type CellAction =
  | CellToggleCurrentPlayerAction
  | CellSetSelectAction
  | CellUnSetSelectAction
  | CellSetAvailablesAction
  | CellSetUnAvailablesAction
  | CellMoveFigureAction
  /** OLD */
  | CellReloadAction
  | CellCleanAvailableAllAction;

export interface CellActionOld {
  type: CellActionTypes;
  cell: ICell;
}

export type DispatchType = (args: CellActionOld) => CellActionOld;
