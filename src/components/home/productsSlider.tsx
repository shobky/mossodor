import React from "react";
import { Section, SectionTitle } from "../ui/custom/layout";
import FullSlider from "../shared/slider/fullSlider";

export default function ProductsSlider() {
  const slides = [
    {
      img: "/categories/chandelier.jpg",
      title: "Hollywood Glam Black Chandelier",
      price: 222,
    },
    {
      img: "/categories/foyer.jpg",
      title: "Lusso Square Chandelier",
      price: 222,
    },
    {
      img: "/categories/pendant.jpg",
      title: "Alessia Black & Gold Chandelier         ",
      price: 222,
    },
  ];
  return (
    <Section className="">
      <SectionTitle>Crafted for Connoisseurs</SectionTitle>
      <FullSlider slides={slides} />
    </Section>
  );
}
