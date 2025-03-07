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
          ${open ? "translate-x-0" : "translate-x-[100%]"}`}
      >
        <Link href="/" className="hover:text-brandPink">
          Home
        </Link>
        <Link href="/" className="hover:text-brandPink">
          Shop
        </Link>
        <Link href="/" className="hover:text-brandPink">
          Deals
        </Link>
        <Link href="/" className="hover:text-brandPink">
          About
        </Link>
        <Link href="/" className="hover:text-brandPink">
          Contact
        </Link>
        <Link href="/" className="hover:text-brandPink">
          Logout
        </Link>
        <Link href="/" className="hover:text-brandPink">
          Cart
        </Link>
      </nav>
      {/* )} */}
    </div>
  );
};
export default Menu;
