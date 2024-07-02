"use client";
import { IVariationGroup } from "@/lib/types";
import VariationSelectButton from "./variation-select-button";
import { State, useSelector } from "@/lib/redux/store";

export const ProductVariationSelector = ({
  variationGroup,
  product
}: {
  variationGroup: IVariationGroup | null;
  product: any;
}) => {
  // Group variations by name
  const disabledSelectors = useSelector(
    (state: State) => state.selectedVariations.disabledSelectors
  );
  const variationSelectors = variationGroup?.selectors;

  console.log(variationSelectors, variationGroup);
  if (
    !variationSelectors ||
    Object.keys(variationSelectors)?.length === 0 ||
    !variationGroup
  )
    return null;

  return (
    <div className="space-y-2">
      {Object.keys(variationSelectors)?.map((variationName) => (
        <div key={variationName} className="flex flex-wrap gap-1">
          <p
            key={variationName}
            className="border-dashed pointer-events-none cursor-default  bg-secondary text-secondary-foreground/50 font-medium rounded-full h-10 px-4 py-2"
          >
            {variationName.trim()}s
          </p>
          <VariationSelectButton
          product={product}
            variationGroup={variationGroup}
            variationValues={variationSelectors[variationName]}
            variationName={variationName}
            disabledValues={disabledSelectors[variationName] || []}
          />
        </div>
      ))}
    </div>
  );
};
