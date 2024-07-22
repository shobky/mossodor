"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowUpRight,
  Award,
  CircleX,
  Copy,
  MapPin,
  MoreHorizontal,
} from "lucide-react";
import { IOrder } from "@/lib/types";
import Link from "next/link";
import { CancelOrderDialog } from "./cancel-order-dialog";
import { toast } from "sonner";

export function OrderActions({
  order,
  open,
}: {
  order: IOrder;
  open?: boolean;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <MoreHorizontal size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem
          className="w-full justify-between"
          onClick={() =>
            navigator.clipboard
              .writeText(String(order.orderNumber) || "")
              .then(() =>
                toast.info(`Copied order number | ${order.orderNumber}`)
              )
              .catch((err) =>
                toast.error(`Can't copy  number for order ${order.orderNumber}`)
              )
          }
        >
          Copy order number <Copy size={18} />
        </DropdownMenuItem>
        {!open && (
          <>
            <Link href={`/account/orders/${order.orderNumber}`}>
              <DropdownMenuItem className="w-full justify-between">
                Open <ArrowUpRight size={18} />
              </DropdownMenuItem>
            </Link>
          </>
        )}
        <DropdownMenuItem className="w-full justify-between" disabled={true}>
          Track <MapPin size={18} />
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={order.warranty_id ? true : false}
          className="w-full justify-between"
        >
          <Link className="flex justify-between items-center w-full" href={`/warranty-registration/${order.orderNumber}`}>
            Register Warranty <Award size={18} />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <CancelOrderDialog
          disabled={
            order.status !== "awaiting pickup" && order.status !== "pending"
          }
          order={order}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
