import { IProduct, IVariationGroup } from "@/lib/types";
import React, { Suspense } from "react";
import WishlistContainer from "./wishlist-container";
import BuyButton from "../shared/buy-button";
import CartButtonContainer from "../shop/products/cart-button/cart-button-container";
import { Activity, Loader2 } from "lucide-react";
import { ProductVariationSelector } from "./variations/product-variation-selector";
import ProductStock from "./product-stock";
import ProductPrice from "./product-price";

export default function ProductInfo({
  product,
  variationGroup,
}: {
  product: IProduct;
  variationGroup: IVariationGroup | null;
}) {
  return (
    <div className="space-y-4">
      <section className="flex items-center justify-between   w-full">
        <ProductStock stock={product.stock} />
        <WishlistContainer product={product} />
      </section>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold ">{product.name}</h1>
        <ProductPrice
          name={product.name}
          discount={product.discount}
          price={product.price}
        />
        <article>
          <h2>{product.name}</h2>
          <p className="text-secondary-foreground  leading-[1.3rem] sm:w-[85%] ">
            {product.description}
          </p>
        </article>

        <Suspense
          fallback={
            <p>
              variations <Loader2 className="animate-spin" />
            </p>
          }
        >
          <ProductVariationSelector
            variationGroup={variationGroup}
            product={product}
          />
        </Suspense>
        <section className="flex gap-2">
          <CartButtonContainer render="button" product={product} />
          <BuyButton
            productName={product.name}
            buyingSingleProduct={true}
            items={[
              {
                _id: product._id,
                name: product.name,
                description: product.description,
                thumpnail: product.thumpnail,
                price: product.price,
                quantity: 1,
              },
            ]}
            total={String(product.price)}
          />
        </section>
      </div>
    </div>
  );
}
