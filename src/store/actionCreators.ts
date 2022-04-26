import { ICell, CellActionOld, DispatchType, CellActionTypes } from "../types/cellTypes";

export function moveFigure(cell: ICell) {
  const action: CellActionOld = {
    type: CellActionTypes.MOVE_FIGURE,
    cell,
  };

  return actionDispatch(action);
}

export function setAvailable(cell: ICell) {
  const action: CellActionOld = {
    type: CellActionTypes.SET_AVAILABLE,
    cell,
  };

  return actionDispatch(action);
}

export function cleanAvailableAll(cell: ICell) {
  const action: CellActionOld = {
    type: CellActionTypes.CLEAN_AVAILABLE_ALL,
    cell,
  };

  return actionDispatch(action);
}

export function actionDispatch(action: CellActionOld) {
  return (dispatch: DispatchType) => dispatch(action);
}
