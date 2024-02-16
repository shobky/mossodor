import React from "react";
import Logo from "../shared/logo";
import MobileNavMenu from "./components/mobileNavMenu";
import {
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";
import { Nav } from "./components/nav";
import { Search } from "./components/search";
import DynamicHeaderOnScroll from "./components/dynamicHeaderOnScroll";

export default function Header() {
  return (
    <DynamicHeaderOnScroll>
      <div className="flex justify-between items-center px-[.9rem]">
        <div className="flex items-center gap-2">
          <MobileNavMenu />
          <Logo width={250} height={100} className="w-[8.5rem] sm:w-48" />
        </div>
        <QuickNavLinks />
      </div>
      <Nav />
    </DynamicHeaderOnScroll>
  );
}

export const QuickNavLinks = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-3 ">
      <Search />
      <User
        size={32}
        className="hover:bg-white/10 hover:backdrop-blur-lg p-1.5 rounded-full hidden sm:block"
      />
      <Heart
        size={32}
        className="hover:bg-white/10 hover:backdrop-blur-lg p-1.5 rounded-full"
      />
      <ShoppingCart
        size={32}
        className="hover:bg-white/10 hover:backdrop-blur-lg p-1.5 rounded-full"
      />
    </div>
  );
};
