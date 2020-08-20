import { combineReducers } from "redux";
import productsReducer from "../products/products-reducer";

export const RootReducer = combineReducers({
  products: productsReducer
});

export type StoreRootState = ReturnType<typeof RootReducer>