"use client";
import ProductImages from "./product-images";
import { IProduct, IVariationGroup } from "@/lib/types";
import ProductDimentions from "./details/product-dimentions";
import ProductSpecifications from "./details/product-specifications";
import { useSelector } from "react-redux";
import { State } from "@/lib/redux/store";
import { mergeProductWithVariation } from "@/lib/utils/merge-specifications";
import ProductInfo from "./product-info";

export default function ProductDetails({
  product,
  children,
  variationGroup,
}: {
  product: IProduct;
  children: React.ReactNode;
  variationGroup: IVariationGroup | null;
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
        <ProductInfo product={mergedProduct} variationGroup={variationGroup} />
        <ProductDimentions product={mergedProduct} />
        <ProductSpecifications
          specifications={mergedProduct.otherSpecifications}
        />
        {children}
      </div>
    </>
  );
}
