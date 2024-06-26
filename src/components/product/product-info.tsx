import { IProduct } from "@/lib/types";
import React from "react";
import WishlistContainer from "./wishlist-container";
import BuyButton from "../shared/buy-button";
import CartButtonContainer from "../shop/products/cart-button/cart-button-container";
import { Activity, ArrowDownFromLine } from "lucide-react";

export default function ProductInfo({ product }: { product: IProduct }) {
  return (
    <div className="space-y-4">
      <section className="flex justify-between items-baseline">
        <p className=" font-medium text-green-600 flex gap-2 items-center bg-green-200/50 py-1.5 px-2 text-xs rounded-full ">
          <Activity strokeWidth={2.5} size={12} /> IN STOCK
        </p>
        <WishlistContainer product={product} />
      </section>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold ">{product.name}</h1>
        <p className="text-3xl font-bold">£{product.price}</p>
        <h2 className="text-secondary-foreground text-sm leading-[1.3rem] text-justify-inter ">
          {product.description}
        </h2>

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
            total={product.price.toString()}
          />
        </section>
      </div>
    </div>
  );
}
