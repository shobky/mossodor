"use client"
import ProductImages from "./product-images";
import ProductInfo from "./product-info";
import { IProduct } from "@/lib/types";
import ProductDimentions from "./details/product-dimentions";
import ProductSpecifications from "./details/product-specifications";
import { useSelector } from "react-redux";
import { State } from "@/lib/redux/store";
import { mergeProductWithVariation } from "@/lib/utils/merge-specifications";

export default function ProductDetails({
  product,
  children,
}: {
  product: IProduct;
  children: React.ReactNode[];
}) {
  const selectedVariation = useSelector(
    (state: State) => state.selectedVariations.selectedVariation
  );
  const mergedProduct = mergeProductWithVariation(product, selectedVariation);

  return (
    <>
      <ProductImages
        alt={mergedProduct.altText}
        images={mergedProduct.images}
        thumbnail={mergedProduct.thumpnail}
      />
      <div className="space-y-10">
        <ProductInfo product={mergedProduct}>{children[0]}</ProductInfo>
        <ProductDimentions product={mergedProduct} />
        <ProductSpecifications
          specifications={mergedProduct.otherSpecifications}
        />
        {children[1]}
      </div>
    </>
  );
}
