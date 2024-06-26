import { fetchWishlistItemsThunk } from "@/lib/redux/slices/wishlist/thunks/fetchWishlistItemsThunk";
import { selectWishlistSlice } from "@/lib/redux/slices/wishlist/wishlist-slice";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { useEffect, useMemo } from "react";

export const useWishlist = () => {
  const { items, status } = useSelector(selectWishlistSlice);

  const dispatch = useDispatch();
  const count = useMemo(() => items?.length || 0, [items]);

  const loading = status === "idle" || status === "loading";


  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWishlistItemsThunk());
    }
  }, []);

  return { items, loading, count };
};
