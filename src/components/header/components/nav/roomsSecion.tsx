import Image from "next/image";
import React, { useState } from "react";
import { ListItem } from "./listItem";

export default function RoomsSection() {
  const [imageSrc, setImageSrc] = useState("/categories/living.jpg");
  const [imageLoading, setImageLoading] = useState(true);

  const handleMouseEnter = (newImageSrc: string) => {
    setImageLoading(true); // Trigger the loading state
    setImageSrc(newImageSrc);
  };

  return (
    <ul className="grid gap-3 p-4 md:w-[350px] lg:w-[550px] lg:grid-cols-3">
      <li className="row-span-3" style={{ position: "relative" }}>
        <Image
          priority
          src={imageSrc}
          width={400}
          height={500}
          alt="Room Image"
          className={`h-full w-full object-cover rounded-md image-transition ${
            imageLoading ? "opacity-50" : "opacity-100"
          }`}
          onLoad={() => setImageLoading(false)} // Handle the load event
        />
      </li>
      {/* Step 3: Add onMouseEnter to each ListItem */}
      <ListItem
        className="text-white opacity-100"
        href="/docs"
        title="Bedroom"
        onMouseEnter={() => handleMouseEnter("/categories/bedroom.jpg")}
      >
        Starting From £425
      </ListItem>
      <ListItem
        className="text-white opacity-100"
        href="/docs"
        title="Dining Room"
        onMouseEnter={() => handleMouseEnter("/categories/foyer.jpg")}
      >
        Starting From £425
      </ListItem>
      <ListItem
        className="text-white opacity-100"
        href="/docs/installation"
        title="Foyer"
        onMouseEnter={() => handleMouseEnter("/categories/foyer.jpg")}
      >
        Starting From £145
      </ListItem>
      <ListItem
        className="text-white opacity-100"
        href="/docs/installation"
        title="Kitchen"
        onMouseEnter={() => handleMouseEnter("/categories/kitchen.jpg")}
      >
        Starting From £145
      </ListItem>
      <ListItem
        className="text-white opacity-100"
        href="/docs/installation"
        title="Living Room"
        onMouseEnter={() => handleMouseEnter("/categories/living.jpg")}
      >
        Starting From £145
      </ListItem>
      <ListItem
        className="text-white opacity-100"
        href="/docs/installation"
        title="Office"
        onMouseEnter={() => handleMouseEnter("/categories/foyer.jpg")}
      >
        Starting From £145
      </ListItem>
    </ul>
  );
}
