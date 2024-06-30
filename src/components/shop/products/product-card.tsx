import { IProduct } from "@/lib/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import CartButton from "./cart-button/cart-button";
import { WhichLIstButton } from "../wishlist-button/whishlist-button";

export default function ProductCard({
  query,
  product,
  wishlsitItems,
  cartItems,
}: {
  query?:string
  product: IProduct;
  wishlsitItems: IProduct[];
  cartItems: any[];
}) {
  return (
    <div className="group ">
      <div className="rounded-2xl aspect-square overflow-hidden">
        <div className="relative bg-muted group-hover:bg-foreground/5  rounded-xl ">
          <Link scroll={false} prefetch href={`/products/${product.name}?q=${query}`}>
            <Image
              src={product.thumpnail}
              alt={product.altText}
              className="object-contain aspect-square transition-transform duration-300 ease-in-out group-hover:brightness-[1.1] rounded-xl group-hover:scale-110"
              width={500}
              height={500}
            />
          </Link>
          <div className="absolute bottom-0 right-0 hidden m-2 sm:flex ">
            <CartButton cartItems={cartItems} render="icon" product={product} />
            <WhichLIstButton wishlsitItems={wishlsitItems} product={product} />
          </div>
        </div>
      </div>
      <Link
        scroll={false}
        prefetch
        href={`/products/${product.name}`}
        className="grid p-1 cursor-pointer group "
      >
        <p className="text-lg font-bold">£{product.price}</p>
        <p className="font-medium ">{product.name}</p>
      </Link>
    </div>
  );
}
