import {
  selectFilters,
  selectProductsSlice,
} from "@/lib/redux/slices/products/products-slice";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { useEffect, useState } from "react";
import { fetchPaginatedProductsThunk } from "@/lib/redux/slices/products/thunks/fetch-paginated-products-thunk";
import { useInfiniteScroll } from "../use-infinite-scroll";
import { useShopControls } from "../use-shop-controls";
import { fetchFilteredProductsThunk } from "@/lib/redux/slices/products/thunks/fetch-filtered-products-thunk";

export const useProducts = (limit?: number) => {
  const {
    products,
    status: productsStatus,
    totalProducts,
  } = useSelector(selectProductsSlice);

  const [page, setPage] = useState(0);
  const { filters } = useShopControls("q");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFilteredData = async () => {
      await dispatch(
        fetchFilteredProductsThunk({
          filters: filters,
          page,
          pageSize: limit ?? 20,
        })
      );
    };
    fetchFilteredData();
  }, [filters]);

  const fetchMoreData = async () => {
    if (totalProducts && products.length >= totalProducts) return; // All data has been fetched
    if (filters.length > 0) return; // All products with this filter has been fetched

    await dispatch(
      fetchPaginatedProductsThunk({
        page,
        pageSize: limit ?? 20,
      })
    );
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
