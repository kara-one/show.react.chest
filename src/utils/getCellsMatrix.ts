import { ICell } from "../types/cellTypes";

export default function getCellsMatrix(cells: ICell[]): ICell[][] {
  const matrix: ICell[][] = [];

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];

    if (!matrix[cell.y]) {
      matrix[cell.y] = [];
    }

    matrix[cell.y][cell.x] = cell;
  }

  return matrix;
}