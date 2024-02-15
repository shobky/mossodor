import { cn } from "@/lib/utils";
import { ChevronRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const MobileNavLink = ({
  children,
  className,
  href,
  content,
}: {
  children?: React.ReactNode;
  className?: string;
  href: string;
  content?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      {children ? (
        <div>
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "w-full flex items-center justify-between border-b px-6 ",
              className
            )}
          >
            <span className="py-2">{content}</span>
            <ChevronRight
              size={21}
              className={`relative   ${open && "rotate-90"} `}
            />
          </button>
          <ul
            className={`max-h-0 overflow-hidden ease-in-out duration-150 text-sm text-muted-foreground ${
              open && "max-h-[250px]"
            }`}
          >
            {children}
          </ul>
        </div>
      ) : (
        <Link
          href={href}
          className={cn(
            " flex items-center justify-between border-b py-2 px-6 ",
            className
          )}
        >
          {content}
        </Link>
      )}
    </li>
  );
};
