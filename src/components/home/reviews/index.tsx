import { MessagesSquare } from "lucide-react";
import { SectionTitle } from "@/components/ui/custom/layout";
import { Padding } from "@/components/page-layout";
import { ReviewsCaroucel } from "./reviews-caroucel";

export const Reviews = () => {
  return (
    <div className="flex justify-center">
      <Padding variant="centered" className="sm:w-[88%]">
        <SectionTitle className="flex flex-col-reverse sm:flex-row">
          <span>What our customers say about us</span> <MessagesSquare />
        </SectionTitle>
        <ReviewsCaroucel />
      </Padding>
    </div>
  );
};
