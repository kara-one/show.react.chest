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

export type CellAction =
  | CellToggleCurrentPlayerAction
  | CellSetSelectAction
  | CellUnSetSelectAction
  | CellSetAvailablesAction
  | CellSetUnAvailablesAction
  | CellMoveFigureAction;
