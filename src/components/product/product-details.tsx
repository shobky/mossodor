import React from "react";
import ProductImages from "./product-images";
import ProductInfo from "./product-info";
import { IProduct } from "@/lib/types";
import { ProductFaqs } from "./details/product-faqs";
import ProductDimentions from "./details/product-dimentions";
import ProductSpecifications from "./details/product-specifications";

export default async function ProductDetails({
  product,
}: {
  product: IProduct;
}) {
  return (
    <>
      <ProductImages
        alt={product.altText}
        images={product.images}
        thumbnail={product.thumpnail}
      />
      <div className="space-y-10">
        <ProductInfo product={product} />
        <ProductDimentions product={product} />
        <ProductSpecifications specifications={product.otherSpecifications} />
        <ProductFaqs _id={product._id} />
      </div>
    </>
  );
}
