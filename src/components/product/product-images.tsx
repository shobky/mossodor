"use client";

import Image from "next/image";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export default function ProductImages({
  images,
  thumbnail,
  alt,
}: {
  images: string[];
  thumbnail: string;
  alt: string;
}) {
  const [currentImage, setCurrentImage] = useState(thumbnail);
  const [shownImages, setImages] = useState(images);
  return (
    <div className="space-y-1 sm:sticky top-[10vh] ">
      <div className="overflow-hidden bg-secondary dark:bg-black aspect-square w-full sm:w-[60vh] rounded-lg flex justify-center items-start ">
        <Image
          src={`http://mossodor.com:3000/_next/image?url=${encodeURIComponent(
            currentImage
          )}&w=800&h=800&q=75`}
          width={800}
          height={800}
          alt={alt}
          quality={75}
          placeholder="blur"
          blurDataURL={`/_next/image?url=${encodeURIComponent(
            currentImage
          )}&w=10&q=5`}
          className="w-full sm:w-[60vh] "
        />
      </div>
      <ScrollArea className="w-full sm:w-[60vh] pb-3">
        <div className="flex gap-1">
          {shownImages?.map((image, index) => (
            <button
              key={"product-image" + index}
              disabled={currentImage === image}
              className={`ease-in-out duration-300 flex-shrink-0 overflow-hidden rounded-lg w-[19.25%] h-[19.25%] bg-secondary dark:bg-black ${
                currentImage === image ? "opacity-55" : ""
              }`}
              onClick={() => setCurrentImage(image)}
            >
              <Image
                src={image}
                className="w-full"
                alt="product image"
                width={100}
                height={100}
                placeholder="blur"
                blurDataURL={`http://mossodor.com:3000/_next/image?url=${encodeURIComponent(
                  image
                )}&w=10&q=5`}
                onClick={() => setCurrentImage(image)}
              />
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="w-full" />
      </ScrollArea>
    </div>
  );
}
