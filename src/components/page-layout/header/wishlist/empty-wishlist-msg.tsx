"use client";
import { useWishlist } from "@/lib/hooks/redux-hooks/use-wishlist";
import Link from "next/link";
import React from "react";

export default function EmptyWishlistMsg({
  isAuthenticated = false,
}: {
  isAuthenticated?: boolean;
}) {
  const { count } = useWishlist();
  if (count > 0) return null;
  return (
    <div className=" flex items-start gap-1 ">
      <p className="">You haven&apos;t liked any items yet. </p>{" "}
      {isAuthenticated ? (
        <p className="">
          <Link href="/shop" className="underline">
            start shopping
          </Link>
        </p>
      ) : (
        <p className="">
          <Link href="/login" className="underline">
            Sign in
          </Link>{" "}
          to see if you have saved items.
        </p>
      )}
    </div>
  );
}
