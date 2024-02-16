import React, { useState } from "react";
import { Button } from "../ui/button";
import { Pause, PauseCircle, PlayCircle } from "lucide-react";
import { Play } from "next/font/google";

function HeroBackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 w-full bg-top min-h-[70vh] h-screen sm:h-[70%] sm:min-h-[600px] object-cover"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
  );
}

function HeroOverlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-[70vh] gradient-background"></div>
  );
}

function HeroContent() {
  return (
    <div className=" z-20 text-white text-center space-y-2 sm:space-y-8">
      <h1 className="text-[4rem] px-5 sm:text-[5.4rem] leading-none font-olivera">
        Experience Elegance in Illumination.
      </h1>
      <h2 className="text-lg sm:text-2xl mx-5 sm:mx-[25%] font-light ">
        Discover the art of modern lighting fixtures with Mossodor.
      </h2>
      <HeroActions />
    </div>
  );
}

function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row  items-center justify-center gap-2">
      <Button className="h-12 sm:h-14  border-none hover:backdrop-blur-xl border-white bg-primary/80 text-lg sm:text-xl  ">
        SHOP NOW
      </Button>
      <Button
        variant="outline"
        className="h-12 hidden sm:flex sm:h-14  bg-transparent hover:bg-white/80 hover:border-primary  text-lg sm:text-xl "
      >
        ABOUT US
      </Button>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full pt-24  h-screen sm:h-[70vh] min-h-[600px] bg-black">
      <HeroBackgroundVideo />
      <HeroOverlay />
      <HeroContent />
    </section>
  );
}
