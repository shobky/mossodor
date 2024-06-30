"use client";
import FilteredProducts from "@/components/shop/products/filtered-products";
import { useProducts } from "@/lib/hooks/redux-hooks/use-products";

export default function ShopPage() {
  const { products, loading, isFetching } = useProducts();
  return (
    <FilteredProducts
      products={products}
      loading={loading}
      isFetching={isFetching}
    />
  );
}
