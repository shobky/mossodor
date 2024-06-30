import { Padding } from "@/components/page-layout";
import { ProductFaqs } from "@/components/product/details/product-faqs";
import ProductDetails from "@/components/product/product-details";
import { ProductVariationSelector } from "@/components/product/variations/product-variation-selector";
import SimilarProducts from "@/components/product/similar-products";
import { gerVariationGroup, getProductByName } from "@/lib/api/products.api";
import { IVariationGroup } from "@/lib/types";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { name: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const name = params.name;

  // fetch data
  const product = await getProductByName(name);
  if (!product) {
    return {
      title: "Mossodor",
    };
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.description,
    openGraph: {
      images: [product.thumpnail, ...previousImages],
    },
  };
}

export default async function ProductsPage({ params: { name } }: Props) {
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
    <Padding>
      <div className="sm:flex items-start gap-[calc(3rem+2.5vw)] pt-[5vh]">
        <ProductDetails
          product={product}
          variations={variationGroup?.variations || []}
        >
          <ProductVariationSelector variationGroup={variationGroup} />
          <ProductFaqs _id={product._id} />
        </ProductDetails>
      </div>
      <SimilarProducts product={product} />
    </Padding>
  );
}
