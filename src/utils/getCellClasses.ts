import { ICell } from "../types/cellTypes";

export const getCellClasses = (cell: ICell): string => {
  const cellClasses = ["cell"];

  cellClasses.push(`x${cell.x.toString()}`);
  cellClasses.push(`y${cell.y.toString()}`);

  if ((cell.x + cell.y) % 2 === 0) {
    cellClasses.push("dark");
  } else {
    cellClasses.push("light");
  }

  if (cell.figure) {
    cellClasses.push(cell.figure.color);
    cellClasses.push(cell.figure.name);
  }

  if (cell.selected) {
    cellClasses.push("highlight");
  }

  if (cell.available) {
    cellClasses.push("hint");
  }

  return cellClasses.join(" ");
};
