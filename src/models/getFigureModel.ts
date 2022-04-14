import { ICell, IFigure } from "../types/cell";

export enum Color {
  WHITE = "white",
  BLACK = "black",
}

export enum FigureName {
  PAWN = "pawn",
  BISHOP = "bishop",
  KING = "king",
  QUEEN = "queen",
  KNIGHT = "knight",
  ROOK = "rook",
}

export enum FigureCode {
  PAWN = "",
  BISHOP = "B",
  KING = "K",
  QUEEN = "Q",
  KNIGHT = "N",
  ROOK = "R",
}

function createFigure(name: string, color: string, code: string): IFigure {
  return {
    name,
    color,
    code,
  };
}

const Figures: IFigure[] = [
  createFigure(FigureName.PAWN, Color.WHITE, FigureCode.PAWN),
  createFigure(FigureName.PAWN, Color.BLACK, FigureCode.PAWN),
  createFigure(FigureName.BISHOP, Color.WHITE, FigureCode.BISHOP),
  createFigure(FigureName.BISHOP, Color.BLACK, FigureCode.BISHOP),
  createFigure(FigureName.KING, Color.WHITE, FigureCode.KING),
  createFigure(FigureName.KING, Color.BLACK, FigureCode.KING),
  createFigure(FigureName.QUEEN, Color.WHITE, FigureCode.QUEEN),
  createFigure(FigureName.QUEEN, Color.BLACK, FigureCode.QUEEN),
  createFigure(FigureName.KNIGHT, Color.WHITE, FigureCode.KNIGHT),
  createFigure(FigureName.KNIGHT, Color.BLACK, FigureCode.KNIGHT),
  createFigure(FigureName.ROOK, Color.WHITE, FigureCode.ROOK),
  createFigure(FigureName.ROOK, Color.BLACK, FigureCode.ROOK),
];

export function getFigure(x: number, y: number): ICell["figure"] {
  let findFigure: ICell["figure"] = null;

  let name: string = "";
  let color: string = "";

  /** BLACK */
  if (y === 0) {
    color = Color.BLACK;

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
  if (y === 1) {
    color = Color.BLACK;
    name = FigureName.PAWN;
  }

  /** WHITE */
  if (y === 7) {
    color = Color.WHITE;

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
  if (y === 6) {
    color = Color.WHITE;
    name = FigureName.PAWN;
  }

  if (name && color) {
    findFigure =
      Figures.find((item) => item.name === name && item.color === color) ||
      null;
  }

  return findFigure;
}
