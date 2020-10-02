import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { favReducer } from "./favReducer";

export const Reducers = combineReducers({
    productState: productReducer,
    favState: favReducer
});
