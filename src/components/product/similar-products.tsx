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
    <div className="py-20 space-y-4">
      <h4 className="text-center text-xl font-semibold">
        {product.name} Similar Products
      </h4>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
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
