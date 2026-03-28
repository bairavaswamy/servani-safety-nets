"use client";

import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full h-17 top-0 left-0 z-50 bg-black/50 text-white shadow-md border-b border-teal-700/40">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Logo />

        <div className="hidden md:block">
          <DesktopMenu />
        </div>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
