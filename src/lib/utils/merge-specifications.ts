import { IProduct, IVariationGroup } from "../types";

export const mergeProductWithVariation = (
  product: IProduct,
  selectedVariation?: IVariationGroup["variations"][0]
): IProduct => {
  if (!selectedVariation) return product;
  const mergedProduct = { ...product };

  // Update specifications
  mergedProduct.otherSpecifications = mergedProduct.otherSpecifications.map(
    (spec) => {
      const variationSpec = selectedVariation.otherSpecifications.find(
        (vSpec) => vSpec.name === spec.name
      );
      return variationSpec &&
        variationSpec.value !== null &&
        variationSpec.value !== ""
        ? { ...spec, value: variationSpec.value }
        : spec;
    }
  );

  // Update dimensions and weight
  if (
    selectedVariation.weight &&
    selectedVariation.weight.trim() !== "" &&
    selectedVariation.weight !== "0"
  ) {
    mergedProduct.weight = selectedVariation.weight;
  }
  if (
    selectedVariation.height &&
    selectedVariation.height.trim() !== "" &&
    selectedVariation.height !== "0"
  ) {
    mergedProduct.height = selectedVariation.height;
  }
  if (
    selectedVariation.width &&
    selectedVariation.width.trim() !== "" &&
    selectedVariation.width !== "0"
  ) {
    mergedProduct.width = selectedVariation.width;
  }
  if (
    selectedVariation.length &&
    selectedVariation.length.trim() !== "" &&
    selectedVariation.length !== "0"
  ) {
    mergedProduct.length = selectedVariation.length;
  }

  // Update price
  if (selectedVariation.price && selectedVariation.price !== null && selectedVariation.price !== 0) {
    mergedProduct.price = selectedVariation.price;
  }

  // Update other properties
  if (selectedVariation.sku) mergedProduct.sku = selectedVariation.sku;
  if (selectedVariation.ean) mergedProduct.ean = selectedVariation.ean;

  if (selectedVariation.images && selectedVariation.images[0] && selectedVariation.type) {
    mergedProduct.thumpnail = selectedVariation.images[0];
  }
  return mergedProduct;
};
