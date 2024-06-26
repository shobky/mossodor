"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FullSlider({ slides }: { slides: any }) {
  const [isHolding, setIsHolding] = useState(false);

  const handleMouseDown = () => {
    setIsHolding(true);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
  };
  return (
    <div className="w-full h-[55vh]">
      <Swiper
        style={{
          // @ts-ignore
          "--swiper-pagination-color": "hsl(var(--background))",
        }}
        speed={300}
        parallax={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className={`mySwiper bg-black w-full rounded-xl h-full cursor-grab ${
          isHolding && "cursor-grabbing"
        }`}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        navigation={false}
        modules={[Parallax, Pagination, Navigation]}
      >
        {slides.map((slide: any, index: any) => (
          <SwiperSlide className="" key={index}>
            <span
              className={`w-full h-screen bg-black/20 absolute left-0 top-0 z-10 ease-in-out duration-1000 ${
                isHolding && "h-[85%] "
              }`}
            ></span>
            <div className="w-full h-full overflow-hidden">
              <Image
                className={`w-full h-full object-cover  z-10 ease-in-out duration-1000  ${
                  isHolding && "scale-[.7]"
                }`}
                src={slide.img}
                width={2000}
                height={2000}
                alt=""
              />
            </div>
            <div className="relative -top-[80%] z-20 ml-[10%] w-[85%] text-white space-y-2 ">
              <p
                className={`  text-[1.8rem] sm:text-[3rem] leading-none font-bold `}
                data-swiper-parallax="-500"
              >
                {slide.title}
              </p>
              <p className=" text-[1.5rem] sm:text-[2rem]">£{slide.price}</p>
              <Button
                className="bg-black/20 backdrop-blur-xl text-md sm:text-lg h-12 sm:h-14"
              >
                Shop This Products
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
