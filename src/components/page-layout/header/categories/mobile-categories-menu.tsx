import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ICategory } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MobileCategoriesMenu({
  categories,
  handleOpen
}: {
  categories: ICategory[];
  handleOpen: () => void
}) {
  return (
    <Accordion collapsible type="single" className="w-full ">
      <div className="grid gap-1">
        {categories.map((category) => (
          <AccordionItem
            className="px-3 border-0 rounded-lg bg-secondary"
            value={category._id}
            key={category._id}
          >
            <AccordionTrigger  className="py-3">
              {category.name}
            </AccordionTrigger>
            <AccordionContent className="grid gap-3">
              {category.children?.map((subcategory) => (
                <Link
                  key={subcategory._id + "link"}
                  onClick={handleOpen}
                  className="flex items-center justify-between text-base"
                  href={`/${category.slug}/${category.name}`}
                >
                  <span>{subcategory.name}</span>
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
