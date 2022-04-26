import { ICell } from "../../types/cellTypes";
import { FigureName, IFigure } from "../../types/figureTypes";

export default function stepsBishop(
  cellsMatrix: ICell[][],
  figure: IFigure,
  x: number,
  y: number
): string[] {
  const availables: string[] = [];
  const leftTopCells: ICell[] = [];
  const rightTopCells: ICell[] = [];
  const leftBottomCells: ICell[] = [];
  const rightBottomCells: ICell[] = [];
  const checkCells: ICell[][] = [];
  let checkCell: ICell;
  let nextY: number;

  if (figure.name === FigureName.BISHOP) {
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
