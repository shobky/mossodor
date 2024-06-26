"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className=" text-muted-foreground mt-2   "
      variant={"ghost"}
    >
      <ChevronUp size={15} />
    </Button>
  );
}