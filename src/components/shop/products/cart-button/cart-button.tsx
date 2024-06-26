"use client";
import NumberBadge from "@/components/shared/number-badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/hooks/redux-hooks/use-cart";
import { addToCartThunk } from "@/lib/redux/slices/cart/thunks/addToCartThunk";
import { useDispatch } from "@/lib/redux/store";
import { IProduct } from "@/lib/types";
import {
  Check,
  CheckCircle2,
  Loader2,
  PlusCircle,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import React, { useMemo, useState } from "react";

export default function CartButton({
  product,
  render,
  cartItems,
}: {
  product: IProduct;
  render: "icon" | "button";
  cartItems: any[];
}) {
  const [status, setStatus] = useState("idle");
  const [loading, setLoading] = useState(false);

  const item = useMemo(
    () =>
      cartItems ? cartItems.find((item) => item._id === product._id) : null,
    [cartItems, product]
  );

  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    try {
      setLoading(true);
      await dispatch(addToCartThunk(product));
      setStatus("click");
      setTimeout(() => setStatus("idle"), 500);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (render === "button")
    return (
      <Button
        disabled={item}
        onClick={handleAddToCart}
        className="font-semibold gap-2 ease-in-out duration-300"
      >
        {item ? (
          <>
            <Check size={15} className="text-green-500" /> In cart
          </>
        ) : loading ? (
          <Loader2 className="animate-spin" size={15} strokeWidth={3} />
        ) : (
          <>
            <ShoppingBag size={15} /> Add to cart
          </>
        )}
      </Button>
    );

  return (
    <Button
      onClick={handleAddToCart}
      onMouseEnter={() => setStatus("hover")}
      onMouseLeave={() => setStatus("idle")}
      variant={"outline"}
      size={"icon"}
      className={`rounded-full scale-75 transition-colors `}
    >
      {loading ? (
        <Loader2 className="animate-spin" size={15} strokeWidth={3} />
      ) : (
        <ShoppingCart size={20} strokeWidth={2.5} />
      )}
      <span
        className={`absolute -top-2 -right-2 text-white ${
          status === "click" && "animate-bounce duration-300 "
        }`}
      >
        {item ? (
          item.quantity > 1 ? (
            <NumberBadge
              className="text-white bg-green-700 border-white w-[23px]"
              count={item.quantity}
            />
          ) : (
            <CheckCircle2 fill={"green"} size={23} strokeWidth={2} />
          )
        ) : (
          <PlusCircle
            className="transition-colors "
            fill={item ? "green" : ""}
            size={23}
            strokeWidth={2}
          />
        )}
      </span>
    </Button>
  );
}
