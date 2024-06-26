import { ChevronRightIcon, Sparkles } from "lucide-react";
import React from "react";
import ProductCard from "@/components/product/product-card";
import { SectionTitle } from "@/components/ui/custom/layout";
import Link from "next/link";
import { Padding } from "@/components/page-layout";

export default function PopularProducts() {
  const products = [
    {
      cover: "/products/p (1).png",
      title: "Crystal Chandelier",
      price: 224,
      description: "A beautiful chandelier for your living room",
      rateing: 4,
    },
    {
      cover: "/products/p (2).png",
      title: "Crystal Chandelier",
      price: 224,
      description: "A beautiful chandelier for your living room",
      rateing: 5,
    },
    {
      cover: "/products/p (3).png",
      title: "Crystal Chandelier",
      price: 224,
      description: "A beautiful chandelier for your living room",
      rateing: 5,
    },
    {
      cover: "/products/p (3).png",
      title: "Crystal Chandelier",
      price: 224,
      description: "A beautiful chandelier for your living room",
      rateing: 3,
    },
    {
      cover: "/products/p (1).png",
      title: "Crystal Chandelier",
      price: 224,
      description: "A beautiful chandelier for your living room",
      rateing: 4,
    },
    {
      cover: "/products/p (2).png",
      title: "Crystal Chandelier",
      price: 224,
      description: "A beautiful chandelier for your living room",
      rateing: 4,
    },
  ];
  return (
    <Padding variant="centered">
      <div className="xl:min-h-[80vh] w-full sm:w-[80%] lg:w-[60%] 2xl:w-[45%] flex flex-col  items-center space-y-4">
        <SectionTitle>
          Popular Products <Sparkles />
        </SectionTitle>
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 justify-between gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <Link
          href="/"
          className=" font-medium flex items-center gap-1  text-muted-foreground"
        >
          Continue Shopping{" "}
          <ChevronRightIcon size={18} className="relative top-[.8px]" />
        </Link>
      </div>
    </Padding>
  );
}
