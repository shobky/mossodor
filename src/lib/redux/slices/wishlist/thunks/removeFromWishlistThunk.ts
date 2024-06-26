import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { WishlistInitalState } from "../wishlist-slice";
import { getSession } from "next-auth/react";
import { Fetch } from "@/lib/actions/fetch";

export const removeFromWishlistThunk = createAsyncThunk(
  "products/removeFromWishlist",
  async (_id: string | undefined) => {
    const session = (await getSession()) as any;
    if (!session?.user?._id) return _id;
    await Fetch(
      `Wishlist/${session.user?._id}/${_id}`,
      {
        method: "DELETE",
      },
      "secure"
    );
    return _id;
  }
);

export const removeFromWishlistReducers = (
  builder: ActionReducerMapBuilder<WishlistInitalState>
) => {
  builder
    .addCase(removeFromWishlistThunk.pending, (state) => {})
    .addCase(removeFromWishlistThunk.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    })
    .addCase(removeFromWishlistThunk.rejected, (state, action) => {
      state.error = action.error.message;
    });
};
