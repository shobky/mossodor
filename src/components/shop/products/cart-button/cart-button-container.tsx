"use client";
import { IProduct } from "@/lib/types";
import CartButton from "./cart-button";
import { useCart } from "@/lib/hooks/redux-hooks/use-cart";

export default function CartButtonContainer({
  product,
  render,
}: {
  product: IProduct;
  render: "button" | "icon";
}) {
  const { items } = useCart();
  return <CartButton cartItems={items} render={render} product={product} />;
}
