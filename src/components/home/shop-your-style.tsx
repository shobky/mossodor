import React from "react";
import { SectionTitle } from "@/components/ui/custom/layout";
import { Padding } from "@/components/page-layout";
import Image from "next/image";
import { Paintbrush } from "lucide-react";
import { ScrollBar, ScrollArea } from "../ui/scroll-area";
import Link from "next/link";

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
          Pick your style. <Paintbrush />
        </SectionTitle>
        <p className="relative   text-center mx-[10vw] sm:mx-[15vw]">
          Find your unique lighting style, whether Luxury, vintage, or
          industrial for any room.
        </p>
      </Padding>

      <ScrollArea>
        <ul className="grid grid-cols-5 gap-1 w-[200vw] md:w-auto md:mx-[10vw] relative  p-12">
          {styles.map((style) => (
            <Link
              href={`/shop?f=${JSON.stringify([
                { name: "Style", value: [style.title] },
              ])}`}
              key={style.title}
            >
              <li className="relative group ">
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
                <p className=" font-semibold text-base  z-20 text-center mt-2 ">
                  {style.title}
                </p>
              </li>
            </Link>
          ))}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
