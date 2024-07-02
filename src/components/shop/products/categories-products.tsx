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
    const { products: data } = await getFilteredProducts(category, subCategory);
    products = data;
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
