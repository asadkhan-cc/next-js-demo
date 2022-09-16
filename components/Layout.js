import Footer from "./Footer";
import Navbar from "./Navbar";
// import useUser from "../lib/useUser";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <h1>{"<Navbar />"}</h1>
      <main>{children}</main>
      <h1>{"<Footer />"}</h1>
      <Footer></Footer>
    </>
  );
}
