import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CartInitalState } from "../cart-slice";
import { getSession } from "next-auth/react";
import { Fetch } from "@/lib/actions/fetch";

export const clearCartThunk = createAsyncThunk("cart/clearCart", async () => {
  const session = await getSession();
  if (!session?.user) {
    localStorage.removeItem("cart");
    return [];
  }
  await Fetch(
    `cart/user`,
    {
      method: "DELETE",
    },
    "secure"
  );
  return [];
});

export const clearCartReducers = (
  builder: ActionReducerMapBuilder<CartInitalState>
) => {
  builder
    .addCase(clearCartThunk.pending, (state) => {})
    .addCase(clearCartThunk.fulfilled, (state, action) => {
      state.items = action.payload;
    })
    .addCase(clearCartThunk.rejected, (state, action) => {
      state.error = action.error.message;
    });
};
