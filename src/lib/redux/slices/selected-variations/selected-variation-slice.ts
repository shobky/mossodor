import { IVariationGroup } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const selectedVariationsSlice = createSlice({
  name: "variations",
  initialState: {
    selectedVariationSelectors: [] as { type: string; value: string }[],
    selectedVariation: undefined as
      | IVariationGroup["variations"][0]
      | undefined,
    disabledSelectors: {} as Record<string, string[]>,
  },
  reducers: {
    selectVariation: (
      state,
      action: PayloadAction<{
        newSelector: { type: string; value: string };
        variationGroup: IVariationGroup | null;
        product: any;
      }>
    ) => {
      const { newSelector, variationGroup, product } = action.payload;

      // Update selectedVariationSelectors
      state.selectedVariationSelectors = [
        ...state.selectedVariationSelectors.filter(
          (v) => v.type.toLowerCase() !== newSelector.type.toLowerCase()
        ),
        newSelector,
      ];

      if (!variationGroup) {
        state.selectedVariation = undefined;
        state.disabledSelectors = {};
        return;
      }
      const variations = [...variationGroup?.variations, product];

      const selectedVariation = variations.find((variation) => {
        return state.selectedVariationSelectors.every((selector) => {
          const specification = variation.otherSpecifications.find(
            (s: any) => s.name === selector.type
          );

          if (specification) {
            if (Array.isArray(specification.value)) {
              return specification.value.includes(selector.value);
            } else {
              return specification.value === selector.value;
            }
          }
          return false;
        });
      });
      state.selectedVariation = selectedVariation;

    },
    unselectVariation: (
      state,
      action: PayloadAction<{ type: string; value: string }>
    ) => {
      state.selectedVariationSelectors =
        state.selectedVariationSelectors.filter(
          (v) => v.type !== action.payload.type
        );
      state.selectedVariation = undefined;
    },
  },
});
