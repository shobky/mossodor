import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CartInitalState } from "../cart-slice";
import { Fetch } from "@/lib/actions/fetch";
import { getSession } from "next-auth/react";

export const updateCartItemThunk = createAsyncThunk(
  "cart/updateCartItem",
  async (data: { _id: string; quantity: number }) => {
    const session = await getSession();
    if (!session?.user) {
      const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
      const updatedCart = cart.map((item: any) => {
        if (data.quantity === 0) {
          return item._id !== data._id;
        }
        if (item._id === data._id) {
          item.quantity = data.quantity;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    await Fetch(
      `cart/user/${data._id}/${data.quantity}`,
      {
        method: "PUT",
      },
      "secure"
    );
    return data;
  }
);

export const updateCartItemReducers = (
  builder: ActionReducerMapBuilder<CartInitalState>
) => {
  builder
    .addCase(updateCartItemThunk.pending, (state) => {})
    .addCase(updateCartItemThunk.fulfilled, (state, action) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (action.payload.quantity === 0) {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      }
      if (item) {
        item.quantity = action.payload.quantity;
      }
    })
    .addCase(updateCartItemThunk.rejected, (state, action) => {
      state.error = action.error.message;
    });
};
