import { Padding } from "@/components/page-layout";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export const ProductPageSkeleton = () => {
  return (
    <>
      <div className="sm:flex items-start gap-[calc(3rem+2.5vw)]  py-[5vh]  h-[90vh] w-full">
        <div className="grid gap-2">
          <Skeleton className="relative sm:w-[60vh] aspect-square grid place-content-center ">
            <Loader2 className="text-muted-foreground animate-spin size-25" />
          </Skeleton>
          <div className="grid grid-cols-4 gap-2">
            <Skeleton className="w-full aspect-square h-full  grid place-content-center">
              <Loader2
                size={16}
                className="text-muted-foreground animate-spin"
              />
            </Skeleton>
            <Skeleton className="w-full aspect-square h-full  grid place-content-center">
              <Loader2
                size={16}
                className="text-muted-foreground animate-spin"
              />
            </Skeleton>
            <Skeleton className="w-full aspect-square h-full  grid place-content-center">
              <Loader2
                size={16}
                className="text-muted-foreground animate-spin"
              />
            </Skeleton>
            <Skeleton className="w-full aspect-square h-full  grid place-content-center">
              <Loader2
                size={16}
                className="text-muted-foreground animate-spin"
              />
            </Skeleton>
          </div>
        </div>

        <div className="grid gap-2 w-full mt-4 sm:mt-0">
          <div className="flex items-center justify-between mb-2">
            <Skeleton key="skeleton-stock" className="w-20 h-10" />
            <Skeleton key="skeleton-wishlist" className="w-10 aspect-square" />
          </div>
          <Skeleton key="skeleton-name" className="sm:w-full h-10 " />
          <Skeleton
            key="skeleton-name-ln-2 sm:hidden"
            className="w-[75%] h-10"
          />

          <Skeleton key="skeleton-price" className="sm:w-32 h-10 mt-2" />

          <Skeleton key="skeleton-description" className="w-full h-36" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-24 rounded-full" />
            <Skeleton className="h-10 w-24 rounded-full" />
            <Skeleton className="h-10 w-24 rounded-full" />
          </div>
          <div className="flex gap-2">
            <Skeleton key="skeleton-cart-button" className="w-36 h-12" />
            <Skeleton key="skeleton-buy-button" className="w-16 h-12" />
          </div>
          <br />

          <div className="flex gap-2">
            <Skeleton key="skeleton-spec-icon" className="w-8 h-8" />
            <Skeleton key="skeleton-spec-header" className="w-44 h-8" />
          </div>
          <Skeleton key="skeleton-spec-1" className="w-28 h-4" />
          <Skeleton key="skeleton-spec-2" className="w-28 h-4" />
          <Skeleton key="skeleton-spec-2" className="w-28 h-4" />
        </div>
      </div>
    </>
  );
};
