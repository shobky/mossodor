import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../store";
import { addToCartReducers } from "./thunks/addToCartThunk";
import { removeFromCartReducers } from "./thunks/removeFromCartThunk";
import { fetchCartItemsReducers } from "./thunks/fetchCartItemsThunk";
import { updateCartItemReducers } from "./thunks/updateItemQtyThunk";
import { clearCartReducers } from "./thunks/clearCartThunk";

export interface CartInitalState {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

export const CartInitialState: CartInitalState = {
  items: [],
  status: "idle",
  error: undefined,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState: CartInitialState,
  reducers: {},
  extraReducers: (builder) => {
    fetchCartItemsReducers(builder);
    addToCartReducers(builder);
    removeFromCartReducers(builder);
    updateCartItemReducers(builder);
    clearCartReducers(builder);
  },
});

export const selectCartSlice = (state: State) => state.cart;
