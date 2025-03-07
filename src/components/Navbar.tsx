import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <header className="h-20 padding-section relative ">
      {/* Mobile Screens */}
      <div className="md:hidden flex justify-between items-center h-full ">
        <Link href="/">
          <span className="text-2xl tracking-wide">ZAHRA</span>
        </Link>
        <Menu />
      </div>

      {/*Bigger Screens  */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link href="/" className="flex gap-3 items-center ">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <span className="text-2xl tracking-wide">ZAHRA</span>
          </Link>
          <nav className="hidden xl:flex gap-4">
            <Link href="/" className="hover:text-brandPink">
              {" "}
              Home{" "}
            </Link>
            <Link href="/" className="hover:text-brandPink">
              {" "}
              Shop{" "}
            </Link>
            <Link href="/" className="hover:text-brandPink">
              {" "}
              Deals{" "}
            </Link>
            <Link href="/" className="hover:text-brandPink">
              {" "}
              About{" "}
            </Link>
            <Link href="/" className="hover:text-brandPink">
              {" "}
              Contact{" "}
            </Link>
            <Link href="/" className="hover:text-brandPink">
              {" "}
              Logout{" "}
            </Link>
            <Link href="/" className="hover:text-brandPink">
              {" "}
              Cart{" "}
            </Link>
          </nav>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
