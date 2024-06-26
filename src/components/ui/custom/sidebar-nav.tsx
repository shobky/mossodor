"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/cn";
import { buttonVariants } from "@/components/ui/button";
import { ReactNode } from "react";
import { Separator } from "../separator";

type Item = {
  href: string;
  title: string;
  icon: ReactNode;
};
interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: (Item | null)[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => {
        if (item === null) return <br key={"empty-link"} />;
        return (
          <Link
            key={"link" + item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href
                ? "bg-muted text-muted-foreground cursor-default hover:text-muted-foreground hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start gap-4 "
            )}
          >
            {item.icon} {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
