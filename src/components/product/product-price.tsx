import { cn } from "@/lib/utils/cn";
import { Info } from "lucide-react";
import React from "react";

export default function ProductPrice({
  price,
  discount,
  className,
  name,
}: {
  price: number;
  discount: number | null;
  className?: string;
  name: string;
}) {
  if (discount) {
    return (
      <div className="">
        <p className="text-3xl font-bold">£{discount}</p>
        <div className="text-muted-foreground   text-sm flex items-center gap-2 relative">
          <p className="line-through">£{price}</p>
          <div className="group">
            <Info size={15} />
            <div className="shadow-md scale-0 absolute group-hover:scale-100 ease-in-out duration-300 w-60 bg-secondary  text-foreground p-4 rounded-xl">
              <p>Manufacturer&apos;s Recommended Retail Price For <span className="font-medium">{name}</span>.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <p className={cn("text-3xl font-bold", className)}>£{price}</p>;
}
