"use client";

import { useWishlist } from "@/lib/hooks/redux-hooks/use-wishlist";
import { useShopControls } from "@/lib/hooks/use-shop-controls";
import { IProduct } from "@/lib/types";
import React, { useEffect } from "react";
import ProductCard from "../product-card";
import { Loader2 } from "lucide-react";
import { useCart } from "@/lib/hooks/redux-hooks/use-cart";
import { fetchFilteredProductsThunk } from "@/lib/redux/slices/products/thunks/fetch-filtered-products-thunk";
import { useDispatch } from "@/lib/redux/store";
import { Skeleton } from "@/components/ui/skeleton";

export default function FilteredProducts({
  products,
  categorySlug,
  subCategorySlug,
  loading,
  isFetching,
}: {
  products: IProduct[];
  categorySlug?: string;
  subCategorySlug?: string;
  loading?: boolean;
  isFetching?: boolean;
}) {
  const { items: wishlsitItems } = useWishlist();
  const { items: cartItems } = useCart();

  const { filters, query } = useShopControls(
    "q",
    categorySlug,
    subCategorySlug
  );

  const filteredProducts = products.filter((product) => {
    // Check if the filters array is empty
    if (filters.length === 0) {
      // If no filters are specified, return all products
      return (
        query === "" || product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Check if the product name matches the query
    if (
      query !== "" &&
      !product.name.toLowerCase().includes(query.toLowerCase())
    ) {
      return false;
    }

    // Check if the product matches any of the filters
    return filters.some((filter) => {
      return product.otherSpecifications.some((spec) => {
        return (
          spec.name === filter.name &&
          spec.value.some((value: string) => filter.value.includes(value))
        );
      });
    });
  });

  return (
    <div className="w-full">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] z-[8]  ">
        {filteredProducts?.map((product: IProduct, i) => (
          <ProductCard
            cartItems={cartItems}
            wishlsitItems={wishlsitItems}
            key={product._id}
            product={product}
          />
        ))}
        {loading &&
          Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className="grid place-content-center aspect-square"
            >
              <Loader2 className="animate-spin" />
            </Skeleton>
          ))}
      </div>
      {products.length === 0 || filteredProducts.length === 0 ? (
        <div className="text-muted-foreground flex w-full h-full justify-center  mt-[20vh] sticky top-[10vh]">
          {products.length === 0
            ? " Seems like there is no products in this category."
            : filteredProducts.length === 0
            ? "Seems like there is no products with such attributes."
            : null}
        </div>
      ) : null}
      {isFetching && (
        <div className="flex justify-center items-center pt-8 text-muted-foreground">
          <Loader2 className="animate-spin" />
        </div>
      )}
    </div>
  );
}
