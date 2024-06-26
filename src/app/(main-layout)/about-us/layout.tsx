import { Padding } from "@/components/page-layout";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <hr />
      <div className="py-[7vh]">{children}</div>
    </div>
  );
}
