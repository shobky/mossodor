import {
  HeaderDrawer,
  HeaderDrawerContent,
  HeaderDrawerTrigger,
} from "../header-drawer";
import CartTrigger from "./cart-trigger";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import { Padding } from "../../index";
import Cart from "@/components/cart";
import { Suspense } from "react";

export const CartModal = () => {
  return (
    <HeaderDrawer>
      <HeaderDrawerTrigger>
        <CartTrigger />
      </HeaderDrawerTrigger>
      <HeaderDrawerContent>
        <ScrollArea className="h-[calc(95svh)] min-h-[320px] py-10">
          <Padding>
            <hr className="mb-6 " />
            <Suspense>
              <Cart />
            </Suspense>
          </Padding>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </HeaderDrawerContent>
    </HeaderDrawer>
  );
};
