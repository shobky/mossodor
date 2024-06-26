"use client";
import ProductCard from "@/components/shop/products/product-card";
import { useCart } from "@/lib/hooks/redux-hooks/use-cart";
import { useWishlist } from "@/lib/hooks/redux-hooks/use-wishlist";
import EmptyWishlistMsg from "./empty-wishlist-msg";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";

export default function WishlistItems({ q }: { q: string }) {
  const session = useSession();

  const { items, count, loading } = useWishlist();
  const { items: cartItems } = useCart();
  if (count === 0) return null;

  const filteredItems = items.filter((item) => {
    if (item.name.toLowerCase().includes(q.toLowerCase())) return true;
    if (item.description.toLowerCase().includes(q.toLowerCase())) return true;
    if (item.sku.toLowerCase().includes(q.toLowerCase())) return true;
  });

  if (loading)
    return (
      <div className="grid w-full h-[60vh] place-content-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  return (
    <>
      <EmptyWishlistMsg
        isAuthenticated={session?.status === "authenticated" ? true : false}
      />
      <div className="pb-[10vh] space-y-4">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
          {filteredItems.map((item) => (
            <div key={item._id} className="w-full ">
              <ProductCard
                cartItems={cartItems}
                wishlsitItems={items}
                product={item}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
