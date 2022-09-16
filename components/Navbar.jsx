import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <header className=" bg-emerald-100 flex flex-col lg:flex-row  items-center justify-around">
        <div className=" font-bold font-mono text-center text-sm items-center justify-between">
          <Image
            alt="logo.png"
            src={logo}
            width={100}
            height={100}
            className=""
          />
          <h1>Problem Listing.....</h1>
        </div>
        <div className="w-auto lg:w-1/2">
          <nav className="  text-xl active:text-red flex items-center justify-evenly">
            <Link href="/">
              <div className="active:text-red-500 hover:scale-110 cursor-pointer ">
                Home
              </div>
            </Link>
            <Link href="/About">
              <div className="active:text-red-500 hover:scale-110 cursor-pointer ">
                About
              </div>
            </Link>
            <Link href="/Contact">
              <div className="active:text-red-500 hover:scale-110 cursor-pointer ">
                Contact
              </div>
            </Link>
            <Link href="/Listing">
              <div className="active:text-red-500 hover:scale-110 cursor-pointer ">
                Listings
              </div>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
