import Shop from "@/components/shop";
import { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <Shop>{children}</Shop>;
}
