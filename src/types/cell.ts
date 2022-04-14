export interface ICell {
  name: string;
  figure: IFigure | null;
  available: boolean;
  selected: boolean;
  x: number;
  y: number;
}

export interface IFigure {
  name: string;
  color: string;
  code: string;
}

export interface IHistory {
  white: string;
  black: string;
  note: HistoryNoteType;
}

export interface ICoordinates {
  xn: number;
  yn: number;
}

export enum CellActions {
  MOVE_FIGURE = "MOVE_FIGURE",
  SELECT_FIGURE = "SELECT_FIGURE",
  SELECT_CELL = "SELECT_CELL",
  SET_AVAILABLE = "SET_AVAILABLE",
  CLEAN_AVAILABLE_ALL = "CLEAN_AVAILABLE_ALL",
}

export type Figure = IFigure | null;

export type HistoryNoteType = "" | "#" | "+" | "0-0" | "0-0-0";

export type CellState = {
  cells: ICell[];
  selectCell: ICell | null;
  currentPlayer: string;
  history: IHistory[];
};

export type CellAction =  {
  type: CellActions;
  cell: ICell;
};

export type DispatchType = (args: CellAction) => CellAction;
