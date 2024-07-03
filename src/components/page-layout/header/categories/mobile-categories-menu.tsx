"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ICategory } from "@/lib/types";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileCategoriesMenu({
  categories,
  handleOpen,
}: {
  categories: ICategory[];
  handleOpen: () => void;
}) {
  const [active, setActive] = useState<string | undefined>(undefined);
  return (
    <Accordion value={active} collapsible type="single" className="w-full ">
      <div className="grid gap-1">
        {categories.map((category) => (
          <AccordionItem
            className=" border-0 rounded-lg  overflow-hidden"
            value={category._id}
            key={category._id}
          >
            <div className="flex gap-2 items-center justify-between">
              <Link
                onClick={handleOpen}
                href={`/${category.slug}`}
                className="bg-secondary px-4 py-2 w-full rounded-xl font-medium justify-between flex items-center"
              >
                <span className="capitalize">{category.name}</span>{" "}
                <ArrowUpRight className="" size={15} />
              </Link>
              <Button
                onClick={() =>
                  setActive((prev) =>
                    prev === category._id ? undefined : category._id
                  )
                }
                variant={"secondary"}
                className="py-2"
                size={"icon"}
              >
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 bg-secondary text-foreground shrink-0"
                />
              </Button>
            </div>
            <AccordionContent className="grid gap-4 p-4 bg-secondary rounded-xl mt-2">
              {category.children?.map((subcategory) => (
                <Link
                  key={subcategory._id + "link"}
                  onClick={handleOpen}
                  className="flex items-center justify-between text-base"
                  href={`/${category.slug}/${category.name}`}
                >
                  <span className="capitalize">{subcategory.name}</span>
                  <ArrowRight size={15} className="text-muted-foreground" />
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </div>
    </Accordion>
  );
}
