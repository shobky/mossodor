import Image from "next/image";
import { IReview } from "./data";

import {
  differenceInYears,
  differenceInMonths,
  formatDistanceToNow,
} from "date-fns";
import { StarRating } from "@/components/shared/starRating";
import { Dot } from "lucide-react";
import { ReactNode } from "react";

export function getTimeAgo(date: Date): string {
  const now = new Date();
  const yearsDiff = differenceInYears(now, date);
  const monthsDiff = differenceInMonths(now, date);

  if (yearsDiff >= 1) {
    return `${yearsDiff} year${yearsDiff > 1 ? "s" : ""} ago`;
  } else if (monthsDiff >= 1) {
    return `${monthsDiff} month${monthsDiff > 1 ? "s" : ""} ago`;
  } else {
    // For less than a month, use formatDistanceToNow
    return formatDistanceToNow(date, { addSuffix: true });
  }
}

export const ReviewCard = ({
  review,
  children,
}: {
  review: IReview;
  children: ReactNode;
}) => {
  return (
    <div className="border  border-dashed shadow-sm p-6 rounded-2xl space-y-4  w-full  ">
      <div className="flex items-center justify-between gap-4 w-full  ">
        <div className="flex items-center gap-4 w-full justify-between ">
          <Image
            src={review.image}
            priority
            width={50}
            height={50}
            alt={review.name}
          />{" "}
          <div className="space-y-1">
            <p className="font-medium capitalize">{review.name}</p>
            <div className="flex items-center">
              <StarRating
                className=" w-3 h-3  sm:w-3.5 sm:h-3.5  "
                rate={review.rate}
              />
              {/* <Dot size={15} className="text-muted-foreground hidden sm:block" /> */}

              {/* <p className="text-nowrap relative top-1 text-xs text-muted-foreground hidden sm:block ">
                {getTimeAgo(new Date(review.date))}
              </p> */}
            </div>
          </div>
          {children}
        </div>
      </div>
      <div className="flex justify-center  ">
        <p className="text-sm ">
          {review.review.length >= 200
            ? review.review.slice(0, 140) + ".."
            : review.review + "."}
        </p>
      </div>
    </div>
  );
};
