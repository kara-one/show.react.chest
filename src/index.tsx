import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { CellAction, CellState, DispatchType } from "./type";
import reducer from "./store/reducer";
/*
import { CashAction, CashState, DispatchType } from "./type";

const defaultState: CashState = {
  cash: 5,
};

const reducer = (state: CashState = defaultState, action: CashAction) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

const store: Store<CashState, CashAction> & { dispatch: DispatchType } =
  createStore(reducer); */

const store: Store<CellState, CellAction> & { dispatch: DispatchType } =
  createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
