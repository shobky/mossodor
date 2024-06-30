"use client";
import React, { useEffect } from "react";
import ProductImages from "./product-images";
import ProductInfo from "./product-info";
import { IProduct, IVariationGroup } from "@/lib/types";
import ProductDimentions from "./details/product-dimentions";
import ProductSpecifications from "./details/product-specifications";
import { useSelector } from "react-redux";
import { State, useDispatch } from "@/lib/redux/store";
import { mergeProductWithVariation } from "@/lib/utils/merge-specifications";
import { selectedVariationsSlice } from "@/lib/redux/slices/selected-variations/selected-variation-slice";

export default function ProductDetails({
  product,
  children,
  variations,
}: {
  product: IProduct;
  children: React.ReactNode[];
  variations: IVariationGroup["variations"];
}) {
  const selectedVariation = useSelector(
    (state: State) => state.selectedVariations.selectedVariation
  );
  const mergedProduct = mergeProductWithVariation(product, selectedVariation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      selectedVariationsSlice.actions.setDefaultVariation(variations[0])
    );
  }, [variations]);
  
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
