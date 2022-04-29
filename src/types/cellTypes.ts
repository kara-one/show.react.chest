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
  CELL_BOARD_UPDATE = "CELL_BOARD_UPDATE",
}

interface CellToggleCurrentPlayerAction {
  type: CellActionTypes.CELL_TOGGLE_CURRENT_PLAYER;
  currentPlayer: string;
}
interface CellSetSelectAction {
  type: CellActionTypes.CELL_SET_SELECT;
  selectCell: ICell;
}
interface CellUnSetSelectAction {
  type: CellActionTypes.CELL_UNSET_SELECT;
}
interface CellBoardUpdateAction {
  type: CellActionTypes.CELL_BOARD_UPDATE;
  cells: CellMatrix;
}

export type CellAction =
  | CellToggleCurrentPlayerAction
  | CellSetSelectAction
  | CellUnSetSelectAction
  | CellBoardUpdateAction;
