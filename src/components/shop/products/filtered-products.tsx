"use client";

import { useWishlist } from "@/lib/hooks/redux-hooks/use-wishlist";
import { useShopControls } from "@/lib/hooks/use-shop-controls";
import { IProduct } from "@/lib/types";
import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "./product-card";
import { useCart } from "@/lib/hooks/redux-hooks/use-cart";
import { ProductSkeletonsUnContained } from "@/components/shared/loading/products-skeleton";

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

  const filteredProducts = useMemo(() => {
    return products?.filter((product) => {
      if (filters.length === 0) {
        return (
          query === "" ||
          product.name.toLowerCase().includes(query.toLowerCase())
        );
      }

      if (
        query !== "" &&
        !product.name.toLowerCase().includes(query.toLowerCase())
      ) {
        return false;
      }

      return filters.every((filter) => {
        return product.otherSpecifications.some((spec) => {
          return (
            spec.name === filter.name &&
            spec.value?.some((value: string) => filter.value.includes(value))
          );
        });
      });
    });
  }, [products, filters, query]);

  const isLoading = loading || isFetching;

  return (
    <div className="w-full ">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] z-[8] w-full">
        {filteredProducts.map((product: IProduct) => (
          <ProductCard
            query={query}
            cartItems={cartItems}
            wishlsitItems={wishlsitItems}
            key={product._id}
            product={product}
          />
        ))}
        {isLoading && (
          <ProductSkeletonsUnContained
            showText={products.length > 0}
            length={products.length === 0 ? 5 : 1}
          />
        )}
      </div>
      {!isLoading && filteredProducts.length === 0 && (
        <div className="flex items-center justify-center w-full min-h-[25vh] font-medium text-muted-foreground opacity-80 h-full">
          <p className="text-center">
            {products.length === 0
              ? "Seems like there are no products in this category."
              : "Seems like there are no products with such attributes."}
          </p>
        </div>
      )}
    </div>
  );
}
