import UserAvatar from "@/components/shared/user-avatar";
import { getCurrentSession } from "@/lib/auth";
import React from "react";
import { User } from "lucide-react";
import Link from "next/link";

export default async function SidebarUser() {
  const session = await getCurrentSession();
  if (!session || !session.user)
    return (
     <Link href={"/signup"}>
      <button className="flex items-center gap-2 font-medium text-base ">
        <div className="bg-secondary p-2 rounded-md text-muted-foreground">
          <User size={20} />
        </div>
        Create your account
      </button></Link>
    );

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start gap-3 ">
        <UserAvatar />
        <div className="leading-none ">
          <p
            className={`font-semibold ${
              session.user.name.length > 16 ? "text-base" : "text-lg"
            }`}
          >
            {session.user.name}
          </p>
          <p className="text-muted-foreground">{session.user.email}</p>
        </div>
      </div>
    </div>
  );
}
