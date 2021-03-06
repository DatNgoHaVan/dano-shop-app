import PRODUCTS from "../../data/dummy-data";
import { Product } from "../../models/product";

export interface IProductState {
  availableProducts: Product[];
  userProducts: Product[];
}

const initialState: IProductState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action: any) => {
  return state;
};