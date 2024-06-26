import { selectCartSlice } from "@/lib/redux/slices/cart/cart-slice";
import { fetchCartItemsThunk } from "@/lib/redux/slices/cart/thunks/fetchCartItemsThunk";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { useEffect, useMemo } from "react";

export const useCart = () => {
  const { items, status } = useSelector(selectCartSlice);
  const dispatch = useDispatch();

  const count = useMemo(() => items?.length, [items]);

  const totalCount = useMemo(
    () => items?.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const total = useMemo(
    () => items?.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items]
  );
  const loading = status === "idle" || status === "loading";

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCartItemsThunk());
    }
  }, [status, dispatch]);

  return { items, loading, count, total, totalCount };
};
