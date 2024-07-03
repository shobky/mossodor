import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import React from "react";

export default function ProductsSkeleton({ length = 6 }: { length?: number }) {
  return (
    <div className="w-full grid gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] z-[8]">
      {Array.from({ length }).map((_, i) => (
        <Skeleton key={i} className="grid place-content-center aspect-square">
          <Loader2 className="animate-spin" />
        </Skeleton>
      ))}
    </div>
  );
}

export function ProductSkeletonsUnContained({
  length = 6,
  showText = false,
}: {
  length?: number;
  showText?: boolean;
}) {
  return (
    <>
      {Array.from({ length }).map((_, i) => (
        <Skeleton key={i} className="flex flex-col items-center justify-center aspect-square">
          <Loader2 className="animate-spin" />
          {showText && (
            <div className="text-center mt-4 text-sm font-medium text-muted-foreground">
              Loading more...
            </div>
          )}
        </Skeleton>
      ))}
    </>
  );
}
