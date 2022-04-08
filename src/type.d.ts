import { type } from "os";
/*
interface Cash {
  cash: number;
}

type CashState = {
  cash: Cash.cash;
};

type CashAction = {
  type: string;
  payload: Cash.cash;
};

type DispatchType = (args: CashAction) => CashAction; */

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

type CellState = {
  cells: Cell[];
};

type CellAction = {
  type: string;
  cell: Cell;
};

type DispatchType = (args: CellAction) => CellAction;