import { ChevronRightIcon, Sparkles } from "lucide-react";
import React from "react";
import ProductCard from "@/components/product/product-card";
import { SectionTitle } from "@/components/ui/custom/layout";
import Link from "next/link";
import { Padding } from "@/components/page-layout";
import { getPopularProducts } from "@/lib/api/products.api";
import { IProduct } from "@/lib/types";

export default async function PopularProducts() {
  let products:IProduct[] = [];
  try {
    products = await getPopularProducts();
  } catch (err: any) {
    console.log(err);
  }
  return (
    <Padding variant="centered">
      <div className="xl:min-h-[80vh] w-full sm:w-[85%] flex flex-col  items-center space-y-4">
        <SectionTitle>
          Popular Products <Sparkles />
        </SectionTitle>
        <div className="grid w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start justify-between gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <Link
          href="/shop"
          className=" underline flex items-center gap-1  text-sm text-muted-foreground"
        >
          Continue Shopping{" "}
        </Link>
      </div>
    </Padding>
  );
}
