import React, { FC } from "react";
import { ICell } from "../type";
import "./cellComponent.scss";

interface CellProps {
  cell: ICell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
  console.log(cell);

  const cellClasses = ["cell"];

  if ((cell.x + cell.y) % 2 === 0) {
    cellClasses.push("dark");
  } else {
    cellClasses.push("light");
  }

  if (cell.figure) {
    cellClasses.push(cell.figure.color);
    cellClasses.push(cell.figure.name);
  }

  return <div className={cellClasses.join(" ")}></div>;
};

export default CellComponent;
