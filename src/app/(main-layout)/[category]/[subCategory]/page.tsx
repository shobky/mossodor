import { CategoriesProducts } from "@/components/shop/products/categories-products";

export default async function ShopBySubCategoryPage({
  params,
}: {
  params: { category: string; subCategory: string };
}) {
  return (
    <CategoriesProducts
      category={params.category}
      subCategory={params.subCategory}
    />
  );
}
