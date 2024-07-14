import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "@/lib/types";
import { CartInitalState } from "../cart-slice";
import { toast } from "sonner";
import { Fetch } from "@/lib/actions/fetch";
import { getSession } from "next-auth/react";
import { sendOrderConfirmationEmail } from "@/lib/utils/send-email";

export const addToCartThunk = createAsyncThunk(
  "cart/addToCart",
  async (item: any) => {
    const session = await getSession();
    if (!session?.user) {
      const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
      const itemIndex = cart.findIndex(
        (cartItem: any) => cartItem.sku === item.sku
      );
      if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        return item;
      }
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...item, quantity: 1 }])
      );
      return item;
    }
    await Fetch(
      `cart/add/${item._id}`,
      {
        method: "POST",
      },
      "secure"
    );
    return item;
  }
);

export const addToCartReducers = (
  builder: ActionReducerMapBuilder<CartInitalState>
) => {
  builder
    .addCase(addToCartThunk.pending, (_) => {})
    .addCase(addToCartThunk.fulfilled, (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.sku === action.payload.sku
      );
      if (itemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[itemIndex] = {
          ...state.items[itemIndex],
          quantity: state.items[itemIndex].quantity + 1,
        };
      }
    })
    .addCase(addToCartThunk.rejected, (state, action) => {
      state.error = action.error.message;
    });
};
