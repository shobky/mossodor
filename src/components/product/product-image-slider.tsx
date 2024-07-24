import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./image-slider.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProductImageSliderProps {
  images: string[];
  alt?: string;
}

export default function ProductImageSlider({
  images,
  alt = "Product Image",
}: ProductImageSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="space-y-1 lg:sticky top-[10vh] ">
      <div className="grid overflow-hidden bg-secondary dark:bg-black w-full lg:w-[calc(30vw)]   rounded-lg justify-center items-start relative ">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Thumbs]}
          className="object-contain aspect-square  w-full border-b-2  border-background   "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="">
              <Image
                className="object-contain"
                width={1000}
                height={1000}
                quality={100}
                alt={alt}
                src={image}
              />
            </SwiperSlide>
          ))}
          <div className="w-full flex justify-between absolute top-1/2 px-6 z-10">
            <button
              onClick={goPrev}
              className="bg-background/80 hover:bg-background rounded-full p-1.5 text-muted-foreground"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              onClick={goNext}
              className="bg-background/80 hover:bg-background rounded-full p-1.5 text-muted-foreground"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={0}
          slidesPerView={3.5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className="rounded-xl object-cover"
                width={150}
                height={150}
                alt={alt}
                src={image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
