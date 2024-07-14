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
        ...state.selectedVariationSelectors?.filter(
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
            (s: any) => s.name.toLowerCase().trim() === selector.type.toLowerCase().trim()
          );

          if (specification) {
            if (Array.isArray(specification.value)) {
              const value = specification.value
                .filter((v: any) => v !== null)
                .map((v: any) => v.toLowerCase().trim());
              return value.includes(selector.value.toLowerCase().trim());
            } else {
              return specification.value.toLowerCase().trim() === selector.value.toLowerCase().trim();
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
        state.selectedVariationSelectors?.filter(
          (v) => v.type.toLowerCase().trim() !== action.payload.type.toLowerCase().trim()
        );
      state.selectedVariation = undefined;
    },
  },
});
