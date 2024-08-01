"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Switch } from "@/components/ui/switch";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" {...props}>
      {children}
    </NextThemesProvider>
  );
}

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="hover:bg-transparent hover:scale-110 ease-in-out duration-200  focus:outline-none active:outline-none z-20 relative rounded-full shadow-none w-8 h-8 hover:text-auto "
      variant={"ghost"}
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        size={22}
        className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={22}
        className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export const ThemeSwitch = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-between w-full">
      <p className={cn("flex gap-3 items-center", className)}>
        <Moon size={20} />
        <span>Dark mode</span>
      </p>
      <Switch
        className="bg-primary"
        checked={theme === "dark"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
};
