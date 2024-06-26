import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsInitalState } from "../products-slice";
import { getPaginatedProducts } from "@/lib/api/products.api";

export const fetchPaginatedProductsThunk = createAsyncThunk(
  "products/fetchPaginatedProducts",
  async (data: { page: number; pageSize: number }) => {
    return await getPaginatedProducts(data.page, data.pageSize);
  }
);

export const fetchPaginatedProductsReducers = (
  builder: ActionReducerMapBuilder<ProductsInitalState>
) => {
  builder
    .addCase(fetchPaginatedProductsThunk.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchPaginatedProductsThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      const newProducts = action.payload.products.filter((product) => {
        return !state.products.some((p) => p._id === product._id);
      });
      newProducts.forEach((product) => {
        state.products.push(product);
      });
      state.totalProducts = action.payload.count;
    })
    .addCase(fetchPaginatedProductsThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
};
