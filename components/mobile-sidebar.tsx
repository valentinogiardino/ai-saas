"use client";

import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";

interface ModalSideBarProps {
  apiLimitCount: number,
  isPro: boolean,
}

const MobilSidebar = ({ apiLimitCount = 0, isPro = false }: ModalSideBarProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
      </SheetContent>
    </Sheet>
  );
};

export default MobilSidebar;
