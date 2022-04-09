import { ICell, CellAction, DispatchType } from "../type";
import * as actionTypes from "./actionTypes";

export function moveFigure(cell: ICell) {
  const action: CellAction = {
    type: actionTypes.MOVE_FIGURE,
    cell,
  };

  return actionDispatch(action);
}

export function selectFigure(cell: ICell) {
  const action: CellAction = {
    type: actionTypes.SELECT_FIGURE,
    cell,
  };

  return actionDispatch(action);
}

export function setAvailable(cell: ICell) {
  const action: CellAction = {
    type: actionTypes.SET_AVAILABLE,
    cell,
  };

  return actionDispatch(action);
}

export function cleanAvailableAll(cell: ICell) {
  const action: CellAction = {
    type: actionTypes.CLEAN_AVAILABLE_ALL,
    cell,
  };

  return actionDispatch(action);
}

export function actionDispatch(action: CellAction) {
  return (dispatch: DispatchType) => dispatch(action);
}
