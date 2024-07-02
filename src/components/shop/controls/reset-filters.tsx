"use client";

import {
  productsSlice,
  selectFilters,
} from "@/lib/redux/slices/products/products-slice";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { ListRestart, RotateCcw, SlidersHorizontal } from "lucide-react";

export const ResetFilters = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  return (
    <div>
      {filters.length > 0 ? (
        <button
          className="text-sm flex gap-1 items-center"
          onClick={() => dispatch(productsSlice.actions.resetFilters())}
        >
          <RotateCcw size={20} strokeWidth={2.2} /> 
          <span className="sr-only">Reset</span>
        </button>
      ) : (
        <SlidersHorizontal className="hidden lg:block" size={18} />
      )}
    </div>
  );
};
