import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IReview } from "./data";
import { Dot, Maximize2, Minimize2 } from "lucide-react";
import { getTimeAgo } from "./reviewCard";
import { StarRating } from "@/components/shared/starRating";
import Image from "next/image";

export function ReviewOpenedDialog({
  review,
  setActiveReview,
}: {
  review: IReview | undefined;
  setActiveReview: any;
}) {
  if (!review) return null;
  return (
    <Dialog
      onOpenChange={() => setActiveReview(undefined)}
      open={review._id ? true : false}
    >
      <DialogContent onInteractOutside={() => setActiveReview(undefined)} className=" w-[80vw] rounded-xl">
        <div className="flex items-start justify-between gap-4 w-max">
          <div className="flex items-start gap-4 w-max">
            <Image
              src={review.image}
              priority
              width={50}
              height={50}
              alt={review.name}
            />{" "}
            <section className="space-y-1">
              <div className="w-full flex items-center justify-between">
                <p className="font-medium capitalize">
                  {review.name}
                </p>
              </div>
              <div className="flex items-center">
                <StarRating
                  className=" w-3.5 h-3.5  "
                  rate={review.rate}
                />
                {/* <Dot size={15} className="text-muted-foreground" /> */}
                {/* <p className="text-nowrap text-xs text-muted-foreground ">
                  {getTimeAgo(new Date(review.date))}
                </p> */}
              </div>
            </section>
          </div>
        </div>
        <div className="flex justify-center  ">
          <p className="text-base">{review.review}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
