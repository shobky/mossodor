"use client";
import { IProduct } from "@/lib/types";
import { WhichLIstButton } from "./whishlist-button";
import { useWishlist } from "@/lib/hooks/redux-hooks/use-wishlist";

export default function WishsitButtonContainer({
  product,
}: {
  product: IProduct;
}) {
  const { items } = useWishlist();
  return <WhichLIstButton wishlsitItems={items} product={product} />;
}
