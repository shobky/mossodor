"use client";

import NumberBadge from "@/components/shared/number-badge";
import { useWishlist } from "@/lib/hooks/redux-hooks/use-wishlist";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function WishlistLink() {
  const { count } = useWishlist();
  return (
    <Link href={"/account/wishlist"} className="relative w-fit">
      {count > 0 && (
        <NumberBadge
          className="absolute text-xs p-1 scale-[.65] -bottom-[3px] right-0 font-semibold border-2  z-[25] w-[21px] h-[21px]"
          count={count}
        />
      )}
      <Heart
        size={32}
        strokeWidth={2.5}
        className="p-1.5 text-inherit rounded-xl relative"
      />
    </Link>
  );
}
