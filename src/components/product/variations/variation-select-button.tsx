"use client";
import { Button } from "@/components/ui/button";
import { selectedVariationsSlice } from "@/lib/redux/slices/selected-variations/selected-variation-slice";
import { State, useDispatch } from "@/lib/redux/store";
import { IVariationGroup } from "@/lib/types";
  import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

const VariationSelectButton = React.memo(
  ({
    variationValues,
    variationName,
    variationGroup,
    disabledValues,
    product,
  }: {
    variationValues: string[];
    variationName: string;
    variationGroup: IVariationGroup | null;
    disabledValues: string[];
    product: any;
  }) => {
    const { selectedVariationSelectors } = useSelector(
      (state: State) => state.selectedVariations
    );

    const dispatch = useDispatch();
    const handleSelectVariation = useCallback(
      (newSelector: { type: string; value: string }) => {
        dispatch(
          selectedVariationsSlice.actions.selectVariation({
            newSelector,
            variationGroup,
            product
          })
        );
      },
      [dispatch]
    );

    const handleUnselectVariation = useCallback(
      (variationValue: { type: string; value: string }) => {
        dispatch(
          selectedVariationsSlice.actions.unselectVariation({
            type: variationValue.type,
            value: variationValue.value,
          })
        );
      },
      [dispatch]
    );

    const handleClickVariation = useCallback(
      (
        isSelected: boolean,
        variationValue: { type: string; value: string }
      ) => {
        if (isSelected) {
          handleUnselectVariation(variationValue);
        } else {
          handleSelectVariation(variationValue);
        }
      },
      [handleSelectVariation, handleUnselectVariation]
    );

    const variationButtons = useMemo(() => {
      return variationValues?.map((value) => {
        const isSelected = selectedVariationSelectors.some(
          (v) => v.value.toLowerCase().trim() === value.toLowerCase().trim()
        );

        return (
          <Button
            disabled={disabledValues.includes(value)}
            onClick={() =>
              handleClickVariation(isSelected, {
                type: variationName,
                value,
              })
            }
            key={value}
            className={`border-dashed gap-2 items-center font-medium rounded-full ease-in-out duration-200 overflow-hidden ${
              isSelected && "text-black font-bold"
            }`}
            variant={isSelected ? "default" : "outline"}
          >
            {value}
          </Button>
        );
      });
    }, [
      variationValues,
      variationName,
      selectedVariationSelectors,
      handleClickVariation,
    ]);

    return <>{variationButtons}</>;
  }
);

VariationSelectButton.displayName = "VariationSelectButton";
export default VariationSelectButton;