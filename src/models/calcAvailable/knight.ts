import { ICell, ICoordinates } from "../../types/cellTypes";
import { FigureName, IFigure } from "../../types/figureTypes";


export default function stepsKnight(
  cellsMatrix: ICell[][],
  figure: IFigure,
  x: number,
  y: number
): string[] {
  const availables: string[] = [];
  const coordinates: ICoordinates[] = [];

  if (figure.name === FigureName.KNIGHT) {
    coordinates.push({ yn: y - 2, xn: x - 1 });
    coordinates.push({ yn: y - 1, xn: x - 2 });
    coordinates.push({ yn: y - 2, xn: x + 1 });
    coordinates.push({ yn: y - 1, xn: x + 2 });
    coordinates.push({ yn: y + 2, xn: x - 1 });
    coordinates.push({ yn: y + 1, xn: x - 2 });
    coordinates.push({ yn: y + 2, xn: x + 1 });
    coordinates.push({ yn: y + 1, xn: x + 2 });

    for (let i = 0; i < coordinates.length; i++) {
      const { xn, yn } = coordinates[i];

      if (xn >= 0 && xn <= 7 && yn >= 0 && yn <= 7) {
        availables.push(cellsMatrix[yn][xn].name);
      }
    }
  }

  return availables;
}
