import React from "react";
import Logo from "../shared/logo";
import MobileNavMenu from "./components/mobileNavMenu";
import {
  CarTaxiFront,
  Heart,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import { Nav } from "./components/nav";
import { Search } from "../search";

export default function Header() {
  return (
    <div className="h-36">
      <header className="space-y-4 p-12 fixed w-full  z-20 ">
        <div className="flex justify-between items-center px-[10vw] text-white">
          <div className="flex items-center">
            <MobileNavMenu />
            <Logo width={250} height={100} className="w-32 sm:w-40" />
          </div>
          <div className="flex items-center gap-3 ">
            <Search />
            <User size={32} className="hover:bg-white/10 p-1.5 rounded-full" />
            <Heart size={32} className="hover:bg-white/10 p-1.5 rounded-full" />
            <ShoppingCart
              size={32}
              className="hover:bg-white/10 p-1.5 rounded-full"
            />
          </div>
        </div>
        <hr className=" mx-[10vw] border-white/20" />
        <div className="">
          <Nav />
          <hr className=" mx-[10vw] border-white/20 mt-4" />
        </div>
      </header>
    </div>
  );
}
