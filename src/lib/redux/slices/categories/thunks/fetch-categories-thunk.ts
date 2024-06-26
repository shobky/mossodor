import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesInitialState } from "../category-slice";
import { getPopulatedCategories } from "@/lib/api/categories.api";

export const fetchCategoriesThunk = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    return await getPopulatedCategories();
  }
);

export const fetchCategoriesReducers = (
  builder: ActionReducerMapBuilder<CategoriesInitialState>
) => {
  builder
    .addCase(fetchCategoriesThunk.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
      state.status = "success";
      state.categories = action.payload;
    })
    .addCase(fetchCategoriesThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
};
