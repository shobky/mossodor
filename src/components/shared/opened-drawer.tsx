"use client";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import useOpenModal from "@/lib/hooks/use-open-modal";
import { Drawer, DrawerContent } from "../ui/drawer";
// it's always open cause it uses intercepting routes to render.
export default function OpenedDrawer({ children }: { children: ReactNode }) {
  const { open, setOpen } = useOpenModal({
    defaultOpen: true,
    closeOnBack: true,
  });

  return (
    <Drawer
      onClose={() => setOpen(false)}
      preventScrollRestoration={false}
      open={open}
      modal={false}
    >
      <div className="fixed top-0 left-0 inset-0 z-50 bg-black/5 backdrop-blur-sm" />
      <DrawerContent
        onInteractOutside={() => setOpen(false)}
        className="h-[calc(100svh-4rem)] fixed inset-x-0 bottom-0 z-50 mt-24 flex flex-col rounded-t-[10px] border bg-background"
      >
        <ScrollArea className="max-h-[calc(100svh-4rem)]">
          <div className="px-6 sm:px-[15vw] py-6 ">
            <Button
              className="absolute left-0 top-0 m-10 hidden sm:flex  "
              variant={"ghost"}
              size="icon"
              onClick={() => setOpen(false)}
            >
              <ArrowLeft />
            </Button>
            {children}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
