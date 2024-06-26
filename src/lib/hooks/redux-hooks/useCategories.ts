import { selectCategoriesSlice } from "@/lib/redux/slices/categories/category-slice";
import { fetchCategoriesThunk } from "@/lib/redux/slices/categories/thunks/fetch-categories-thunk";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { useEffect } from "react";

export const useCategories = () => {
  const { categories, status, error } = useSelector(selectCategoriesSlice);
  const loading = status === "idle" || status === "loading";

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(fetchCategoriesThunk());
  }, [status, dispatch]);

  return { categories, loading, status, error };
};
