"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

export function Search() {
  const [query, setQuery] = useState("");
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <button>
          <SearchIcon
            size={32}
            className="hover:bg-white/10 p-1.5 rounded-full"
          />
        </button>
      </SheetTrigger>
      <SheetContent
        className="h-[calc(100%-10.3rem)] bg-black/[96%] border-none shadow-md z-20"
        side={"bottom"}
      >
        <SheetHeader className="flex justify-center items-center py-4 w-[78] border border-x-0 border-white/20 mx-[11vw] ">
          <input
            autoFocus
            placeholder="Search Our Store"
            onChange={(e) => setQuery(e.target.value)}
            className=" text-[2rem] h-14 bg-transparent text-center focus:outline-none  placeholder:text-white text-white "
            value={query}
          />
        </SheetHeader>
        <div className="grid text-lg opacity-80 h-full place-content-center gap-4 py-4 text-white">
          No search results.
        </div>
      </SheetContent>
    </Sheet>
  );
}
