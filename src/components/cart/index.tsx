"use client";

import { useCart } from "@/lib/hooks/redux-hooks/use-cart";
import CartItemsContainer from "./items-container";
import CartControl from "./cart-control";

export default function Cart() {
  const { items, count, total } = useCart();
  if (!count || count === 0) return <p>No items in the cart</p>;
  
  return (
    <section className="space-y-6">
      <CartControl items={items} total={total} />
      <CartItemsContainer items={items} />
    </section>
  );
}
