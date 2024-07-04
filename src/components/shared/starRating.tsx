import { cn } from "@/lib/utils/cn";
import { StarIcon } from "lucide-react";

export const StarRating = ({
  rate,
  className,
}: {
  rate: number;
  className?: string;
}) => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rate }).map((_, index) => (
        <StarIcon
          key={index}
          className={cn(className, "text-yellow-500")}
          fill="rgb(234 179 8)"
        />
      ))}
      {/* {Array.from({ length: 5 - 5 }).map((_, index) => (
            <StarIcon key={index} className="text-yellow-500 w-4 h-4" />
          ))} */}
    </div>
  );
};
