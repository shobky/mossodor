"use client";
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton({ href }: { href: string | null }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push("/shop");
      }}
      variant={"ghost"}
      className="absolute left-0 top-0 m-4 sm:m-10 gap-2"
    >
      <ArrowLeft size={15} /> Shop
    </Button>
  );
}
