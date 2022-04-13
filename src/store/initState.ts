import { getFigure } from "../models/getFigureModel";
import { ICell, CellState } from "../type";

export const labelChars: Array<string> = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
];
export const labelNums: Array<string> = [
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
];

const cells: ICell[] = [];

for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {
    const cell: ICell = {
      name: labelChars[x] + labelNums[y],
      figure: getFigure(x, y),
      available: false,
      selected: false,
      x,
      y,
    };

    cells.push(cell);
  }
}

export const initState: CellState = {
  cells,
  selectCell: null,
};
