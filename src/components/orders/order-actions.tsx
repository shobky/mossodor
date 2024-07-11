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
              .writeText(order._id || "")
              .then(() => toast.info(`Copied order number | ${order._id}`))
              .catch((err) =>
                toast.error(`Can't copy  number for order ${order._id}`)
              )
          }
        >
          Copy order number <Copy size={18} />
        </DropdownMenuItem>
        {!open && (
          <>
            <Link href={`/account/orders/${order._id}`}>
              <DropdownMenuItem className="w-full justify-between">
                Open <ArrowUpRight size={18} />
              </DropdownMenuItem>
            </Link>
          </>
        )}
        <DropdownMenuItem className="w-full justify-between" disabled={true}>
          Track <MapPin size={18} />
        </DropdownMenuItem>
        <Link href={`/warranty-registration/${order._id}`}>
          <DropdownMenuItem className="w-full justify-between">
            Register Warranty <Award size={18} />
          </DropdownMenuItem>
        </Link>
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
