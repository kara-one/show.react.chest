import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootReducer } from "../store/redusers";

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;
