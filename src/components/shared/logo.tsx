import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Logo({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      width={width}
      height={height}
      alt="Mossodor logo"
      src="/mossodor.png"
      className={cn(" object-contain h-8", className)}
    />
  );
}
