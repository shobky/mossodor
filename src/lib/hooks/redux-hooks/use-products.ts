import {
  selectFilters,
  selectProductsSlice,
} from "@/lib/redux/slices/products/products-slice";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { useEffect, useMemo, useState } from "react";
import { fetchPaginatedProductsThunk } from "@/lib/redux/slices/products/thunks/fetch-paginated-products-thunk";
import { useInfiniteScroll } from "../use-infinite-scroll";
import { useShopControls } from "../use-shop-controls";
import { fetchFilteredProductsThunk } from "@/lib/redux/slices/products/thunks/fetch-filtered-products-thunk";
import { debounce } from "lodash";

export const useProducts = (limit?: number) => {
  const {
    products,
    status: productsStatus,
    totalProducts,
  } = useSelector(selectProductsSlice);

  const [page, setPage] = useState(0);
  const { filters } = useShopControls("q");
  const dispatch = useDispatch();

  const debouncedFetchFilteredData = useMemo(
    () => debounce(async (filters) => {
      await dispatch(
        fetchFilteredProductsThunk({
          filters: filters,
          page: 0, // Reset to first page when filters change
          pageSize: limit ?? 20,
        })
      );
      setPage(1); // Set to 1 for next page fetch
    }, 300),
    [dispatch, limit]
  );

  useEffect(() => {
    debouncedFetchFilteredData(filters);
    return () => debouncedFetchFilteredData.cancel();
  }, [filters, debouncedFetchFilteredData]);

  const fetchMoreData = async () => {
    if (totalProducts && products.length >= totalProducts) return;

    if (filters.length > 0) {
      await dispatch(
        fetchFilteredProductsThunk({
          filters: filters,
          page,
          pageSize: limit ?? 20,
        })
      );
    } else {
      await dispatch(
        fetchPaginatedProductsThunk({
          page,
          pageSize: limit ?? 20,
        })
      );
    }
    setPage(page + 1);
  };

  const isFetching = useInfiniteScroll(fetchMoreData);
  const loading = productsStatus === "loading";

  useEffect(() => {
    if (productsStatus === "idle") {
      fetchMoreData();
    }
  }, [productsStatus, dispatch]);

  return { products, loading, isFetching, productsStatus };
};