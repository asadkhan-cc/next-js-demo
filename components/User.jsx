import Link from "next/link";

const User = (props) => {
  //   console.log("props");
  return (
    <div className="w-auto ">
      <Link passHref href={`/Listing/${props.data.id}`}>
        <div className="flex group  flex-grow-1 m-5  mx-20 p-2 hover:scale-105 relative border-b-neutral-700 border  rounded-lg hover:rounded-xl hover:p-5 shadow-2xl shadow-slate-600 transition duration-200 hover:font-bold  py-5 hover:bg-zinc-100 hover:shadow-none  ">
          <div className="">
            <h1 className="text-xl opacity-100 pl-10 hover:text-">
              {props.data.name}
            </h1>
            <div className="absolute bg-black left-0 top-0 text-xl p-5 rounded-lg  opacity-0 transition duration-200 group-hover:opacity-100">
              .
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default User;
