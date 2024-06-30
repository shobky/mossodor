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
    setDefaultVariation: (
      state,
      action: PayloadAction<IVariationGroup["variations"][0]>
    ) => {
      const variation = action.payload;
      state.selectedVariation = variation;

      const selectors: { type: string; value: string }[] = [];

      // Add main type and value
      if (variation.type && variation.value) {
        selectors.push({ type: variation.type, value: variation.value });
      }

      // Process specifications
      if (variation.otherSpecifications) {
        variation.otherSpecifications.forEach((spec) => {
          if (Array.isArray(spec.value)) {
            // If value is an array, take the first non-empty value
            const value =
              spec.value.find((v: any) => v && v.trim() !== "") || "";
            selectors.push({ type: spec.name, value });
          } else if (
            typeof spec.value === "string" &&
            spec.value.trim() !== ""
          ) {
            // If value is a non-empty string
            selectors.push({ type: spec.name, value: spec.value });
          }
        });
      }

      // Process otherSpecifications
      if (variation.otherSpecifications) {
        variation.otherSpecifications.forEach((spec) => {
          if (
            spec.value &&
            typeof spec.value === "string" &&
            spec.value.trim() !== ""
          ) {
            selectors.push({ type: spec.name, value: spec.value });
          }
        });
      }

      // Remove duplicates (in case a spec appears in multiple places)
      state.selectedVariationSelectors = selectors.filter(
        (selector, index, self) =>
          index ===
          self.findIndex(
            (s) => s.type.toLowerCase() === selector.type.toLowerCase()
          )
      );
    },
    selectVariation: (
      state,
      action: PayloadAction<{
        newSelector: { type: string; value: string };
        variationGroup: IVariationGroup | null;
      }>
    ) => {
      const { newSelector, variationGroup } = action.payload;

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

      // Find all variations that match the current selectors
      // Find all variations that match the current selectors
      const matchingVariations = variationGroup.variations.filter(
        (variation) => {
          return state.selectedVariationSelectors.every((selector) => {
            // ... (existing matching logic)
          });
        }
      );

      // Update disabled selectors
      const availableSelectors: Record<string, Set<string>> = {};
      matchingVariations.forEach((variation) => {
        Object.entries(variationGroup.selectors).forEach(([type, values]) => {
          if (!availableSelectors[type]) availableSelectors[type] = new Set();
          let value: unknown;
          if (variation.type === type) {
            value = variation.value;
          } else {
            const spec = variation.otherSpecifications?.find(
              (spec) => spec.name === type
            );
            value = spec?.value;
          }
          if (value !== null && value !== undefined) {
            availableSelectors[type].add(String(value));
          }
        });
      });

      state.disabledSelectors = Object.entries(variationGroup.selectors).reduce(
        (acc, [type, values]:any) => {
          acc[type] = values.filter(
            (value:any) => !availableSelectors[type]?.has(String(value))
          );
          return acc;
        },
        {} as Record<string, string[]>
      );

      // Find the matching variation (existing logic)
      state.selectedVariation = matchingVariations.find((variation) => {
        // ... (existing matching logic)
      });

      console.log(state.selectedVariation);
      console.log(state.disabledSelectors);
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
