import { useState } from "react";
import { useQueryParams } from "./use-query-params";
import { useDispatch, useSelector } from "../redux/store";
import {
  productsSlice,
  selectFilters,
} from "../redux/slices/products/products-slice";

export const useShopControls = (
  queryKey: string,
  category_slug?: string,
  subCategory_slug?: string
) => {
  const { getParam } = useQueryParams();
  const queryParam = getParam(queryKey) || "";
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleFilters = (name: string, value: string) => {
    let newFilters = filters.map((filter) => ({ ...filter })); // Create a deep copy of filters
    const index = newFilters.findIndex((f) => f.name.replace(" ", "_") === name.replace(" ", "_"));
  
    if (index === -1) {
      // If the filter name doesn't exist, add a new filter with the value
      newFilters.push({ name, value: [value] });
    } else {
      const valueExists = newFilters[index].value.includes(value);
      if (valueExists) {
        // If the value exists, remove it from the filter
        newFilters[index].value = newFilters[index].value.filter((v) => v !== value);
        // If the filter has no more values, remove the entire filter
        if (newFilters[index].value.length === 0) {
          newFilters.splice(index, 1);
        }
      } else {
        // If the value doesn't exist, add it to the filter
        newFilters[index].value = [...newFilters[index].value, value];
      }
    }
  
    // Dispatch the updated filters
    dispatch(productsSlice.actions.setFilters(newFilters));
  };

  return {
    query: queryParam,
    filters,
    handleFilters,
  };
};
