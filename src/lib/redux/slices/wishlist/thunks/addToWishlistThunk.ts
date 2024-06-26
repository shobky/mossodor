import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "@/lib/types";
import { toast } from "sonner";
import { WishlistInitalState } from "../wishlist-slice";
import { getSession } from "next-auth/react";
import { Fetch } from "@/lib/actions/fetch";

export const addToWishlistThunk = createAsyncThunk(
  "wishlist/addToWishlist",
  async (item: IProduct) => {
    const session = (await getSession()) as any;
    if (!session?.user?._id) return item;
    await Fetch(
      `wishlist/${session.user?._id}/${item._id}`,
      {
        method: "POST",
      },
      "secure"
    );
    return item;
  }
);

export const addToWishlistReducers = (
  builder: ActionReducerMapBuilder<WishlistInitalState>
) => {
  builder
    .addCase(addToWishlistThunk.pending, (state) => {})
    .addCase(addToWishlistThunk.fulfilled, (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex === -1) {
        toast.success(`Added ${action.payload.name} to your wishlist.`);
        state.items.push(action.payload);
      }
    })
    .addCase(addToWishlistThunk.rejected, (state, action) => {
      state.error = action.error.message;
    });
};
