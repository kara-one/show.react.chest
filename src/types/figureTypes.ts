export enum FigureColor {
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

export interface IFigure {
  name: string;
  color: string;
  code: string;
}
