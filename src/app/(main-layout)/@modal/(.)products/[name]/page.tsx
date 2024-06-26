import ProductDetails from "@/components/product/product-details";
import SimilarProducts from "@/components/product/similar-products";
import OpenedDrawer from "@/components/shared/opened-drawer";
import { getProductByName } from "@/lib/api/products.api";
import { IProduct } from "@/lib/types";

type Props = {
  params: { name: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PhotoModal({ params: { name } }: Props) {
  let product: IProduct | undefined = undefined;
  try {
    if (!name) throw new Error();
    // it currently gets a default product using it's id.
    product = await getProductByName(name);
    if (!product) throw new Error();
  } catch (error: any) {
    console.log(error);
  }
  if (!product) return <div>Product not found</div>;

  return (
    <OpenedDrawer>
      <div className="sm:flex items-start gap-[calc(3rem+2.5vw)] pt-[4vh] ">
        <ProductDetails product={product} />
      </div>
      <SimilarProducts product={product} />
    </OpenedDrawer>
  );
}
