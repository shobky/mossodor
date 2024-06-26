"use client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

// this is the product card displayed in the popular products section in home.
export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border border-background sm:hover:border-input/50 cursor-pointer rounded-3xl grid">
      <div className="bg-secondary/50 group p-8 hover:bg-secondary/20  rounded-3xl h-auto overflow-hidden">
        <Image
          src={product.cover}
          width={250}
          height={200}
          alt={product.title}
          className="object-contain z-10 aspect-square p-2 group-hover:scale-125 transition-transform duration-200 ease-in-out "
          layout="responsive"
        />
      </div>
      <div className=" p-1 sm:p-3">
        <p className="font-medium text-base 2xl:text-lg">{product.title}</p>
        <p className="text-muted-foreground text-xs sm:text-sm -mt-0.5 ">
          {product.description}
        </p>
        <div className="flex justify-between items-center gap-2">
          <p className="font-bold">£{product.price}</p>
          <div className="flex gap-0.5">
            {Array.from({ length: product.rateing }).map((_, index) => (
              <StarIcon
                key={index}
                className="text-yellow-500 w-4 h-4"
                fill="rgb(234 179 8)"
              />
            ))}
            {Array.from({ length: 5 - product.rateing }).map((_, index) => (
              <StarIcon key={index} className="text-yellow-500 w-4 h-4" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
