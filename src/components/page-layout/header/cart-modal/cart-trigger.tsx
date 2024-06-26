"use client"
import NumberBadge from "@/components/shared/number-badge";
import { useCart } from "@/lib/hooks/redux-hooks/use-cart";
import { ShoppingBag } from "lucide-react";

export default function CartTrigger() {
  const { totalCount } = useCart();

  return (
    <div className="relative">
      {totalCount > 0 && (
        <NumberBadge
          className="absolute text-xs p-1 scale-[.65] -bottom-[3px] right-0 font-semibold border-2  z-[25] w-[21px] h-[21px]"
          count={totalCount}
        />
      )}
      <ShoppingBag
        size={32}
        strokeWidth={2}
        className="p-1.5 text-inherit rounded-xl relative"
      />
    </div>
  );
}
