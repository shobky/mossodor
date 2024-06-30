import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function HeroBackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 w-screen bg-top h-[80vh] sm:h-screen lg:h-[80vh] object-cover bg-black"
    >
      <source
        className="pointer-events-none"
        src="/hero-video.mp4"
        type="video/mp4"
      />
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
    <div className="z-10 text-white text-center space-y-2 sm:space-y-4">
      <h1 className="px-5 text-[calc(14px+7vw)] sm:text-[calc(16px+5vw)] leading-none font-olivera">
        Experience Elegance in Illumination.
      </h1>
      <h2 className="text-base sm:text-lg lg:text-lg mx-5  font-light ">
        Discover the art of modern lighting <br /> fixtures with Mossodor.
      </h2>
      <HeroActions />
    </div>
  );
}

function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row  items-center justify-center gap-2">
      <Link href={"/shop"}>
        <Button className="h-12 hover:backdrop-blur-xl bg-primary/80  hover:brightness-110">
          SHOP NOW
        </Button>
      </Link>
     <Link href={"/about-us"}>
     <Button
        variant="outline"
        className="h-12 hidden  sm:flex border-white hover:border-background/20 transition-colors  bg-transparent hover:bg-background/80"
      >
        ABOUT US
      </Button></Link>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="grid items-center h-[80vh] sm:h-screen lg:h-[80vh] w-full relative -mt-[5.4rem]">
      <HeroBackgroundVideo />
      <HeroOverlay />
      <HeroContent />
    </section>
  );
}
