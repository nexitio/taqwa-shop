"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MoveUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { groceryCategories } from "./data";
import { CustomMenubar } from "./menubar";

export default function Menubar() {
  const [open, setOpen] = useState(false);

  // Close sheet when switching to desktop (lg and up)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    if (mediaQuery.matches) setOpen(false);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          {/* <Button
            variant="outline"
            className="border-none bg-transparent dark:bg-transparent"
          > */}
          <Menu className="h-6 w-6" />
          {/* </Button> */}
        </SheetTrigger>
        <SheetContent side="left" className="overflow-y-auto">
          <SheetHeader>
            {/* <SheetTitle>Menu</SheetTitle> */}
            <div className="flex items-center gap-2">
              <Image src={"/logo.png"} alt="logo" width={30} height={30} />
              <div className="flex flex-col -mb-1">
                <h1 className="font-bold -mb-1 flex items-center gap-1">
                  UP <MoveUpRight size={15} />
                </h1>
                <h1 className="font-bold -mt-1">STORE</h1>
              </div>
            </div>
          </SheetHeader>
          <CustomMenubar
            categories={groceryCategories}
            label="All Departments"
            className=""
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
