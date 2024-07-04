"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReviewCard } from "./reviewCard";
import { customerReviews, IReview } from "./data";
import { Button } from "@/components/ui/button";
import { Maximize2 } from "lucide-react";
import { useState } from "react";
import { ReviewOpenedDialog } from "./review-opened-dialog";

export function ReviewsCaroucel() {
  const [activeReview, setActiveReview] = useState<IReview | undefined>(
    undefined
  );
  return (
    <Carousel className="w-full max-w-[70vw]">
      <ReviewOpenedDialog review={activeReview} setActiveReview={setActiveReview} />
      <CarouselContent>
        {customerReviews.map((review, index) => (
          <CarouselItem className=" sm:basis-1/3 w-full" key={index}>
            <ReviewCard key={review._id + "_" + index} review={review}>
                <Button
                    onClick={() => setActiveReview(review)}
                    variant={"ghost"}
                    size={"icon"}
                    className="-mr-4"
                >
                    <Maximize2 size={18} />
                </Button>
            </ReviewCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
