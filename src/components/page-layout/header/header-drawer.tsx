"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHeader } from "./header-provider";
import { usePathname } from "next/navigation";

interface HeaderDrawerContext {
  open: boolean;
  toggleDrawer: () => void;
}
const HeaderDrawerContext = createContext<HeaderDrawerContext>({
  open: false,
  toggleDrawer: () => {},
});

export const HeaderDrawerProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { toggleDialog, open: isDialogOpened } = useHeader();

  const pathname = usePathname();

  useEffect(() => {
    if (!isDialogOpened) {
      setOpen(false);
    }
  }, [isDialogOpened]);

  useEffect(() => {
    if (open) {
      toggleDialog();
    }
  }, [pathname]);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
    toggleDialog();
  };

  return (
    <HeaderDrawerContext.Provider value={{ open, toggleDrawer }}>
      {children}
    </HeaderDrawerContext.Provider>
  );
};

export const useHeaderDrawer = () => {
  const context = useContext(HeaderDrawerContext);
  if (context === undefined) {
    throw new Error(
      "useHeaderDrawer must be used within a HeaderDrawerProvider"
    );
  }
  return context;
};

export const HeaderDrawerTrigger = ({ children }: { children: ReactNode }) => {
  const { toggleDrawer } = useHeaderDrawer();

  return <div onClick={toggleDrawer}>{children}</div>;
};

export const HeaderDrawerContent = ({ children }: { children: ReactNode }) => {
  const { open } = useHeaderDrawer();
  if (!open) return null;
  return (
    <div className="absolute right-0 w-full h-full top-10 border-b ">
      {children}
    </div>
  );
};

export const HeaderDrawer = ({ children }: { children: ReactNode }) => {
  return <HeaderDrawerProvider>{children}</HeaderDrawerProvider>;
};
