import { format } from "date-fns";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function WarrantyItemsContainer({
  warranties,
}: {
  warranties: any[];
}) {
  if (!warranties || warranties.length === 0)
    return (
      <p>
        You have no warranties yet.{" "}
        <Link className="underline" href={"/shop"}>
          start shopping
        </Link>
      </p>
    );
  return (
    <div>
      {warranties.map((warranty: any) => (
        <div
          key={warranty._id}
          className="p-6 border border-dashed bg-secondary/40 rounded-xl space-y-2"
        >
          <div className="flex  flex-col sm:flex-row justify-between">
            <div>
              <p>{format(new Date(warranty.createdAt), "PPPP")}</p>
              <p className="text-lg font-medium">
                {warranty.market.toUpperCase()}
              </p>
            </div>
            <p className="grid font-medium ">
              <Link
                href={`/account/orders/${warranty.orderNumber}`}
                className=" text-muted-foreground hover:text-primary"
              >
                #{warranty.orderNumber}
              </Link>
              <span>{warranty.productSKU}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
