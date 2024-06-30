import { ProductFaqs } from "@/components/product/details/product-faqs";
import ProductDetails from "@/components/product/product-details";
import SimilarProducts from "@/components/product/similar-products";
import { ProductVariationSelector } from "@/components/product/variations/product-variation-selector";
import OpenedDrawer from "@/components/shared/opened-drawer";
import { gerVariationGroup, getProductByName } from "@/lib/api/products.api";
import { IProduct, IVariationGroup } from "@/lib/types";

type Props = {
  params: { name: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PhotoModal({ params: { name } }: Props) {
  let product = null;
  let variationGroup: IVariationGroup | null = null;

  try {
    if (!name) throw new Error();
    // it currently gets a default product using it's id.
    product = await getProductByName(name);
    variationGroup = await gerVariationGroup(product.variationGroupId);

    if (!product) throw new Error();
  } catch (error: any) {
    console.log(error);
  }

  if (!product) return <div>Product not found</div>;

  return (
    <OpenedDrawer>
      <div className="sm:flex items-start gap-[calc(3rem+2.5vw)] pt-[4vh] ">
        <ProductDetails
          product={product}
          variations={variationGroup?.variations || []}
        >
          <ProductVariationSelector variationGroup={variationGroup} />
          <ProductFaqs _id={product._id} />
        </ProductDetails>
      </div>
      <SimilarProducts product={product} />
    </OpenedDrawer>
  );
}
