import { ICell, IFigure } from "../type";

function createFigure(name: string, color: string): IFigure {
  return {
    name,
    color,
    image: [color, name].join("_") + ".png",
  };
}

const Figures: IFigure[] = [
  createFigure("pawn", "white"),
  createFigure("pawn", "black"),
  createFigure("bishop", "white"),
  createFigure("bishop", "black"),
  createFigure("king", "white"),
  createFigure("king", "black"),
  createFigure("queen", "white"),
  createFigure("queen", "black"),
  createFigure("knight", "white"),
  createFigure("knight", "black"),
  createFigure("rook", "white"),
  createFigure("rook", "black"),
];

export function getFigure(x: number, y: number): ICell["figure"] {
  let findFigure: ICell["figure"] = null;

  let name: string = "";
  let color: string = "";

  /** BLACK */
  if (y === 0) {
    color = "black";

    if (x === 0 || x === 7) {
      name = "rook";
    }
    if (x === 1 || x === 6) {
      name = "knight";
    }
    if (x === 2 || x === 5) {
      name = "bishop";
    }
    if (x === 3) {
      name = "queen";
    }
    if (x === 4) {
      name = "king";
    }
  }
  if (y === 1) {
    color = "black";
    name = "pawn";
  }

  /** WHITE */
  if (y === 7) {
    color = "white";

    if (x === 0 || x === 7) {
      name = "rook";
    }
    if (x === 1 || x === 6) {
      name = "knight";
    }
    if (x === 2 || x === 5) {
      name = "bishop";
    }
    if (x === 3) {
      name = "queen";
    }
    if (x === 4) {
      name = "king";
    }
  }
  if (y === 6) {
    color = "white";
    name = "pawn";
  }

  if (name && color) {
    findFigure =
      Figures.find((item) => item.name === name && item.color === color) ||
      null;
  }

  return findFigure;
}
