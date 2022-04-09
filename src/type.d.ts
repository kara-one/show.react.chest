import { type } from "os";

interface ICell {
  name: string;
  figure: IFigure | null;
  available: boolean;
  selected: boolean;
  x: number;
  y: number;
}

interface IFigure {
  name: string;
  color: string;
  image: string;
}

// type ICell = Cell;
// type IFigure = IFigure;

type CellState = {
  cells: ICell[];
};

type FigureState = IFigure[];

type CellAction = {
  type: string;
  cell: ICell;
};

type DispatchType = (args: CellAction) => CellAction;
