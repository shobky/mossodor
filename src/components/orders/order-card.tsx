import { IOrder } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { OrderActions } from "./order-actions";
import OrderPills from "./order-pills";

export default function OrderCard({ order }: { order: IOrder }) {
  return (
    <div className="p-6 border border-dashed bg-secondary/40 rounded-xl">
      <div className="flex items-center justify-between text-secondary-foreground">
        <p>#{order.orderNumber}</p>
        <div className="flex gap-2">
          <OrderActions order={order} />
          <Link href={`/account/orders/${order.orderNumber}`}>
            <Button variant={"ghost"} size={"icon"}>
              <ArrowUpRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
      <p className="text-sm sm:text-base">
        {format(new Date(order.purchaseDate * 1000), "PPPP")}
      </p>
      <br />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <section className="space-y-2">
          <p className="font-bold text-2xl">
            £{parseFloat(String(order.total / 100)).toFixed(2)}
          </p>
          <OrderPills order={order} />
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
                key={item.sku}
                className="p-1 border border-dashed rounded-lg group hover:bg-muted/20 overflow-hidden aspect-square"
              >
                <Image
                  className="w-20 group-hover:scale-125 ease-in-out duration-200 aspect-square"
                  src={item.thumpnail}
                  alt={item.name}
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
