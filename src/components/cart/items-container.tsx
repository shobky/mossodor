"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Minus, Plus, X } from "lucide-react";
import { useDispatch } from "@/lib/redux/store";
import { removeFromCartThunk } from "@/lib/redux/slices/cart/thunks/removeFromCartThunk";
import { updateCartItemThunk } from "@/lib/redux/slices/cart/thunks/updateItemQtyThunk";

export default function CartItemsContainer({ items }: { items: any }) {
  return (
    <div className="grid gap-2">
      {items?.map((item: any) => (
        <div
          key={"cart-items" + item.sku}
          className="bg-muted p-4 sm:pb-2 pt-10 px-10 rounded-xl sm:flex sm:gap-10 items-center relative"
        >
          <CartItemControl item={item} />
          <Image
            src={item.thumpnail}
            alt={item.altText}
            className="object-contain aspect-square rounded-xl w-full sm:w-32 p-4 sm:p-0 sm:pr-10"
            width={500}
            height={500}
          />
          <div className="space-y-2">
            <p className="text-2xl font-semibold relative w-fit ">
              {item.name}
              <span className="text-muted-foreground">x{item.quantity}</span>
            </p>
           {
            item.otherSpecifications?.length > 0 &&
             <p className="font-medium text-base relative -top-2">
             {[
               item.otherSpecifications.find(
                 (s: any) => s.name.toLowerCase() === "size"
               )?.value,
               item.otherSpecifications.find(
                 (s: any) => s.name.toLowerCase() === "colour"
               )?.value,
             ].filter(s => s!== undefined)
               .join(" + ")
               .replace(",", "")}
           </p>
           }
            <p className="text-2xl font-semibold">
              £{parseFloat(String(item.price * item.quantity)).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const CartItemControl = ({ item }: { item: any }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex absolute right-0 top-0 sm:mx-6 m-4  gap-3 items-center">
      <div className="flex gap-1 items-center">
        <Button
          onClick={() =>
            dispatch(
              updateCartItemThunk({
                sku: item.sku,
                quantity: item.quantity - 1,
              })
            )
          }
          size={"icon"}
          className="w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-foreground text-background p-[3px]"
        >
          <Minus size={25} strokeWidth={2.5} />
        </Button>
        <Button
          onClick={() =>
            dispatch(
              updateCartItemThunk({
                sku: item.sku,
                quantity: item.quantity + 1,
              })
            )
          }
          size={"icon"}
          className="w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-foreground text-background p-[3px] "
        >
          <Plus size={25} strokeWidth={2.5} />
        </Button>
      </div>
      <Button
        onClick={() => dispatch(removeFromCartThunk(item.sku))}
        size={"icon"}
        className="w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-foreground text-background p-[3px]"
      >
        <X size={25} strokeWidth={2.5} />
      </Button>
    </div>
  );
};
