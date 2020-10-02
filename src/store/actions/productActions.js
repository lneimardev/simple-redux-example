import { SET_PRODUCTS } from "../types/productTypes";

export const setProducts = products => ({
    type: SET_PRODUCTS,
    products
});

// setProducts = action generator

// { type: SET_PRODUCTS, products } = action
