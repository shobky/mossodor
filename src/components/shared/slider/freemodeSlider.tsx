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
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import Image from "next/image";

export default function FreeModeSlider({ slides }: { slides: any }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Swiper
        style={{
          // @ts-ignore
          "--swiper-pagination-color": "hsl(var(--foreground))",
        }}
        slidesPerView={isDesktop ? 5 : 1.6}
        spaceBetween={8} // Adjust the space between slides
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper flex w-screen -ml-[7vw]"
      >
        {slides.map((slide: any, index: any) => (
          <SwiperSlide
            key={index}
            className=""
          >
            <Image
              width={400}
              height={400}
              className="brightness-90 rounded-3xl group-hover:brightness-100 transition-all duration-300 ease-in-out w-full"
              src={slide.image}
              alt={slide.title}
            />
            <p className="text-sm sm:text-lg font-semibold text-center pt-1">
              {slide.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
