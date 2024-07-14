import { ProductFaqs } from "@/components/product/details/product-faqs";
import ProductDetails from "@/components/product/product-details";
import SimilarProducts from "@/components/product/similar-products";
import { gerVariationGroup, getProductByName } from "@/lib/api/products.api";
import { IVariationGroup } from "@/lib/types";

export default async function ProductContainer({ name }: { name: string }) {
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
    <>
      <div className="sm:flex items-start gap-[calc(3rem+2.5vw)] pt-[4vh] ">
        <ProductDetails variationGroup={variationGroup} product={product}>
          <ProductFaqs _id={product._id} />
        </ProductDetails>
      </div>
      <SimilarProducts product={product} />
    </>
  );
}
