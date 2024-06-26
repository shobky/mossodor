import React from "react";
import { IProduct } from "@/lib/types";
import FilteredProducts from "./filtered-products";
import { getFilteredProducts } from "@/lib/api/products.api";

export default async function CategoriesProducts({
  categorySlug,
  subCategorySlug,
}: {
  categorySlug: string;
  subCategorySlug?: string;
}) {
  let products: IProduct[] = [];
  try {
    products = await getFilteredProducts(categorySlug, subCategorySlug);
  } catch (err: any) {
    console.log(err);
  }
  return (
    <FilteredProducts
      products={products}
      categorySlug={categorySlug}
      subCategorySlug={subCategorySlug}
    />
  );
}
