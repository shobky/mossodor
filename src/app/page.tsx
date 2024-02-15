import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full absolute top-0 bg-top h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className=" absolute top-0 left-0 w-full h-screen gradient-background"></div>

      <section className="z-20 mt-[30vh] text-center flex flex-col items-center space-y-4 text-white ">
        <h1 className="text-[4rem] font-bold">
          Experience Elegance in Illumination
        </h1>
        <h2 className="text-2xl w-[70%] ">
          Discover the art of modern lighting fixtures with Mossodor. Our
          curated collection transforms your space into a testament to
          contemporary design and sophistication.
        </h2>
        <Button className="h-14 py-4 px-14  bg-black/30 shadow-xl hover:bg-white/10 hover:outline-none hover:font-bold  outline outline-[.1rem] border-white rounded-xl">
          SHOP NOW
        </Button>
      </section>
    </main>
  );
}
