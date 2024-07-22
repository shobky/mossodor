import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { IOrder } from "@/lib/types";
import { CircleX } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { revalidatePath } from "next/cache";
import { updateOrder } from "@/lib/api/orders.api";
import { toast } from "sonner";

export function CancelOrderDialog({
  disabled,
  order,
}: {
  disabled: boolean;
  order: IOrder;
}) {
  const handleCancelOrder = async () => {
    try {
      await updateOrder(order._id, { status: "cancelled" });
      revalidatePath("/account/orders");
    } catch (err: any) {
      toast.error("Something went wrong, Please trying again late.");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button disabled={disabled} className="w-full">
          <DropdownMenuItem
            className="w-full  justify-between"
            disabled={disabled}
          >
            Cancel Order <CircleX size={18} />
          </DropdownMenuItem>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action can&apos;t be undone, and will cancel your order. You
            can&apos;t uncancel it again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Exit</AlertDialogCancel>
          <AlertDialogAction onClick={handleCancelOrder}>
            Cancel my order
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
