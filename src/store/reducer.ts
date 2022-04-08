import { CellAction, CellState } from "../type";
import { initState } from "./initState";
import * as actionTypes from "./actionTypes";

const reducer = (
  state: CellState = initState,
  action: CellAction
): CellState => {
  switch (action.type) {
    case actionTypes.MOVE_FIGURE:
      return { ...state };
    case actionTypes.SELECT_FIGURE:
      return { ...state };
    case actionTypes.SET_AVAILABLE:
      return { ...state };
    case actionTypes.CLEAN_AVAILABLE_ALL:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
