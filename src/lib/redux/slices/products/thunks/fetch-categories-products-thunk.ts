import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsInitalState } from "../products-slice";
import { getPaginatedProducts } from "@/lib/api/products.api";

export const fetchCategoriesProductsThunk = createAsyncThunk(
  "products/fetchCategoriesProducts",
  async (data: {
    category_id: string | undefined;
    subCategory_id: string | undefined;
  }) => {
    if (data.category_id && data.subCategory_id) {
      return await getPaginatedProducts(0, 50);
    }
    throw new Error("Invalid category or subcategory");
  }
);

export const fetchCategoriesProductsReducers = (
  builder: ActionReducerMapBuilder<ProductsInitalState>
) => {
  builder
    .addCase(fetchCategoriesProductsThunk.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchCategoriesProductsThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload.products;
    })
    .addCase(fetchCategoriesProductsThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
};
