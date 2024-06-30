import Shop from "@/components/shop";

export default async function ShopSubCategoryLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { category: string; subCategory: string };
}>) {
  return (
    <Shop categorySlug={params.category} subCategorySlug={params.subCategory}>
      {children}
    </Shop>
  );
}
