import { CellMatrix, ICell, ICellState } from "../types/cellTypes";
import getCellsMatrix from "../utils/getCellsMatrix";
import stepsBishop from "./calcAvailable/bishop";
import stepsKing from "./calcAvailable/king";
import stepsKnight from "./calcAvailable/knight";
import stepsPawn from "./calcAvailable/pawn";
import stepsQueen from "./calcAvailable/queen";
import stepsRock from "./calcAvailable/rook";

export function calcAvailables(state: ICellState): string[] {
  let availables: string[] = [];
  const selectCell = state.selectCell;

  if (selectCell === null) {
    return availables;
  }

  return availableCellNamesList(state.cells, selectCell);
}

export const availableCellNamesList = (
  cells: CellMatrix,
  selectCell: ICell
): string[] => {
  let availables: string[] = [];

  if (selectCell === null || selectCell.figure === null) {
    return availables;
  }

  const figure = selectCell.figure;
  const x = selectCell.x;
  const y = selectCell.y;
  const cellsMatrix = cells;
  // const cellsMatrix = getCellsMatrix(cells);

  /** PAWN */
  availables = availables.concat(stepsPawn(cellsMatrix, figure, x, y));

  /** ROOK */
  availables = availables.concat(stepsRock(cellsMatrix, figure, x, y));

  /** BISHOP */
  availables = availables.concat(stepsBishop(cellsMatrix, figure, x, y));

  /** QUEEN */
  availables = availables.concat(stepsQueen(cellsMatrix, figure, x, y));

  /** KNIGHT */
  availables = availables.concat(stepsKnight(cellsMatrix, figure, x, y));

  /** KING */
  availables = availables.concat(stepsKing(cellsMatrix, figure, x, y));

  return availables;
};
