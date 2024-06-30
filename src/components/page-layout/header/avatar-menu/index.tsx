import UserAvatar from "@/components/shared/user-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SidebarUser from "../nav/sidebar-user";
import AuthButton from "@/components/shared/auth-button";
import Link from "next/link";
import { History, Settings, Store } from "lucide-react";
import { ThemeSwitch } from "@/providers/theme.provider";

export function AvatarMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className=" p-1">
          <UserAvatar className="w-6 h-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60 p-2 ">
        <DropdownMenuItem>
          <SidebarUser />
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href={"/shop"} className="flex gap-3 font-medium">
            <Store size={20} /> Shop
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/account"} className="flex gap-3 font-medium">
            <Settings size={20} /> Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/account/orders"} className="flex gap-3 font-medium">
            <History strokeWidth={2.5} size={20} /> My Orders
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="font-medium">
          <ThemeSwitch />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-sm">
          <AuthButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
