import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../store";
import { addToWishlistReducers } from "./thunks/addToWishlistThunk";
import { removeFromWishlistReducers } from "./thunks/removeFromWishlistThunk";
import { fetchWishlistItemsReducers } from "./thunks/fetchWishlistItemsThunk";
import { IProduct } from "@/lib/types";

export interface WishlistInitalState {
  items: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

export const WishInitialState: WishlistInitalState = {
  items: [],
  status: "idle",
  error: undefined,
};

export const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState: WishInitialState,
  reducers: {},
  extraReducers: builder => {
    addToWishlistReducers(builder),
      removeFromWishlistReducers(builder),
      fetchWishlistItemsReducers(builder);
  },
});

export const selectWishlistSlice = (state: State) => state.wishlist;
