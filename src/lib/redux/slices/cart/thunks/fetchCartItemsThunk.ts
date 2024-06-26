import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CartInitalState } from "../cart-slice";
import { getSession } from "next-auth/react";
import { Fetch } from "@/lib/actions/fetch";

export const fetchCartItemsThunk = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    const session = await getSession();
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    if (!session?.user) {
      return cart;
    }
    const { items } = await Fetch(`cart/user/items`, {}, "secure");
    return [...items, ...cart];
  }
);

export const fetchCartItemsReducers = (
  builder: ActionReducerMapBuilder<CartInitalState>
) => {
  builder
    .addCase(fetchCartItemsThunk.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchCartItemsThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    })
    .addCase(fetchCartItemsThunk.rejected, (state, action) => {
      state.status = "failed";
      state.items = [];
      state.error = action.error.message;
    });
};
