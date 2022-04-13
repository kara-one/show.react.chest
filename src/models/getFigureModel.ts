import { ICell, IFigure } from "../type";

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

function createFigure(name: string, color: string): IFigure {
  return {
    name,
    color,
    image: [color, name].join("_") + ".png",
  };
}

const Figures: IFigure[] = [
  createFigure(FigureName.PAWN, Color.WHITE),
  createFigure(FigureName.PAWN, Color.BLACK),
  createFigure(FigureName.BISHOP, Color.WHITE),
  createFigure(FigureName.BISHOP, Color.BLACK),
  createFigure(FigureName.KING, Color.WHITE),
  createFigure(FigureName.KING, Color.BLACK),
  createFigure(FigureName.QUEEN, Color.WHITE),
  createFigure(FigureName.QUEEN, Color.BLACK),
  createFigure(FigureName.KNIGHT, Color.WHITE),
  createFigure(FigureName.KNIGHT, Color.BLACK),
  createFigure(FigureName.ROOK, Color.WHITE),
  createFigure(FigureName.ROOK, Color.BLACK),
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
