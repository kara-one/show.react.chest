import { ICell } from "../../types/cellTypes";
import { FigureName, IFigure } from "../../types/figureTypes";

export default function stepsQueen(
  cellsMatrix: ICell[][],
  figure: IFigure,
  x: number,
  y: number
): string[] {
  const availables: string[] = [];
  const leftCells: ICell[] = [];
  const rightCells: ICell[] = [];
  const topCells: ICell[] = [];
  const bottomCells: ICell[] = [];
  const leftTopCells: ICell[] = [];
  const rightTopCells: ICell[] = [];
  const leftBottomCells: ICell[] = [];
  const rightBottomCells: ICell[] = [];
  const checkCells: ICell[][] = [];
  let checkCell: ICell;
  let nextY: number;

  if (figure.name === FigureName.QUEEN) {
    /** LEFT */
    for (let i = x - 1; i >= 0; i--) {
      leftCells.push(cellsMatrix[y][i]);
    }
    /** RIGHT */
    for (let i = x + 1; i <= 7; i++) {
      rightCells.push(cellsMatrix[y][i]);
    }
    /** TOP */
    for (let i = y - 1; i >= 0; i--) {
      topCells.push(cellsMatrix[i][x]);
    }
    /** BOTTOM */
    for (let i = y + 1; i <= 7; i++) {
      bottomCells.push(cellsMatrix[i][x]);
    }
    /** LEFT-TOP */
    nextY = y - 1;
    for (let i = x - 1; i >= 0; i--) {
      if (nextY < 0) {
        break;
      }
      leftTopCells.push(cellsMatrix[nextY][i]);
      nextY--;
    }
    /** RIGHT-TOP */
    nextY = y - 1;
    for (let i = x + 1; i <= 7; i++) {
      if (nextY < 0) {
        break;
      }
      rightTopCells.push(cellsMatrix[nextY][i]);
      nextY--;
    }
    /** LEFT-BOTTOM */
    nextY = y + 1;
    for (let i = x - 1; i >= 0; i--) {
      if (nextY > 7) {
        break;
      }
      leftBottomCells.push(cellsMatrix[nextY][i]);
      nextY++;
    }
    /** RIGHT-BOTTOM */
    nextY = y + 1;
    for (let i = x + 1; i <= 7; i++) {
      if (nextY > 7) {
        break;
      }
      rightBottomCells.push(cellsMatrix[nextY][i]);
      nextY++;
    }

    /** PREPARE */
    checkCells.push(leftCells);
    checkCells.push(rightCells);
    checkCells.push(topCells);
    checkCells.push(bottomCells);
    checkCells.push(leftTopCells);
    checkCells.push(rightTopCells);
    checkCells.push(leftBottomCells);
    checkCells.push(rightBottomCells);

    for (let i = 0; i < checkCells.length; i++) {
      for (let j = 0; j < checkCells[i].length; j++) {
        checkCell = checkCells[i][j];

        if (checkCell.figure === null) {
          availables.push(checkCell.name);
        } else if (
          checkCell.figure !== null &&
          checkCell.figure.color !== figure.color
        ) {
          availables.push(checkCell.name);
          break;
        } else {
          break;
        }
      }
    }
  }

  return availables;
}
