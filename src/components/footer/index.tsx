import React from "react";
import Logo from "../shared/logo";
import { Landmark, Link, PhoneOutgoing } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="p-5 sm:p-[10vw]">
      <div className=" grid grid-cols-2 sm:grid-cols-7 gap-6">
        <section className="space-y-4 col-span-2 xl:col-span-3">
          <Logo
            width={250}
            height={250}
            theme="dark"
            className="w-40 sm:w-44"
          />
          <p className="font-medium">
            Discover the art of modern lighting features.
          </p>
          <div className="space-y-2">
            <p className="flex gap-2 items-start">
              <Landmark size={23} className="text-primary relative top-1" />
              31-53 Hunders Rd, Birmingham B19 1DP, United Kingdom
            </p>
            <a className="flex gap-2 items-start" href="tel:+441212855040">
              <PhoneOutgoing size={16} className="text-primary relative top-1" /> +44 121 285
              5040
            </a>
          </div>
        </section>
        <section>
          <h3 className="font-semibold text-muted-foreground">Shop</h3>
          <ul className="space-y-2 mt-2">
            <FooterListItem>Shop all</FooterListItem>
            <FooterListItem>R. Samuels</FooterListItem>
            <FooterListItem>Clearane</FooterListItem>
            <FooterListItem>On sale</FooterListItem>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold text-muted-foreground">Categories</h3>
          <ul className="space-y-2 mt-2">
            <FooterListItem>Chandeliers</FooterListItem>
            <FooterListItem>Pendant Lights</FooterListItem>
            <FooterListItem>Wall Lights</FooterListItem>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold text-muted-foreground">Rooms</h3>
          <ul className="space-y-2 mt-2">
            <FooterListItem>Bedroom</FooterListItem>
            <FooterListItem>Dining Room</FooterListItem>
            <FooterListItem>Living Room</FooterListItem>
            <FooterListItem>Foyer</FooterListItem>
            <FooterListItem>Kitchen</FooterListItem>
            <FooterListItem>Office</FooterListItem>
          </ul>
        </section>
        <section>
          <ul className="space-y-2">
            <FooterListItem className="flex items-center gap-1">
              Blog <Link size={15} />
            </FooterListItem>
            <FooterListItem>Contact</FooterListItem>
            <FooterListItem>Privacy Policy</FooterListItem>
            <FooterListItem>Terms of Service</FooterListItem>
            <FooterListItem>Refund Policy</FooterListItem>
            <FooterListItem>Shipping Policy</FooterListItem>
          </ul>
        </section>
      </div>
      <hr className="my-8" />
      <div className="flex sm:flex-row flex-col-reverse justify-between items-center">
        <p className="text-center sm:text-left">
          &copy; 2024 Mossodor. All rights reserved. Designed by{" "}
          <a href="https://www.xappee.com" className="text-primary">
            Xappee.
          </a>
        </p>
        <Image
          src="/payments.png"
          width={600}
          height={150}
          className="w-full sm:w-[20vw]"
          alt="Accepted payment methods "
        />
      </div>
    </footer>
  );
}

const FooterListItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <li className={cn("hover:text-primary cursor-pointer w-fit", className)}>
      {children}
    </li>
  );
};
