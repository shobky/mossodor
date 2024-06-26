"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ICategory } from "@/lib/types";
import {
  ArrowRight,
  ChevronRight,
  Home,
  ListTree,
  LogIn,
  LogOut,
  MessageCircleMore,
  NotepadText,
  Speech,
  Store,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeSwitch } from "@/providers/theme.provider";
import { signOut, useSession } from "next-auth/react";
import MobileCategoriesMenu from "../categories/mobile-categories-menu";
import AuthButton from "@/components/shared/auth-button";

export function MobileNav({
  categories,
  children,
}: {
  categories: ICategory[];
  children: React.ReactNode[];
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Sheet onOpenChange={handleOpen} open={open}>
      <SheetTrigger onClick={handleOpen} asChild>
        <Button
          size={"icon"}
          variant="ghost"
          className="p-0 rounded-full hover:bg-transparent hover:text-auto"
        >
          {/* rendering User avatar */}
          {children[0]}
        </Button>
      </SheetTrigger>
      <SheetContent
        onInteractOutside={handleOpen}
        className="w-screen p-0 overflow-hidden"
      >
        <ScrollArea className="h-screen ">
          <div className="min-h-screen px-4 py-6 space-y-6 bg-background">
            <div className="flex items-center justify-between">
              {/* rendering SidebarUser. Avatar + Name + Email */}
              {children[1]}
              <button onClick={() => setOpen(false)}>
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            <hr className="scale-x-125 " />
            <div className="grid gap-3">
              <NavLink href="/">
                <Home size={20} strokeWidth={2} />
                <span>Home</span>
              </NavLink>
              <NavLink href="#">
                <NotepadText size={20} strokeWidth={1.7} />
                <span>Blog</span>
              </NavLink>
              <NavLink href="/">
                <Store size={19} strokeWidth={2} />
                <span>Shop</span>
              </NavLink>
              <NavLink href="#">
                <Speech size={20} strokeWidth={2} />
                <span>FAQs</span>
              </NavLink>
              <NavLink href="#">
                <MessageCircleMore size={20} strokeWidth={2} />
                <span>Contact</span>
              </NavLink>
              <ThemeSwitch className="text-lg font-medium text-secondary-foreground" />
              <AuthButton />
            </div>
            <hr className="scale-x-125 " />
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-medium text-muted-foreground">
                <ListTree size={20} />
                <span> Browse Mossodor&apos;s Collection</span>
              </div>
              <MobileCategoriesMenu
                categories={categories}
                handleOpen={handleOpen}
              />
            </div>
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="flex w-full items-center justify-between font-medium text-secondary-foreground"
    >
      <span className="flex items-center gap-3">{children}</span>
      <ChevronRight size={15} />
    </Link>
  );
};
