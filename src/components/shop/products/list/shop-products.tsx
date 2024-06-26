"use client";
import React from "react";
import FilteredProducts from "./filtered-products";
import { useProducts } from "@/lib/hooks/redux-hooks/use-products";

export default function ShopProducts({ limit }: { limit?: number }) {
  const { products, loading, isFetching } = useProducts(limit);
  return (
    <FilteredProducts
      products={products}
      loading={loading}
      isFetching={isFetching}
    />
  );
}
