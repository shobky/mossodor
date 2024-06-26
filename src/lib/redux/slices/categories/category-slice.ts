import { ICategory } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesReducers } from "./thunks/fetch-categories-thunk";

export interface CategoriesInitialState {
  categories: ICategory[];
  status: "idle" | "loading" | "failed" | "success";
  error: string | undefined;
}

export const categoriesInitialState: CategoriesInitialState = {
  categories: [],
  status: "idle",
  error: undefined,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoriesInitialState,
  reducers: {
  },
  extraReducers: (builder) => {
    fetchCategoriesReducers(builder);
  }
});

export const selectCategoriesSlice = (state: { categories: CategoriesInitialState }) => state.categories;