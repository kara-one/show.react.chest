import { ICell } from "../types/cellTypes";
import {
  FigureColor,
  FigureCode,
  FigureName,
  IFigure,
} from "../types/figureTypes";

const createFigure = (name: string, color: string, code: string): IFigure => ({
  name,
  color,
  code,
});

const Figures: IFigure[] = [
  createFigure(FigureName.PAWN, FigureColor.WHITE, FigureCode.PAWN),
  createFigure(FigureName.PAWN, FigureColor.BLACK, FigureCode.PAWN),
  createFigure(FigureName.BISHOP, FigureColor.WHITE, FigureCode.BISHOP),
  createFigure(FigureName.BISHOP, FigureColor.BLACK, FigureCode.BISHOP),
  createFigure(FigureName.KING, FigureColor.WHITE, FigureCode.KING),
  createFigure(FigureName.KING, FigureColor.BLACK, FigureCode.KING),
  createFigure(FigureName.QUEEN, FigureColor.WHITE, FigureCode.QUEEN),
  createFigure(FigureName.QUEEN, FigureColor.BLACK, FigureCode.QUEEN),
  createFigure(FigureName.KNIGHT, FigureColor.WHITE, FigureCode.KNIGHT),
  createFigure(FigureName.KNIGHT, FigureColor.BLACK, FigureCode.KNIGHT),
  createFigure(FigureName.ROOK, FigureColor.WHITE, FigureCode.ROOK),
  createFigure(FigureName.ROOK, FigureColor.BLACK, FigureCode.ROOK),
];

export const getFigure = (x: number, y: number): ICell["figure"] => {
  let findFigure: ICell["figure"] = null;

  let name: string = "";
  let color: string = "";

  if (y === 0 || y === 1) {
    color = FigureColor.BLACK;
  } else if (y === 6 || y === 7) {
    color = FigureColor.WHITE;
  }

  if (color) {
    if (y === 1 || y === 6) {
      name = FigureName.PAWN;
    } else {
      if (x === 0 || x === 7) {
        name = FigureName.ROOK;
      }
      if (x === 1 || x === 6) {
        name = FigureName.KNIGHT;
      }
      if (x === 2 || x === 5) {
        name = FigureName.BISHOP;
      }
      if (x === 3) {
        name = FigureName.QUEEN;
      }
      if (x === 4) {
        name = FigureName.KING;
      }
    }
  }

  if (name && color) {
    findFigure =
      Figures.find((item) => item.name === name && item.color === color) ||
      null;
  }

  return findFigure;
};
