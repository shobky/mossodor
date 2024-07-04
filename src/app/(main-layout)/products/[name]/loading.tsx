import { Padding } from "@/components/page-layout";
import { ProductPageSkeleton } from "@/components/shared/loading/product-page-skeleton";

export default function Loading() {
  return (
    <>
      <hr />
      <Padding>
        <ProductPageSkeleton />;
      </Padding>
    </>
  );
}
