"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ArrowRight, Menu as MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MobileNavLink } from "../navLink";
import Logo from "@/components/shared/logo";

export default function MobileNavMenu() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  if (isMobile)
    return (
      <nav>
        <Sheet>
          <SheetTrigger asChild>
            <button className=" relative top-[2.3px]">
              <MenuIcon className="text-muted-foreground" size={25} />
            </button>
          </SheetTrigger>
          <SheetContent
            className="p-0 flex flex-col justify-between"
            side={"left"}
          >
            <ul className="ease-in-out duration-75 overflow-y-auto">
              <Logo height={150} width={200} className="mx-6 my-8" />
              <MobileNavLink href="/shop" content="SHOP" />
              <MobileNavLink href="/clearance" content="SHOP BY TYPE">
                <MobileNavLink href="/shop" content="SHOP" />
                <MobileNavLink href="/sale" content="SALE" />
                <MobileNavLink href="/clearance" content="CLEARANCE" />
              </MobileNavLink>
              <MobileNavLink href="/clearance" content="SHOP BY ROOM">
                <MobileNavLink href="/shop" content="SHOP" />
                <MobileNavLink href="/sale" content="SALE" />
                <MobileNavLink href="/clearance" content="CLEARANCE" />
              </MobileNavLink>
              <MobileNavLink href="/clearance" content="SHOP BY STYLE">
                <MobileNavLink href="/shop" content="SHOP" />
                <MobileNavLink href="/sale" content="SALE" />
                <MobileNavLink href="/clearance" content="CLEARANCE" />
              </MobileNavLink>
              <MobileNavLink href="/blog" content="BLOG" />
              <MobileNavLink href="/about" content="ABOUT" />
              <MobileNavLink href="/contact" content="CONTACT" />
              <MobileNavLink href="/sale" content="SALE" />
              <MobileNavLink href="/clearance" content="CLEARANCE" />
            </ul>
            <div className="mx-6 my-10">
              <Button
                size={"lg"}
                className="text-lg items-center gap-2  w-full "
              >
                SIGN IN <ArrowRight size={18} />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    );
}
