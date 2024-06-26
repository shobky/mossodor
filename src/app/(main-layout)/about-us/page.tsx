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
    name: "Handmade Wonders",
    image: "/about/homemade.jpg",
    description:
      "In collaboration with R.Samuels Custom Lighting, we offer pieces that tell a story of timeless skill.",
  },
];
export default function AboutPage() {
  return (
    <div className="space-y-20 ">
      <section className="grid place-content-center text-center  gap-4 mx-[7vw] sm:mx-[10vw]">
        <p className="font-medium text-sm ">ABOUT MOSSODOR</p>
        <h1 className="font-bold text-primary text-3xl ">
          Where Light Meets Elegance
        </h1>
        <p className="text-sm">
          At Mossodor, we illuminate spaces with a blend of tradition and
          innovation. Born from over 55 years of collective expertise in design
          and construction, our brand is the brainchild of visionaries dedicated
          to the art of creating unique spaces. Our signature can be seen in the
          prestigious contours of Birmingham&apos;s landmarks, each lit with the
          promise of Mossodor&apos;s quality.
        </p>
      </section>
      <div className="mx-[7vw] sm:mx-[10vw]">
        <Image
          className="sm:w-1/2 block mx-auto"
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
      <section className="grid place-content-center text-center gap-4 bg-foreground text-background px-4 py-20 sm:p-20">
        <h2 className="font-bold  text-3xl">Why Choose Mossodor?</h2>
        <p className=" mx-[7vw] sm:mx-[10vw]">
          Our mission is simple: to amaze with beauty, elegance, and
          affordability. We bring lighting solutions to your doorstep and a
          legacy of craftsmanship and attention to detail. From the grandeur of
          chandeliers to the modern simplicity of pendant lights, our range is
          curated to bring your interiors to life.
        </p>
      </section>
      <section className="grid place-content-center  gap-4 sm:scale-90">
        <h3 className="text-3xl font-bold sm:scale-110 text-center">
          Our Collection
        </h3>
        <div className="grid sm:grid-cols-3 gap-2 items-start mx-[7vw] sm:mx-[10vw]">
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
      <section className="grid place-content-center gap-4 text-center mx-[7vw] sm:mx-[10vw]">
        <h4 className="text-3xl font-bold">Our Vision</h4>
        <p>
          <span>&quot;To amaze through beauty, elegance, and price.&quot;</span>{" "}
          This is not just our mantra; it&apos;s our promise to you. At
          Mossodor, we&apos;re not just selling lights but crafting experiences
          that make your home worth remembering.
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
