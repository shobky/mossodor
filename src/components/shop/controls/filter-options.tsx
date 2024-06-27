import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

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
      value: ["Red", "Green", "Blue", "Yellow", "Black", "White"],
    },
    {
      name: "Bulb_Base",
      value: ["E27", "E14", "G9", "G4", "Build-in LED", "T45"],
    },
  ];

  return (
    <div className="py-3 space-y-4 border shadow-md sm:shadow-none sm:border-none bg-background rounded-xl ">
      <p className="flex items-center justify-between px-3 text-lg font-semibold ">
        Filters
        <SlidersHorizontal className="hidden lg:block" size={18} />
      </p>
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
