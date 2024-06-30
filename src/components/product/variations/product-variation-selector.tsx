"use client"
import { IVariationGroup } from "@/lib/types";
import VariationSelectButton from "./variation-select-button";
import { State, useSelector } from "@/lib/redux/store";

export const ProductVariationSelector = async ({
  variationGroup,
}: {
  variationGroup: IVariationGroup | null;
}) => {
  // Group variations by name
  const disabledSelectors = useSelector((state: State) => state.selectedVariations.disabledSelectors);
  const variationSelectors = variationGroup?.selectors;

  if (!variationSelectors || Object.keys(variationSelectors)?.length === 0)
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
