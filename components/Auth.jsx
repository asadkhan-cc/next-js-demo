// import useUser from "../lib/useUser";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Auth({ children }) {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go();
      router.push("/");
    }, 5000);
  }, [router]);

  const { data: session, loading } = useSession();
  console.log(children);
  const SignInHandeler = (e) => {
    e.preventDefault();
    signIn();
  };
  if (session) {
    return (
      <>
        <>{children}</>
      </>
    );
  }
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="text-center w-1/2 h-96 flex flex-col items-center justify-center mx-auto">
        <h1>Kindly Login to view listings</h1> <br />
        <input
          className="bg-green-400 px-2 m-2 p-1  rounded"
          onClick={SignInHandeler}
          type="button"
          value="Login"
        />
      </div>
    );
  }
}
