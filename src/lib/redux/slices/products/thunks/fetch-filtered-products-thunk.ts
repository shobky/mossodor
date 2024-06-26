import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsInitalState } from "../products-slice";
import { getFilteredProducts } from "@/lib/api/products.api";

export const fetchFilteredProductsThunk = createAsyncThunk(
  "products/fetchFilteredProducts",
  async (data: {
    categorySlug?: string;
    subCategorySlug?: string;
    filters?: { name: string; value: string[] }[];
    page?: number;
    pageSize?: number;
  }) => {
    return await getFilteredProducts(
      data.categorySlug,
      data.subCategorySlug,
      data.filters,
      data.page,
      data.pageSize
    );
  }
);

export const fetchFilteredProductsReducers = (
  builder: ActionReducerMapBuilder<ProductsInitalState>
) => {
  builder
    .addCase(fetchFilteredProductsThunk.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchFilteredProductsThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      console.log(action.payload);
      state.products = action.payload;
      state.totalProducts = action.payload?.length ?? 0;
    })
    .addCase(fetchFilteredProductsThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
};
