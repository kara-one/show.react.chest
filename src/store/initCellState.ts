import { getFigure } from "../models/getFigureModel";
import { CellMatrix, ICell, ICellState } from "../types/cellTypes";
import { FigureColor } from "../types/figureTypes";

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

const cells: CellMatrix = [];

for (let y = 0; y < labelNums.length; y++) {
  if(!cells[y]) {
    cells[y] = []
  }
  for (let x = 0; x < labelChars.length; x++) {
    const cell: ICell = {
      name: labelChars[x] + labelNums[y],
      figure: getFigure(x, y),
      available: false,
      selected: false,
      x,
      y,
    };

    cells[y].push(cell);
  }
}

export const initCellState: ICellState = {
  cells,
  selectCell: null,
  currentPlayer: FigureColor.WHITE,
  history: [],
};
