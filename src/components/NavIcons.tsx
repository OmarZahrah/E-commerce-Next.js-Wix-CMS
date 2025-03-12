"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/context/wixContext";
import Cookies from "js-cookie";

const NavIcons = () => {
  const wixClient = useWixClient();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const isLoggedIn = wixClient.auth.loggedIn();

  function handleProfileClick() {
    if (!isLoggedIn) router.push("/login");
    setIsProfileOpen((prev) => !prev);
  }

  async function handleLogout() {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    router.push(logoutUrl);
    setIsLoading(false);
    setIsProfileOpen(false);
  }

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profile-icon"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfileClick}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <span className="mt-2 cursor-pointer block" onClick={handleLogout}>
            {isLoading ? "Logging Out..." : "Logout"}
          </span>
        </div>
      )}

      <Image
        src="/notification.png"
        alt="notification-icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          alt="cart-icon"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <span className="absolute -top-4 -right-4 w-5 h-5 bg-brandPink rounded-full text-white text-sm flex items-center justify-center">
          1
        </span>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};
export default NavIcons;
