"use client";

import { cn } from "@/lib/utils/cn";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  TRANSPARENT_PAGES,
  useHeader,
} from "../page-layout/header/header-provider";

export default function Logo({
  className,
  ignoreModals,
}: {
  className?: string;
  ignoreModals?: boolean;
}) {
  const pathname = usePathname();
  const segments = pathname?.split("/") ?? [];
  const { theme } = useTheme();
  const { open } = useHeader();

  // this might be complicated but bare with me.
  // if there is a modal open -> background is the theme background then we use theme so if it's light we use the dark logo
  // if not then we see if are in a page that has a transparent navbar then we just use the dark them to get light logo.
  // and if not then the background color is the theme background and we use it to get the other color for the logo.
  const whichLogo = open
    ? theme
    : TRANSPARENT_PAGES[segments[1]]
    ? "dark"
    : theme;

  return (
    <Link href="/" className="z-20">
      <Image
        id="logo"
        width={140}
        height={80}
        priority
        alt="Mossodor logo"
        src={
          (ignoreModals
            ? theme === "light"
              ? "dark"
              : "light"
            : whichLogo) === "light"
            ? "/logos/logo-black.png"
            : "/logos/logo-white.png"
        }
        className={cn(`object-contain`, className)}
      />
    </Link>
  );
}
