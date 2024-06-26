import { Metadata } from "next";
import Image from "next/image";

import { SidebarNav } from "@/components/ui/custom/sidebar-nav";
import { Padding } from "@/components/page-layout";
import { Separator } from "@/components/ui/separator";
import { Heart, Receipt, ReceiptIcon, Settings, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your account settings and set e-mail preferences.",
};

const sidebarNavItems = [
  {
    title: "Orders",
    href: "/account/orders",
    icon: <ReceiptIcon size={18} strokeWidth={2.5} />,
  },
  {
    title: "Wishlsit",
    href: "/account/wishlist",
    icon: <Heart size={18} strokeWidth={2.5} />,
  },
  {
    title: "Account",
    href: "/account",
    icon: <Settings size={18} strokeWidth={2.5} />,
  },
  {
    title: "Profile",
    href: "/account/profile",
    icon: <User size={18} strokeWidth={2.5} />,
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <hr />
      <Padding className="min-h-screen py-10 ">
        <div className="md:hidden">
          <Image
            src="/examples/forms-light.png"
            width={1280}
            height={791}
            alt="Forms"
            className="block dark:hidden"
          />
          <Image
            src="/examples/forms-dark.png"
            width={1280}
            height={791}
            alt="Forms"
            className="hidden dark:block"
          />
        </div>
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-16 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/6">
            <div className="sticky top-10">
              <SidebarNav items={sidebarNavItems} />
            </div>
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </Padding>
    </>
  );
}
