import OpenedDrawer from "@/components/shared/opened-drawer";
import ProductContainer from "./_container";
import { Suspense } from "react";
import { ProductPageSkeleton } from "@/components/shared/loading/product-page-skeleton";

type Props = {
  params: { name: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PhotoModal({ params: { name } }: Props) {
  return (
    <OpenedDrawer>
      <Suspense fallback={<ProductPageSkeleton />}>
        <ProductContainer name={name} />
      </Suspense>
    </OpenedDrawer>
  );
}
