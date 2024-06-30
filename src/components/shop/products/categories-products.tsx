import React from "react";
import { IProduct } from "@/lib/types";
import { getFilteredProducts } from "@/lib/api/products.api";
import FilteredProducts from "@/components/shop/products/filtered-products";

export const CategoriesProducts = async ({
  category,
  subCategory,
}: {
  category: string;
  subCategory?: string;
}) => {
  let products: IProduct[] = [];
  try {
    products = await getFilteredProducts(category, subCategory);
  } catch (err: any) {
    console.log(err);
  }
  return (
    <FilteredProducts
      products={products}
      categorySlug={category}
      subCategorySlug={subCategory}
    />
  );
};
