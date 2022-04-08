import React, { FC } from "react";
import { ICell } from "../type";
import "./cellComponent.css";

interface CellProps {
  cell: ICell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
  console.log(cell);

  return (
    <div
      className={["cell", (cell.x + cell.y) % 2 === 0 ? "black" : "white"].join(
        " "
      )}
    ></div>
  );
};

export default CellComponent;
