import { type } from "os";
import { combineReducers } from "redux";
import { cellReducer } from "./cellReducer";

export const rootReducer = combineReducers({ cells: cellReducer });

export type RootReducer = ReturnType<typeof rootReducer>;
