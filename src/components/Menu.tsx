"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src="/menu.png"
        width={28}
        height={28}
        alt="menu-icon"
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {/* {open && ( */}
      <nav
        className={`absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-8 text-xl z-10 bg-opacity-90 transition-all ease-in-out duration-1000 
          ${open ? "block" : "hidden"}`}
        // className={`absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-8 text-xl z-10 bg-opacity-90 transition-all ease-in-out duration-1000
        //   ${open ? "translate-x-0" : "translate-x-[100%]"}`}
      >
        <Link href="/" className="hover:text-colorBrandPrimary">
          Home
        </Link>
        <Link href="/" className="hover:text-colorBrandPrimary">
          Shop
        </Link>
        <Link href="/" className="hover:text-colorBrandPrimary">
          Deals
        </Link>
        <Link href="/" className="hover:text-colorBrandPrimary">
          About
        </Link>
        <Link href="/" className="hover:text-colorBrandPrimary">
          Contact
        </Link>
        <Link href="/" className="hover:text-colorBrandPrimary">
          Logout
        </Link>
        <Link href="/" className="hover:text-colorBrandPrimary">
          Cart
        </Link>
      </nav>
      {/* )} */}
    </div>
  );
};
export default Menu;
