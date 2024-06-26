import Shop from "@/components/shop";

export default async function ShopLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { category: string; subCategory: string };
}>) {
  return (
    <main className="">
      <Shop categorySlug={params.category} subCategorySlug={params.subCategory}>
        {children}
      </Shop>
    </main>
  );
}
