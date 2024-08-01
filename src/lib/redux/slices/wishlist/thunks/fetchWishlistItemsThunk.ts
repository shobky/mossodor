import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { WishlistInitalState } from "../wishlist-slice";
import { getSession } from "next-auth/react";
import { Fetch } from "@/lib/actions/fetch";

export const fetchWishlistItemsThunk = createAsyncThunk(
  "wishlist/fetchWishlistItems",
  async () => {
    const session = (await getSession()) as any;
    if (!session?.user?._id) return [];
    const { items } = await Fetch(
      `Wishlist/${session.user?._id}/items`,
      {
        cache: "force-cache",
        next: {
          tags: ["wishlist"],
        },
      },
      "secure"
    );
    return items;
  }
);

export const fetchWishlistItemsReducers = (
  builder: ActionReducerMapBuilder<WishlistInitalState>
) => {
  builder
    .addCase(fetchWishlistItemsThunk.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchWishlistItemsThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    })
    .addCase(fetchWishlistItemsThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
};
