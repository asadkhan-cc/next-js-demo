import Footer from "./Footer";
import Navbar from "./Navbar";
// import useUser from "../lib/useUser";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
