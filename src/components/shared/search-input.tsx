"use client";
import { useQueryParams } from "@/lib/hooks/use-query-params";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils/cn";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Search = ({
  querykey,
  className,
  placeholder,
  handleValueChange,
}: {
  querykey: string;
  className?: string;
  placeholder?: string;
  handleValueChange?: any;
}) => {
  const { getParam, setParam } = useQueryParams();
  const [v, setV] = useState(getParam(querykey));
  useEffect(() => {
    handleValueChange && handleValueChange(v);
  }, [v]);
  return (
    <div className="relative flex items-center w-full">
      <Input
        autoComplete="off"
        className={cn("w-full pr-8 focus-visible:ring-0 focus-visible:outline-none  focus:border-2 focus:border-foreground", className)}
        value={v}
        onChange={(e) => {
          setV(e.target.value);
          setParam(querykey, e.target.value);
        }}
        name="search"
        placeholder={placeholder ?? "Search.."}
      />
      <SearchIcon
        size={16}
        className="absolute right-0  mx-[12px] text-muted-foreground"
      />
    </div>
  );
};
export default Search;
