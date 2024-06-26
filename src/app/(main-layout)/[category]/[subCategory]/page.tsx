import CategoriesProducts from "@/components/shop/products/list/categories-products";

export default function ShopBySubCategoryPage({
  params,
}: {
  params: { category: string; subCategory: string };
}) {
  return (
    <CategoriesProducts
      categorySlug={params.category}
      subCategorySlug={params.subCategory}
    />
  );
}
