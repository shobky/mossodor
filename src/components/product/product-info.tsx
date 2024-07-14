import { IProduct, IVariationGroup } from "@/lib/types";
import React, { Suspense } from "react";
import WishlistContainer from "./wishlist-container";
import BuyButton from "../shared/buy-button";
import CartButtonContainer from "../shop/products/cart-button/cart-button-container";
import { Activity, Loader2 } from "lucide-react";
import { ProductVariationSelector } from "./variations/product-variation-selector";

export default function ProductInfo({
  product,
  variationGroup,
}: {
  product: IProduct;
  variationGroup: IVariationGroup | null;
}) {
  return (
    <div className="space-y-4">
      <section className="flex justify-between items-center">
        <p className=" font-medium  scale-75 -ml-4   text-white bg-green-600 border-[1.5px] border-white  border-dashed dark:text-white flex gap-2 items-center  py-2 px-4 text-sm rounded-full ">
          <Activity strokeWidth={2.5} size={12} /> In Stock
        </p>
        <WishlistContainer product={product} />
      </section>
      <div className="space-y-4">
        <p className="text-4xl font-bold ">{product.name}</p>
        <p className="text-3xl font-bold">£{product.price}</p>
        <h2 className="text-secondary-foreground  leading-[1.3rem] w-[85%] ">
          {product.description}
        </h2>

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
