import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redusers";

export const store = createStore(
  rootReducer,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk))
);
