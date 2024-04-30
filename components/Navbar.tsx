"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./toggleTheme";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <HoveredLink href="/">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Marriage matching"
              href="/Marriage-matching"
              src="/couple.jpg"
              description="Marriage Horoscope Matching & Compatibility Checking"
            />
            <ProductItem
              title="Personal horoscope"
              href="/Personal-horoscope"
              src="/personal.jpg"
              description="we give full horoscope results"
            />
            <ProductItem
              title="Career choosing"
              href="/Career-choosing"
              src="/career.jpg"
              description="Career choosing guidance based horoscope"
            />
          </div>
        </MenuItem>
        <HoveredLink href="/pricing">Pricing</HoveredLink>
        <HoveredLink href="/contact" >Contact</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="My account">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/sign-in">Sign in</HoveredLink>
            <HoveredLink href="/sign-up">Sign up</HoveredLink>
          </div>
        </MenuItem>
        <ModeToggle />
      </Menu>
    </div>
  );
}
