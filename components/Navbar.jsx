import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
function Navbar() {
  const { data: session, loading } = useSession();
  console.log(session);
  const SignInHandeler = (e) => {
    e.preventDefault();
    signIn();
  };
  const SignOutHandeler = (e) => {
    e.preventDefault();
    signOut();
  };

  if (session) {
    return (
      <>
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
            <div className="w-auto sm:w-[90%]  lg:w-2/3">
              <nav className="  text-xl active:text-red flex items-center justify-evenly  gap-1">
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
                <Link href="/api/auth/signout">
                  <button
                    onClick={SignOutHandeler}
                    className="active:text-red-500 hover:scale-110 cursor-pointer "
                  >
                    Logout
                  </button>
                </Link>
                <div className="text-center self-end hidden lg:block ">
                  <span className="text-lg text-slate-700">Welcome </span>
                  <br />
                  <span className="text-lg text-teal-500">
                    {session.user.name}
                  </span>
                </div>
              </nav>
            </div>
          </header>
        </>
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
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
            <Link href="/api/auth/signin">
              <button
                onClick={SignInHandeler}
                className="active:text-red-500 hover:scale-110 cursor-pointer "
              >
                Login
              </button>
            </Link>{" "}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
