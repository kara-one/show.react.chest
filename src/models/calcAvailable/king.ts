import { ICell, ICoordinates, IFigure } from "../../type";
import { FigureName } from "../getFigureModel";

export default function stepsKing(
  cellsMatrix: ICell[][],
  figure: IFigure,
  x: number,
  y: number
): string[] {
  const availables: string[] = [];
  const coordinates: ICoordinates[] = [];

  if (figure.name === FigureName.KING) {
    coordinates.push({ yn: y - 1, xn: x - 1 });
    coordinates.push({ yn: y - 1, xn: x });
    coordinates.push({ yn: y - 1, xn: x + 1 });
    coordinates.push({ yn: y, xn: x - 1 });
    coordinates.push({ yn: y, xn: x + 1 });
    coordinates.push({ yn: y + 1, xn: x - 1 });
    coordinates.push({ yn: y + 1, xn: x });
    coordinates.push({ yn: y + 1, xn: x + 1 });

    for (let i = 0; i < coordinates.length; i++) {
      const { xn, yn } = coordinates[i];

      if (xn >= 0 && xn <= 7 && yn >= 0 && yn <= 7) {
        availables.push(cellsMatrix[yn][xn].name);
      }
    }
  }

  return availables;
}
