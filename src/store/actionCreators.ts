import { ICell, CellAction, DispatchType, CellActions } from "../types/cell";

export function moveFigure(cell: ICell) {
  const action: CellAction = {
    type: CellActions.MOVE_FIGURE,
    cell,
  };

  return actionDispatch(action);
}

export function selectFigure(cell: ICell) {
  const action: CellAction = {
    type: CellActions.SELECT_FIGURE,
    cell,
  };

  return actionDispatch(action);
}

export function setAvailable(cell: ICell) {
  const action: CellAction = {
    type: CellActions.SET_AVAILABLE,
    cell,
  };

  return actionDispatch(action);
}

export function cleanAvailableAll(cell: ICell) {
  const action: CellAction = {
    type: CellActions.CLEAN_AVAILABLE_ALL,
    cell,
  };

  return actionDispatch(action);
}

export function actionDispatch(action: CellAction) {
  return (dispatch: DispatchType) => dispatch(action);
}
