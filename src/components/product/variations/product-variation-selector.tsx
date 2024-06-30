"use client";
import { IVariationGroup } from "@/lib/types";
import VariationSelectButton from "./variation-select-button";
import { State, useSelector } from "@/lib/redux/store";
import { useDispatch } from "react-redux";
import { selectedVariationsSlice } from "@/lib/redux/slices/selected-variations/selected-variation-slice";
import { useEffect } from "react";

export const ProductVariationSelector = async ({
  variationGroup,
}: {
  variationGroup: IVariationGroup | null;
}) => {
  // Group variations by name
  const disabledSelectors = useSelector(
    (state: State) => state.selectedVariations.disabledSelectors
  );
  const variationSelectors = variationGroup?.selectors;

  const dispatch = useDispatch();
  const variations = variationGroup?.variations;

  useEffect(() => {
    if (!variations) return;
    dispatch(
      selectedVariationsSlice.actions.setDefaultVariation(variations[0])
    );
  }, [variations]);

  if (
    !variationSelectors ||
    Object.keys(variationSelectors)?.length === 0 ||
    !variationGroup
  )
    return null;

  return (
    <div className="space-y-2">
      {Object.keys(variationSelectors).map((variationName) => (
        <div key={variationName} className="flex flex-wrap gap-2">
          <p
            key={variationName}
            className="border-dashed pointer-events-none cursor-default bg-secondary text-secondary-foreground/50 font-medium rounded-xl h-10 px-4 py-2"
          >
            {variationName.trim()}s
          </p>
          <VariationSelectButton
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
