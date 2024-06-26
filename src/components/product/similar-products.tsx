import ProductCard from "../shop/products/product-card";
import { IProduct } from "@/lib/types";
import { getSimilarProducts } from "@/lib/api/products.api";

export default async function SimilarProducts({
  product,
}: {
  product: IProduct;
}) {
  let products: IProduct[] = [];
  try {
    products = await getSimilarProducts(product.categoryIds);
  } catch (err: any) {
    console.log(err);
  }

  return (
    <div className=" p-10 sm:p-20 space-y-4">
      <p className="text-center text-xl font-medium">
        Similar Products to {product.name}
      </p>
      <div className="grid gap-4 grid-cols-3 mx-[7.5vw] ">
        {products
          ?.filter((p) => p._id !== product._id)
          .slice(0, 6)
          .map((product) => (
            <ProductCard
              cartItems={[]}
              key={product._id}
              product={product}
              wishlsitItems={[]}
            />
          ))}
      </div>
    </div>
  );
}
