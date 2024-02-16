"use client";
import * as React from "react";
import Link from "next/link";

import {
  NavigationMenuContent,
  NavigationMenu,
} from "@radix-ui/react-navigation-menu";
import {
  NavigationMenuTrigger,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import RoomsSecion from "./roomsSecion";
import { ListItem } from "./listItem";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Nav() {
  return (
    <NavigationMenu className="border border-white/10 border-x-0 py-4 hidden sm:block">
      <NavigationMenuList className="flex items-center justify-between ">
        <Button variant={"skumorph"}>
          <Link href="/shop">Shop</Link>
        </Button>
        <NavigationMenuItem className=" relative">
          <NavigationMenuTrigger className="text-base">
            Chandeliers
          </NavigationMenuTrigger>
          <CustomNavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[245px] lg:w-[360px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Image
                  src="/categories/chandelier.jpg"
                  width={500}
                  height={650}
                  priority
                  alt="Chandeliers"
                  className="h-full w-[full] object-cover rounded-md"
                />
              </li>
              <ListItem
                className="opacity-100"
                href="/docs"
                title="Crystal chandeliers"
              >
                Starting From £125
              </ListItem>
              <ListItem
                className="opacity-100"
                href="/docs/installation"
                title="  Led Chandeliers"
              >
                Starting From £245
              </ListItem>
            </ul>
          </CustomNavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" relative">
          <NavigationMenuTrigger className="text-base">
            Pendant Lights
          </NavigationMenuTrigger>
          <CustomNavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[245px] lg:w-[360px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Image
                  src="/categories/pendant.jpg"
                  width={500}
                  height={650}
                  priority
                  alt="Chandeliers"
                  className="h-full w-[full] object-cover rounded-md"
                />
              </li>
              <ListItem
                className="opacity-100"
                href="/docs"
                title="Glass Pendant Lights"
              >
                Starting From £425
              </ListItem>
              <ListItem
                className="opacity-100"
                href="/docs/installation"
                title="Copper Pendant Lights"
              >
                Starting From £145
              </ListItem>
            </ul>
          </CustomNavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" relative">
          <NavigationMenuTrigger className="text-base">
            Wall Lights
          </NavigationMenuTrigger>
          <CustomNavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[245px] lg:w-[360px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Image
                  src="/categories/wallLight.jpg"
                  width={500}
                  height={650}
                  priority
                  alt="Chandeliers"
                  className="h-full w-[full] object-cover rounded-md"
                />
              </li>
              <ListItem
                className="opacity-100"
                href="/docs"
                title="Gold Wall Lights"
              >
                Starting From £425
              </ListItem>
              <ListItem
                className="opacity-100"
                href="/docs/installation"
                title="Led Wall Lights
"
              >
                Starting From £145
              </ListItem>
            </ul>
          </CustomNavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" relative">
          <NavigationMenuTrigger className="text-base">
            Rooms
          </NavigationMenuTrigger>
          <CustomNavigationMenuContent>
            <RoomsSecion />
          </CustomNavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" relative ">
          <Link href="/docs" legacyBehavior passHref>
            <Button variant={"skumorph"} className="text-base">
              Blog
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className=" relative ">
          <Link href="/docs" legacyBehavior passHref>
            <Button variant={"skumorph"} className="text-base">
              Sale
            </Button>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className=" relative ">
          <Link href="/docs" legacyBehavior passHref>
            <Button variant={"skumorph"} className="text-base">
              Clearance
            </Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const CustomNavigationMenuContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <NavigationMenuContent
      className="backdrop-blur-xl bg-black/40 z-30 
data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-20 data-[motion=from-start]:slide-in-from-left-20 data-[motion=to-end]:slide-out-to-right-20 data-[motion=to-start]:slide-out-to-left-20 md:absolute md:w-auto 
absolute left-0 mt-6 rounded-lg"
    >
      {children}
    </NavigationMenuContent>
  );
};
