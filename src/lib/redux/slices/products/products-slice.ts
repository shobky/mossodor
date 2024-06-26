import { IProduct } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchPaginatedProductsReducers } from "./thunks/fetch-paginated-products-thunk";
import { State } from "../../store";
import { fetchCategoriesProductsReducers } from "./thunks/fetch-categories-products-thunk";
import { fetchProductByNameReducers } from "./thunks/fetch-product-by-name";
import { fetchFilteredProductsReducers } from "./thunks/fetch-filtered-products-thunk";

export interface ProductsInitalState {
  products: IProduct[];
  filters: { name: string; value: string[] }[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
  totalProducts: number;
}

export const productsInitialState: ProductsInitalState = {
  products: [],
  filters: [],
  status: "idle",
  error: undefined,
  totalProducts: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    fetchPaginatedProductsReducers(builder);
    fetchCategoriesProductsReducers(builder);
    fetchProductByNameReducers(builder);
    fetchFilteredProductsReducers(builder);
  },
});

export const selectProductsSlice = (state: State) => state.products;
export const selectFilters = (state: State) => state.products.filters;
