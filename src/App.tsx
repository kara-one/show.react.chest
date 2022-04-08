import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CellAction, CellState } from "./type";
// import { CashAction, CashState } from "./type";

function App() {
  // const dispatch: Dispatch<CashAction> = useDispatch();
  // const cash = useSelector((state: CashState) => state.cash);

  /* const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 5 });
  };
  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: 5 });
  };

  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={() => addCash()}>Add</button>
      <button onClick={() => getCash()}>Get</button>
    </div>
  ); */

  const dispatch: Dispatch<CellAction> = useDispatch();
  const state = useSelector((state: CellState) => state);

  console.log(state);

  return <div className="App"> </div>;
}

export default App;
