import { Cell, CellState } from "../type";

const cells: Cell[] = [];

export const labelChars: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const labelNums: Array<string> = ["8", "7", "6", "5", "4", "3", "2", "1"];

for (let y = 8; y > 0; y--) {
  for (let x = 0; x < 8; x++) {
    const cell: Cell = {
      name: labelChars[x] + labelNums[y],
      figure: null,
      available: false,
      selected: false,
      x,
      y: y - 1,
    };

    cells.push(cell);
  }
}

export const initState: CellState = {
  cells,
};
