"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

// this is the product card displayed in the popular products section in home.
export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product.name}`}>
      <div className="group cursor-pointer rounded-3xl grid">
        <div className="bg-secondary/50 p-4 hover:bg-secondary/20  rounded-3xl aspect-square overflow-hidden">
          <Image
            src={product.thumpnail}
            width={250}
            height={200}
            alt={product.title}
            className="object-contain z-10 aspect-square p-2 group-hover:scale-125 transition-transform duration-200 ease-in-out "
            layout="responsive"
          />
        </div>
        <div className=" p-1 sm:p-3  space-y-1 grid">
          <p className="font-medium text-base 2xl:text-lg leading-5 sm:leading-normal min-h-20">
            {product.name}
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm -mt-0.5 min-h-16 ">
            {product.description.slice(0, 70)}..
          </p>
          <div className="flex justify-between items-center gap-2">
            <p className="font-bold text-sm sm:text-base">£{product.price}</p>
            <Link href={`/products/${product.name}`}>
              <Button variant={"ghost"} size={"icon"}>
                <ChevronRight size={15} strokeWidth={2.5} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
