import React, { FC } from "react";
import { useActions } from "../hooks/useActions";
import { ICell } from "../types/cellTypes";
import { getCellClasses } from "../utils/getCellClasses";
import "./cellComponent.scss";

interface CellProps {
  curentCell: ICell;
}

const CellComponent: FC<CellProps> = ({ curentCell }) => {
  const { cellClickAction } = useActions();

  function cellClick() {
    cellClickAction(curentCell);
  }

  return <div className={getCellClasses(curentCell)} onClick={cellClick}></div>;
};

export default CellComponent;
