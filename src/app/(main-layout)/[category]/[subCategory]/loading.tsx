import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] z-[8]  ">
        {[...Array(12)].map((_, index) => (
          <Skeleton
            key={index}
            className="h-[300px] rounded-xl flex items-center justify-center"
          >
            <Loader2 className="animate-spin text-muted-foreground opacity-80" />
          </Skeleton>
        ))}
      </div>
    </div>
  );
}
