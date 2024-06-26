"use client";
import WishlistItems from "@/components/page-layout/header/wishlist/wishlist-items";
import Search from "@/components/shared/search-input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function WishlistPage() {
  const [q, setQ] = useState("");
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-5 items-center justify-between ">
        <div className="col-span-3">
          <h1 className="text-lg font-medium">Wishlist</h1>
          <p className="text-sm text-muted-foreground">
            Your favorite products
          </p>
        </div>
        <div className="col-span-2">
          <Search handleValueChange={setQ} querykey="q" />
        </div>
      </section>
      <Separator />
      <WishlistItems q={q} />
    </div>
  );
}
