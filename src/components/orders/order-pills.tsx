import { IOrder } from "@/lib/types";
import { ArrowUpRight, Check } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function OrderPills({ order }: { order: IOrder }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div
        className={`w-fit py-1 px-2 text-sm rounded-md   border border-dashed capitalize ${
          order.status === "shipped"
            ? "bg-green-200/50 dark:bg-green-900/70 text-green-500 border-green-500 "
            : "bg-secondary"
        }`}
      >
        <p>{order.status}</p>
      </div>
      <div
        className={`w-fit py-1 px-2 text-sm rounded-md   border border-dashed capitalize${
          order.paymentStatus === "paid"
            ? "bg-orange-300/50 dark:bg-orange-900/70 text-orange-400   border-orange-400  "
            : "bg-secondary"
        }`}
      >
        <p>{order.paymentStatus}</p>
      </div>
      <div
        className={`w-fit py-1 px-2 text-sm rounded-md   border border-dashed capitalize   bg-secondary border-secondary-foreground text-secondary-foreground `}
      >
        <p>{order.shippingMethod}</p>
      </div>
      {order.warranty_id && (
        <div
          className={`w-fit py-1 px-2 text-sm rounded-md   border border-dashed capitalize   bg-blue-500 text-white border-white   `}
        >
          <p>Warranty Registered</p>
        </div>
      )}
      {order.trackingNumber && (
        <a>
          <Button size={"sm"} className="gap-2" variant={"ghost"}>
            Track Package <ArrowUpRight size={20} />
          </Button>
        </a>
      )}
    </div>
  );
}
