import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft, Trash } from "lucide-react";
import BuyButton from "../shared/buy-button";
import { useHeaderDrawer } from "../page-layout/header/header-drawer";
import { useDispatch } from "@/lib/redux/store";
import { clearCartThunk } from "@/lib/redux/slices/cart/thunks/clearCartThunk";

export default function CartControl({
  items,
  total,
}: {
  items: any;
  total: string;
}) {
  const { toggleDrawer } = useHeaderDrawer();
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Button onClick={toggleDrawer} size={"icon"} variant={"ghost"}>
          <ArrowLeft size={20} />
        </Button>
        <p className="text-2xl font-semibold">
          £{parseFloat(total).toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative group">
          <Button
            onClick={() => dispatch(clearCartThunk())}
            className="rounded-full"
            size={"icon"}
            variant={"destructive"}
          >
            <Trash size={20} strokeWidth={2} />
            <span className="absolute scale-0 group-hover:scale-100 duration-200 ease-in-out -top-3 -left-14 text-muted-foreground py-1 px-2 text-sm rounded-lg bg-muted">
              Clear Cart
            </span>
          </Button>
        </div>
        <BuyButton total={total} items={items} />
      </div>
    </div>
  );
}
