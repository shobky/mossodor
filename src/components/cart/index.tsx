import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag, ShoppingCart } from "lucide-react";

export function Cart() {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <button>
          <ShoppingCart size={30} className="bg-white/20 p-1.5 rounded-full" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            {`Make changes to your profile here. Click save when you're done.`}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4"></div>
      </SheetContent>
    </Sheet>
  );
}
