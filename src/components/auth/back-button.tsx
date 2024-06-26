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
        href ? router.push(href) : router.back();
      }}
      variant={"ghost"}
      size={"icon"}
      className="absolute left-0 top-0 m-10"
    >
      <ArrowLeft />
    </Button>
  );
}
