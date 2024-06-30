"use client";

import {
  productsSlice,
  selectFilters,
} from "@/lib/redux/slices/products/products-slice";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { ListRestart, SlidersHorizontal } from "lucide-react";

export const ResetFilters = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  return (
    <div>
      {filters.length > 0 ? (
        <button onClick={() => dispatch(productsSlice.actions.resetFilters())}>
          <ListRestart size={18} />
        </button>
      ) : (
        <SlidersHorizontal className="hidden lg:block" size={18} />
      )}
    </div>
  );
};
