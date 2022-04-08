import { type } from "os";

interface Cell {
  name: string;
  figure: Figure | null;
  available: boolean;
  selected: boolean;
  x: number;
  y: number;
}

interface Figure {
  name: string;
  color: string;
  image: string;
}

type ICell = Cell;

type CellState = {
  cells: Cell[];
};

type CellAction = {
  type: string;
  cell: Cell;
};

type DispatchType = (args: CellAction) => CellAction;
