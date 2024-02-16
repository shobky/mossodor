"use client";

import { useEffect, useState } from "react";

export default function DynamicHeaderOnScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerClass, setHeaderClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (currentScrollY <= 60) {
        // When within the first 100vh, clear headerClass
        setHeaderClass("");
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and beyond 40px
        setHeaderClass("translate-y-[-100%]"); // Move header out of view
      } else if (lastScrollY - currentScrollY > 50) {
        // Scrolling up and the difference is more than 24px
        setHeaderClass("translate-y-0 pb-0 pt-6 bg-black/40 backdrop-blur-md "); // Move header back to top with specific styles
      }

      setLastScrollY(currentScrollY); // Update lastScrollY to current scroll position
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`space-y-4 p-6 fixed  text-white w-full z-[30] px-5 sm:px-[10vw] transition-transform duration-300 ${headerClass}`}
    >
      {children}
    </header>
  );
}
