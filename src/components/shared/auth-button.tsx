"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { KeyRound, LogOut } from "lucide-react";
import { NavLink } from "../page-layout/header/nav/mobile-nav-menu";
import { usePathname } from "next/navigation";

export default function AuthButton() {
  const session = useSession();
  const pathname = usePathname();
  return (
    <div className="w-full">
      {session?.data?.user ? (
        <Button
          className="w-full justify-start p-0 hover:bg-transparent font-medium gap-3"
          onClick={() => signOut()}
          variant={"ghost"}
        >
          <LogOut size={20} strokeWidth={2} />
          <span>Log Out</span>
        </Button>
      ) : (
        <NavLink href={`/login?callback=${pathname}`}>
          <KeyRound size={20} strokeWidth={2} />
          <span>Log In</span>
        </NavLink>
      )}
    </div>
  );
}
