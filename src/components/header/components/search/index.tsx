"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search as SearchIcon, SearchX, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function Search() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <Sheet onOpenChange={(s: boolean) => setOpen(s)} modal={false} >
      <SheetTrigger asChild>
        <button>
          {open ? (
            <SearchX
              size={32}
              className="hover:bg-white/10 p-1.5 rounded-full"
            />
          ) : (
            <SearchIcon
              size={32}
              className="hover:bg-white/10 p-1.5 rounded-full"
            />
          )}
        </button>
      </SheetTrigger>
      <SheetContent
        className="h-[calc(100%-8.8rem)] bg-black/[80%] backdrop-blur-xl   border-none shadow-md z-[40]"
        side={"bottom"}
      >
        <SheetHeader className="flex flex-row  justify-center px-2 items-center py-2 w-[78] border border-x-0 border-white/20 mx-[11vw] ">
          <input
            autoFocus
            placeholder="Search Our Store"
            onChange={(e) => setQuery(e.target.value)}
            className=" text-[1.4rem] font-light h-10 bg-transparent text-center  focus:outline-none  placeholder:text-white text-white "
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
