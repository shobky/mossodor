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
import { Fetch } from "@/lib/actions/fetch";
import { TriangleAlert } from "lucide-react";
import { getSession, signOut } from "next-auth/react";
import { toast } from "sonner";

export function DeleteAccountDialog() {
  const handleDelete = async () => {
    try {
      const session = await getSession();
      const data = await Fetch(
        // @ts-ignore
        `users/${session?.user?._id}/account`,
        {
          method: "DELETE",
        },
        "secure"
      );
      if (data.message) {
        toast.success("Account deleted successfully");
        await signOut();
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="gap-2" type="button" variant={"destructive"}>
          <TriangleAlert size={15} /> Delete account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Delete my account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
