import Image from "next/image";
import Link from "next/link";
import React from "react";

const COLLECTION = [
  {
    name: "Chandeliers & Wall Lights",
    image: "/about/chandleers.webp",
    description:
      "A symphony of glass and light, designed to be the centrepiece of any room.",
  },
  {
    name: "Pendant Lights & Commercial Lighting",
    image: "/about/pendants.webp",
    description:
      "Functional yet fashionable, our lights are crafted to complement any space.",
  },
  {
    name: "Bambo Ratten lights",
    image: "/about/homemade.jpg",
    description:
      "In collaboration with R.Samuels Custom Lighting, we offer pieces that tell a story of timeless skill.",
  },
];
export default function AboutPage() {
  return (
    <div className="space-y-20">
      <section className="grid place-content-center text-center  gap-4 mx-[7vw] sm:mx-[12.5vw]">
        <p className="font-medium text-sm ">ABOUT MOSSODOR</p>
        <h1 className="font-bold text-primary text-3xl ">
          Where lightening Meets Elegance
        </h1>
        <p className="text-sm">
          Welcome to Mossodor, the foundation resource for indoor online
          lighting UK company. Mossodor is enthusiastic about lighting places
          with an accurate balance of history and creativity, generating
          atmospheres that leave an unforgettable impact. Mossodor, with over 55
          years of combined design and building experience, is a shining example
          of outstanding craftsmanship and imaginative design, based in
          Birmingham&apos;s architectural heritage, each lit with the promise of
          Mossodor&apos;s quality.
        </p>
        <div className="mx-[7vw] sm:mx-[12.5vw]">
          <Image
            className="sm:w-2/3 block mx-auto rounded-xl"
            width={800}
            height={400}
            src={"/about/mossodor-about-hero-image-compressed.png"}
            alt="Mossodor lighting"
          />
          <p className="text-xs text-muted-foreground text-center py-2">
            &apos;From Our{" "}
            <Link className="underline" href={"/pendant-lights"}>
              Pendant Lights
            </Link>{" "}
            Collection.&apos;
          </p>
        </div>
      </section>

      <section className="grid place-content-center text-center gap-4 bg-foreground text-background px-4 py-20 sm:p-20 mx-[7vw] sm:mx-[12.5vw] rounded-xl">
        <h2 className="font-bold  text-3xl">Why Choose Mossodor?</h2>
        <p className=" mx-[7vw] ">
          Mossodor online shop combines history and innovation, and each light
          expresses an idea of classic elegance and beauty. From the grandeur of
          chandeliers to the modern simplicity of pendant lights, Mossodor will
          convert your home into a marvel of brightness and beauty.
        </p>
      </section>
      <section className="grid place-content-center  gap-4 sm:scale-90">
        <p className="font-medium text-sm text-center ">OUR COLLECTION</p>

        <div className="grid sm:grid-cols-3 gap-10 items-start mx-[7vw] sm:mx-[12.5vw]">
          {COLLECTION.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-2 aspect-video sm:aspect-square"
            >
              <Image
                width={400}
                height={400}
                src={item.image}
                alt={item.name}
                className=" rounded-md aspect-square"
              />
              <div className="text-left sm:text-center space-y-2 sm:space-y-0">
                <p className="font-medium text-lg">{item.name}</p>
                <p className="text-base sm:text-sm sm:mx-10">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="grid place-content-center gap-4 text-center mx-[7vw] sm:mx-[12.5vw]">
        <h4 className="text-3xl font-bold">Our Vision</h4>
        <p>
          <span>
            Our journey began with a vision: to transform how we see lighting
            and fill places with warmth, nature, and enhancement that are
            affordable and eco - friendly. Mossodor&apos;s signature can be
            found in every precisely created lighting anchor, from the majesty
            of chandelier&apos;s attractions to the sensitivity of home
            interiors, demonstrating our forever passion to perfection.
          </span>
        </p>
        <div>
          <Image
            className="sm:w-1/2 block mx-auto"
            width={1000}
            height={600}
            src={"/about/mossodor-about-budget.png"}
            alt="Mossodor lighting"
          />
          <p className="text-xs text-muted-foreground text-center py-2">
            &apos;From Our{" "}
            <Link className="underline" href={"/pendant-lights"}>
              Pendant Lights
            </Link>{" "}
            Collection.&apos;
          </p>
        </div>
      </section>
    </div>
  );
}
