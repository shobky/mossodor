import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CartInitalState } from "../cart-slice";
import { getSession } from "next-auth/react";
import { Fetch } from "@/lib/actions/fetch";

export const removeFromCartThunk = createAsyncThunk(
  "cart/removeFromCart",
  async (_id: string) => {
    const session = await getSession();
    if (!session?.user) {
      const cart = localStorage.getItem("cart");
      localStorage.setItem(
        "cart",
        JSON.stringify(
          JSON.parse(cart ?? "").filter((item: any) => item._id !== _id)
        )
      );
      return _id;
    }
    await Fetch(
      `cart/user/${_id}`,
      {
        method: "DELETE",
      },
      "secure"
    );
    return _id;
  }
);

export const removeFromCartReducers = (
  builder: ActionReducerMapBuilder<CartInitalState>
) => {
  builder
    .addCase(removeFromCartThunk.pending, (state) => {})
    .addCase(removeFromCartThunk.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    })
    .addCase(removeFromCartThunk.rejected, (state, action) => {
      state.error = action.error.message;
    });
};
