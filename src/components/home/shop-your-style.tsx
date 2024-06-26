import React from "react";
import { SectionTitle } from "@/components/ui/custom/layout";
import { Padding } from "@/components/page-layout";
import Image from "next/image";
import { Paintbrush } from "lucide-react";
import { ScrollBar, ScrollArea } from "../ui/scroll-area";

export default function ShoPYourStyle() {
  const styles = [
    {
      title: "Industrial",
      image: "/styles/1.jpg",
    },
    {
      title: "Luxury",
      image: "/styles/2.jpg",
    },
    {
      title: "Ratten",
      image: "/styles/3.jpg",
    },
    {
      title: "Scandinavian",
      image: "/styles/4.jpg",
    },
    {
      title: "Vintage",
      image: "/styles/5.jpg",
    },
  ];
  return (
    <div className="space-y-1">
      <Padding className="space-y-1" variant="centered">
        <SectionTitle>
          Shop your style <Paintbrush />
        </SectionTitle>
        <p className="relative   text-center mx-[15vw]">
          Luxury, vintage, or industrial whatever your style, our modern
          lighting fixtures are designed to complement and enhance your
          aesthetic.
        </p>
      </Padding>

      <ScrollArea>
        <ul className="grid grid-cols-5 gap-1 w-[270vw] md:w-auto md:mx-[10vw] relative  p-12">
          {styles.map((style) => (
            <li key={style.title} className="relative group ">
              <div className="overflow-hidden   h-[90%]">
                <Image
                  key={style.title}
                  alt={style.title}
                  width={200}
                  height={300}
                  src={style.image}
                  className=" w-full h-full brightness-90 group-hover:brightness-100 transition-all duration-300 ease-in-out rounded-[30px] "
                />
              </div>
              <p className=" font-semibold text-lg  z-20 text-center mt-2 ">
                {style.title}
              </p>
            </li>
          ))}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
