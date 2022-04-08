import { Cell, CellState } from "../type";

const cells: Cell[] = [];

const chars = ["A", "B", "C", "D", "E", "F", "G", "H"];

for (let y = 8; y > 0; y--) {
  for (let x = 0; x < 8; x++) {
    const cell: Cell = {
      name: chars[x] + y.toString(),
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
