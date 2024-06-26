import { IOrder } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { OrderActions } from "./order-actions";

export default function OrderCard({ order }: { order: IOrder }) {
  return (
    <div className="p-6 border border-dashed bg-secondary/40 rounded-xl   ">
      <div className="flex items-center justify-between text-secondary-foreground">
        <p>{format(new Date(order.purchaseDate), "PPPP")}</p>
        <div className="flex gap-2">
          <OrderActions order={order} />
          <Link href={`/acount/orders/${order._id}`}>
            <Button variant={"ghost"} size={"icon"}>
              <ArrowUpRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
      <br />
      <div className="flex items-start justify-between">
        <section className="space-y-2">
          <p className="font-bold text-2xl">
            £{parseFloat(String(order.total / 100)).toFixed(2)}
          </p>
          <div className="flex items-center gap-4">
            <div
              className={`w-fit py-1 px-2 text-sm rounded-lg border border-dashed ${
                order.status === "complete"
                  ? "bg-green-200/50 dark:bg-green-900/70 text-green-500 border-green-500 "
                  : "bg-secondary"
              }`}
            >
              <p>{order.status}</p>
            </div>
            <div
              className={`w-fit py-1 px-2 text-sm rounded-lg border border-dashed ${
                order.paymentStatus === "paid"
                  ? "bg-orange-300/50 dark:bg-orange-900/70 text-orange-400   border-orange-400  "
                  : "bg-secondary"
              }`}
            >
              <p>{order.paymentStatus}</p>
            </div>
            <div
              className={`w-fit py-1 px-2 text-sm rounded-lg border border-dashed bg-secondary border-secondary-foreground text-secondary-foreground `}
            >
              <p>{order.shippingMethod}</p>
            </div>
          </div>
        </section>
        <section className="flex items-baseline justify-between">
          <div className="flex gap-1">
            {order.items.length > 5 && (
              <div className=" border border-dashed rounded-lg group hover:bg-muted/20 overflow-hidden aspect-square w-[4.5rem] text-muted-foreground grid place-content-center">
                +{order.items.length - 5}
              </div>
            )}
            {order.items.slice(0, 5).map((item: any) => (
              <div
                key={item.product_id._id}
                className="p-1 border border-dashed rounded-lg group hover:bg-muted/20 overflow-hidden"
              >
                <Image
                  className="w-20 group-hover:scale-125 ease-in-out duration-200"
                  src={item.product_id.thumpnail}
                  alt={item.product_id.altText}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
