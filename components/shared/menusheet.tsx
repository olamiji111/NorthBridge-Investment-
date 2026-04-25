"use client";

import React, { useState } from 'react'
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet"
import { navLinks } from "@/constants";
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from "next/link";
import { LoginLogo } from "@/components/icons/icons";

interface MenuSheetProps {
  open: boolean;
  setOpen: (b: boolean) => void;
  children: React.ReactNode;
}

const MenuSheet = ({ open, setOpen, children }: MenuSheetProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleToggle = (idx: number) => {
    setOpenItems((prev) =>
      prev.includes(idx)
        ? prev.filter((item) => item !== idx)
        : [...prev, idx]
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={true}
        className="flex w-screen h-screen flex-col gap-4 border-[rgba(135,159,240,0.1)] rounded-b-xl border overflow-y-auto outline-none z-[9999] px-4 py-6 shadow-[0_8px_30px_6px_rgba(9,25,77,0.4),0_4px_12px_0_rgba(9,25,77,0.4)]"
      >
        <div className="py-8 flex flex-col gap-y-6 items-start w-full">
          {navLinks.map((item, idx) => {
            const isOpen = openItems.includes(idx);
            return (
              <div key={idx} className="w-full flex flex-col gap-y-4">
                {/* Parent row */}
                <div
                  onClick={() => handleToggle(idx)}
                  className="flex flex-row items-center cursor-pointer justify-between w-full"
                >
                  <span className="font-semibold text-2xl text-white ibm">
                    {item.title}
                  </span>

                  {isOpen ? (
                    <ChevronUp strokeWidth={1.5} className="text-white" size={30} />
                  ) : (
                    <ChevronDown strokeWidth={1.5} className="text-white" size={30} />
                  )}
                </div>

                {/* Children */}
                {isOpen && (
                  <div className="flex flex-col gap-y-4 pl-2">
                    {item.links.map((link, linkIdx) => (
                      <Link
                        key={linkIdx}
                        href={link.href || "/"}
                        className="text-xl lg:text-2xl text-zinc-300 hover:text-link-hover transition-colors duration-150"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="h-[0.069rem] w-full bg-zinc-400/40 relative z-10" />

          <div className="flex flex-col gap-y-4.5 items-start">
            <Link
              href="/support"
              className="text-[1.375rem] text-text-color  hover:text-link-hover cursor-pointer  transition-colors duration-150"
            >
              Support
            </Link>

            <Link
              href="http://tradebot-ai.vercel.app/sign-in"
              className="text-[1.375rem]  text-text-color group hover:text-link-hover   inline-flex flex-row  items-center cursor-pointer  "
            >
              <LoginLogo className='size-8  transition-transform duration-100' />
              <span> Login </span>
            </Link>

            <Link
              href="/"
              className="text-[1.375rem] text-text-color hover:text-link-hover  cursor-pointer transition-colors duration-150"
            >
              Plus500Bot AI
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;