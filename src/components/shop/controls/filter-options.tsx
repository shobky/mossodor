import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { ResetFilters } from "./reset-filters";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const FilterOptions = ({
  filters,
  handleFilters,
}: {
  filters: any;
  handleFilters: any;
}) => {
  const options = [
    {
      name: "Material",
      value: ["Crystal", "Glass", "Metal", "Plastic", "Wood"],
    },
    {
      name: "Colour",
      value: [
        "Black",
        "Smokey Grey",
        "Amber",
        "Chrome",
        "Clear",
        "Green",
        "Blue",
        "Pink",
        "Gold",
        "Matt Black",
        "Purple",
        "Multicolour",
        "White",
        "Brown",
        "Matt White",
        "Yellow",
        "Grey",
        "Copper",
        "Red",
        "Light Grey",
        "Dark Green",
        "Rose Gold",
        "Beg",
        "Coffee",
        "Silver",
        "Dark Grey",
        "Ancient Gold",
        "French Gold",
        "Pearl Black",
      ],
    },
    {
      name: "Style",
      value: ["Industrial", "Luxury", "Rattan", "Scandinavian", "Vintage"],
    },
  ];

  return (
    <ScrollArea className="sm:h-full h-[40vh] min-h-[300px] border shadow-md sm:shadow-none sm:border-none bg-background rounded-xl">
      <div className="py-3 space-y-4  ">
        <div className="flex items-center justify-between px-3 ">
          <p className="text-lg font-semibold ">Filters</p>
          <ResetFilters />
        </div>
        <div className="gap-4">
          {options.map((option) => (
            <div key={option.name}>
              <hr className="my-4" />
              <SpecFilterBlock
                data={option}
                filters={filters}
                handleFilters={handleFilters}
              />
            </div>
          ))}
        </div>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export const SpecFilterBlock = ({
  data,
  filters,
  handleFilters,
}: {
  data: any;
  filters: any;
  handleFilters: any;
}) => {
  return (
    <div className="px-3">
      <ul className="flex flex-wrap items-center gap-2 ">
        {data.value.map((value: string) => {
          const currentSpec = filters.find((s: any) => s.name === data.name);
          const active = currentSpec
            ? currentSpec.value.includes(value)
            : false;

          return (
            <li key={value}>
              <Button
                onClick={() => handleFilters(data.name, value)}
                size={"sm"}
                variant={active ? "default" : "secondary"}
              >
                {value}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
