import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import { CellAction, CellState, DispatchType } from "./types/cell";

const store: Store<CellState, CellAction> & { dispatch: DispatchType } =
  createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
