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
import { ArrowUpRight, CircleX, MapPin, MoreHorizontal } from "lucide-react";
import { IOrder } from "@/lib/types";
import Link from "next/link";
import { CancelOrderDialog } from "./cancel-order-dialog";

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
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel>Order Actions</DropdownMenuLabel>

        {!open && (
          <>
            <DropdownMenuSeparator />
            <Link href={`/account/orders/${order._id}`}>
              <DropdownMenuItem className="w-full justify-between">
                Open <ArrowUpRight size={18} />
              </DropdownMenuItem>
            </Link>
          </>
        )}
        <DropdownMenuSeparator />
        <CancelOrderDialog disabled={true} order={order} />
        <DropdownMenuSeparator />

        <DropdownMenuItem className="w-full justify-between" disabled={true}>
          Track <MapPin size={18} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
