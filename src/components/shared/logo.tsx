import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Logo({
  width,
  height,
  className,
  theme,
}: {
  width: number;
  height: number;
  className?: string;
  theme?: "dark" | "light";
}) {
  return (
    <Image
      width={width + 150}
      height={height + 150}
      priority
      alt="Mossodor logo"
      src={theme === "dark" ? "/logos/logo-black.png" : "/logos/logo-white.png"}
      className={cn("object-contain ", className)}
    />
  );
}
