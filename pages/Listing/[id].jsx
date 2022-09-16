import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

// const getStaticPaths = async () => {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//   const data = await res.data;
//   const paths = data.map((elem) => {
//     return {
//         params: { id: elem.id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await res.data;

  return {
    props: { response: data },
  };
};

const Profile = ({ response }) => {
  const router = useRouter();
  const data = response;
  //   console.log(response);
  //   console.log(query);
  return (
    <>
      <div className="text-center font-medium text-xl w-[90%] relative mx-auto grid-cols-3 my-8 shadow-2xl rounded-lg py-5 hover:bg-zinc-100 hover:shadow-none">
        <Link href={"/Listing"}>
          <div className="absolute text-xl text-blue-400 hover:text-blue-600 active:text-red-500 font-light cursor-pointer top-0 left-2">
            {"< Back"}
          </div>
        </Link>
        <h1 className="text-3xl cursor-pointer font-medium text-sky-500">
          {data.name}
        </h1>
        <br />
        <div className="w-72 mx-auto text-left">
          <h1>
            UserName: <span className="font-normal">{data.username}</span>
          </h1>
          <p>
            Phone: <span className="font-normal">{data.phone}</span>
          </p>
          <p>
            Email: <span className="font-normal">{data.email}</span>
          </p>
          <a>
            Website:{" "}
            <span className="text-sky-800 cursor-pointer active:text-red-500">
              {data.website}
            </span>{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
