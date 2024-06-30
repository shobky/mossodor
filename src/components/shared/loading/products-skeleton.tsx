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
}: {
  length?: number;
}) {
  return (
    <>
      {Array.from({ length }).map((_, i) => (
        <Skeleton key={i} className="grid place-content-center aspect-square">
          <Loader2 className="animate-spin" />
        </Skeleton>
      ))}
    </>
  );
}
