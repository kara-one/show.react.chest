import { ICell } from "../../types/cellTypes";
import { FigureColor, FigureName, IFigure } from "../../types/figureTypes";

export default function stepsPawn(
  cellsMatrix: ICell[][],
  figure: IFigure,
  x: number,
  y: number
): string[] {
  const availables: string[] = [];
  let checkCell;

  if (figure.name === FigureName.PAWN) {
    /** WHITE */
    if (figure.color === FigureColor.WHITE) {
      if (y > 0) {
        checkCell = cellsMatrix[y - 1][x];

        if (checkCell.figure === null) {
          availables.push(checkCell.name);

          if (y === 6) {
            checkCell = cellsMatrix[y - 2][x];

            if (checkCell.figure === null) {
              availables.push(checkCell.name);
            }
          }
        }

        if (x > 0) {
          checkCell = cellsMatrix[y - 1][x - 1];
          if (checkCell.figure !== null) {
            availables.push(checkCell.name);
          }
        }

        if (x < 7) {
          checkCell = cellsMatrix[y - 1][x + 1];
          if (checkCell.figure !== null) {
            availables.push(checkCell.name);
          }
        }
      }
    }

    /** BLACK */
    if (figure.color === FigureColor.BLACK) {
      if (y < 7) {
        checkCell = cellsMatrix[y + 1][x];

        if (checkCell.figure === null) {
          availables.push(checkCell.name);

          if (y === 1) {
            checkCell = cellsMatrix[y + 2][x];

            if (checkCell.figure === null) {
              availables.push(checkCell.name);
            }
          }
        }

        if (x > 0) {
          checkCell = cellsMatrix[y + 1][x - 1];
          if (checkCell.figure !== null) {
            availables.push(checkCell.name);
          }
        }

        if (x < 7) {
          checkCell = cellsMatrix[y + 1][x + 1];
          if (checkCell.figure !== null) {
            availables.push(checkCell.name);
          }
        }
      }
    }
  }

  return availables;
}
