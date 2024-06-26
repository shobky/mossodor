"use client";
import Search from "@/components/shared/search-input";
import React, { useState } from "react";
import { FilterOptions } from "./filter-options";
import { useShopControls } from "@/lib/hooks/use-shop-controls";
import MobileFilterContainer from "./mobile-filter-container";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { sub } from "date-fns";

export default function ShopControls({
  categorySlug,
  subCategorySlug,
}: {
  categorySlug?: string;
  subCategorySlug?: string;
}) {
  const { filters, handleFilters } = useShopControls(
    "q",
    categorySlug,
    subCategorySlug
  );

  const [openFilterContainer, setOpenFilterContainer] = useState(false);
  return (
    <div className="sticky top-0 lg:top-10 h-full lg:h-[calc(100vh-5rem)] z-[9] ">
      <ScrollArea className="lg:w-[15vw] lg:min-w-[300px] lg:max-w-[380px] h-full lg:h-[calc(100vh-5rem)]  lg:bg-secondary rounded-2xl lg:shadow-md ">
        <div className="py-4 space-y-4 lg:px-4">
          <div className="flex gap-1">
            <Search
              placeholder="Search Products.."
              querykey="q"
              className="h-12 font-medium rounded-xl"
            />
            <Button
              size={"icon"}
              className="flex w-12 h-12 border lg:hidden hover:bg-background bg-background text-foreground "
              onClick={() => setOpenFilterContainer(!openFilterContainer)}
            >
              <SlidersHorizontal size={18} />
            </Button>
          </div>
          <MobileFilterContainer
            openFilterContainer={openFilterContainer}
            filters={filters}
            handleFilters={handleFilters}
          />
          <div className="hidden lg:block">
            <FilterOptions filters={filters} handleFilters={handleFilters} />
          </div>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
