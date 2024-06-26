import { cn } from "@/lib/utils/cn";
import React from "react";

export default function NumberBadge({
  count,
  className,
}: {
  count: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "z-20 bg-destructive text-white border-destructive font-semibold rounded-full w-[23px] flex items-center justify-center h-[23px] border-2  text-xs",
        className
      )}
    >
      {count}
    </span>
  );
}
