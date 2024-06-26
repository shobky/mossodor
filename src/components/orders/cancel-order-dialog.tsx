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

export function CancelOrderDialog({
  disabled,
  order,
}: {
  disabled: boolean;
  order: IOrder;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button disabled={disabled} className="w-full">
          <DropdownMenuItem
            className="w-full  justify-between"
            disabled={disabled}
          >
            Cancel <CircleX size={18} />
          </DropdownMenuItem>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action can&apos;t be undone, and will cancel your order. You can&apos;t
            uncancel it again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Exit</AlertDialogCancel>
          <AlertDialogAction>Cancel my order</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
