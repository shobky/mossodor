"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function FreeModeSlider({ slides }: { slides: any }) {
  const isDekstop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Swiper
        style={{
          // @ts-ignore
          "--swiper-pagination-color": "hsl(var(--foreground))",
        }}
        slidesPerView={isDekstop ? 5 : 2.5}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper  w-[90vw] sm:w-[80vw] mx-[5vw] sm:mx-[10vw]"
      >
        {slides.map((slide: any, index: any) => (
          <SwiperSlide key={index} className="">
            <img className=" object-cover" src={slide.img} alt={slide.title} />
            <p className="text-sm sm:text-lg font-semibold text-center pt-1 ">
              {slide.name}
            </p>
          </SwiperSlide>
        ))}
        <br />
        <br />
      </Swiper>
    </>
  );
}
