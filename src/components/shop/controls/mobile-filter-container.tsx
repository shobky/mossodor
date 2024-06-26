import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import React from "react";
import { FilterOptions } from "./filter-options";

export default function MobileFilterContainer({
  filters,
  handleFilters,
  openFilterContainer,
}: {
  filters: any;
  handleFilters: any;
  openFilterContainer: boolean;
}) {
  return (
    <Accordion
      value={openFilterContainer ? "filter-options" : undefined}
      type="single"
    >
      <AccordionItem value="filter-options" className="border-0 ">
        <AccordionContent >
          <FilterOptions filters={filters} handleFilters={handleFilters} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
