import React from "react";
import { SectionTitle } from "@/components/ui/custom/layout";
import FreeModeSlider from "@/components/shared/slider/freemodeSlider";
import { Padding } from "@/components/page-layout";

const styles = [
  { name: "Modern", img: "/styles/SS_Modern.jpg" },
  { name: "Minimalist", img: "/styles/SS_Minimalist.jpg" },
  { name: "Scandinavian", img: "/styles/SS_Scandinavian.jpg" },
  { name: "Luxury", img: "/styles/SS_Luxury.jpg" },
  { name: "Industrial", img: "/styles/SS_Industrial.jpg" },
  { name: "Commercial", img: "/styles/SS_Commercial.jpg" },
];
export default function StylesSlider() {
  return (
    <Padding variant="centered" className="space-y-1">
      <SectionTitle>Syle That Speaks Volumes</SectionTitle>
      <p className="-mt-6 text-center mx-[10vw]">
        Modern, minimalist, or industrial whatever your style, our modern
        lighting fixtures are designed to complement and enhance your aesthetic.
      </p>
      <FreeModeSlider slides={styles} />
    </Padding>
  );
}
