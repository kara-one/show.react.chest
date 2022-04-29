import { CellMatrix } from "../types/cellTypes";

export const copyCells = (cells: CellMatrix): CellMatrix => {
  return cells.map((row) =>
    row.map((cell) => {
      let figure = null;
      if (cell.figure) {
        figure = { ...cell.figure };
      }

      return { ...cell, figure };
    })
  );
};
