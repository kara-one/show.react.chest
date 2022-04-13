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

interface ICoordinates {
  xn: number;
  yn: number;
}

type Figure = IFigure | null;

type EnumType = { [s: any]: any };

type CellState = {
  cells: ICell[];
  selectCell: ICell | null;
};

type FigureState = IFigure[];

type CellAction = {
  type: string;
  cell: ICell;
};

type DispatchType = (args: CellAction) => CellAction;
