import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsInitalState } from "../products-slice";
import {  searchProductByName } from "@/lib/api/products.api";

export const fetchProductByNameThunk = createAsyncThunk(
  "products/fetchProductByName",
  async (name: string) => {
    if (name.length > 3) {
      return await searchProductByName(name);
    }
    throw new Error("Invalid category or subcategory");
  }
);

export const fetchProductByNameReducers = (
  builder: ActionReducerMapBuilder<ProductsInitalState>
) => {
  builder
    .addCase(fetchProductByNameThunk.pending, state => {
      state.status = "loading";
    })
    .addCase(fetchProductByNameThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      const newProducts = action.payload.filter(product => {
        // Check if the product already exists in the state
        return !state.products.some(p => p._id === product._id);
      });
      state.products = [...state.products, ...newProducts];
    })
    .addCase(fetchProductByNameThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
};
