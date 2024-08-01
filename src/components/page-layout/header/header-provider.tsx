"use client";
import { Padding } from "@/components/page-layout";
import useOpenedDrawer from "@/lib/hooks/use-open-modal";
import { useQueryParams } from "@/lib/hooks/use-query-params";
import { cn } from "@/lib/utils/cn";
import { usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface HeaderContextProps {
  open: boolean;
  toggleDialog: () => void;
  closeDialog: () => void;
}

const HeaderContext = createContext<HeaderContextProps>({
  open: false,
  toggleDialog: () => {},
  closeDialog: () => {},
});

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const headerStyles = {
    transparent: "bg-transparent text-white h-[var(--header-height)]",
    themes: "bg-background text-foreground h-[var(--header-height)]",
    dialog: "bg-background text-foreground h-[100vh] overflow-hidden",
  };

  const [headerStyle, setHeaderStyle] = useState(headerStyles.transparent);
  const { open, setOpen } = useOpenedDrawer({
    defaultOpen: false,
    closeOnBack: false,
  });
  const toggleDialog = () => setOpen((prev) => !prev);
  const closeDialog = () => setOpen(false);

  const pathname = usePathname();
  const segments = pathname?.split("/") ?? [];
  const header = document.getElementById("header");

  useEffect(() => {
    if (open) {
      setHeaderStyle(headerStyles.dialog);
      if (header) {
        header.style.paddingRight = "17px";
      }
      return;
    } else if (
      TRANSPARENT_PAGES[segments[1]] &&
      (segments[1] === "" || segments[1] === "shop" || segments[2])
    ) {
      setHeaderStyle(headerStyles.transparent);
    } else {
      setHeaderStyle(headerStyles.themes);
    }
    if (header) {
      header.style.paddingRight = "0px";
    }
  }, [segments, open]);

  return (
    <HeaderContext.Provider value={{ open, toggleDialog, closeDialog }}>
      <header className="h-[var(--header-height)]">
        <Padding
          className={cn(
            headerStyle,
            "z-30 absolute top-0 w-full transition-[height] duration-500  "
          )}
        >
          {children}
        </Padding>
      </header>
    </HeaderContext.Provider>
  );
};
export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
};

export const TRANSPARENT_PAGES: any = {
  "": true,
  shop: true,
  chandeliers: true,
  "pendant-lights": true,
  "ceilling-lights": true,
  "wall-lights": true,
};
