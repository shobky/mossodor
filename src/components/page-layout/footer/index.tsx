import React from "react";
import Logo from "@/components/shared/logo";
import { Dot, Landmark, PhoneOutgoing } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Padding } from "..";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-foreground text-background rounded-t-[40px] sm:rounded-t-[80px] z-[11] relative">
      <Padding className="py-[10vh] ">
        <footer>
          <div className="space-y-2">
            <section className="space-y-4 col-span-2 xl:col-span-3">
              <Logo ignoreModals={true} className="w-40 sm:w-44" />
              <div className="space-y-2">
                <p className="flex gap-2 items-start">
                  <Landmark
                    size={16}
                    className="text-background relative top-[5px] flex-shrink-0"
                  />
                  <span>
                    31-53 Hunders Rd, Birmingham B19 1DP, United Kingdom
                  </span>
                </p>
                <a className="flex gap-2 items-start" href="tel:+441212855040">
                  <PhoneOutgoing
                    size={14}
                    className="text-background relative top-[5px] flex-shrink-0"
                  />
                  +44 121 285 5040
                </a>
              </div>
            </section>
            <br />
            <section>
              <ul className="flex justify-start lg:justify-between flex-wrap items-center gap-4">
                <FooterListItem href="/shop">Shop</FooterListItem>
                {/* <FooterListItem>R. Samuels</FooterListItem> */}
                {/* <FooterListItem>Clearane</FooterListItem> */}
                {/* <FooterListItem>Sale%</FooterListItem> */}
                {/* <FooterListItem className="flex items-center gap-1">
                  Blog
                </FooterListItem> */}
                <FooterListItem href="/about-us">About</FooterListItem>
                <FooterListItem href="/about-us/privacy-policy">
                  Privacy Policy
                </FooterListItem>
                <FooterListItem href="/about-us/return-and-exchanges">
                  Return & Exchanges
                </FooterListItem>
                <FooterListItem href="/about-us/shipping-policy">
                  Shipping Policy
                </FooterListItem>
                <FooterListItem href="/about-us/faqs">FAQS</FooterListItem>
                {/* <FooterListItem>Contact</FooterListItem> */}
              </ul>
            </section>
          </div>
          <hr className="my-8 opacity-10" />
          <div className="flex sm:flex-row flex-col-reverse justify-between items-center">
            <p className="text-center sm:text-left">
              &copy; 2024 Mossodor. All rights reserved. Designed by{" "}
              <a href="https://www.xappee.com" className="text-background">
                Xappee.
              </a>
            </p>
            <Image
              src="/payments.png"
              width={600}
              height={150}
              className="w-[87%] sm:w-[20vw]"
              alt="Accepted payment methods "
            />
          </div>
        </footer>
      </Padding>
    </div>
  );
}

const FooterListItem = ({
  children,
  className,
  href = "#",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <Link href={href}>
      <li
        className={cn(
          "hover:text-background cursor-pointer w-fit hover:underline",
          className
        )}
      >
        {children}
      </li>
    </Link>
  );
};
