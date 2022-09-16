import axios from "axios";
import User from "../../components/User";

const Listing = ({ data, contex }) => {
  // console.log(contex);

  return (
    <>
      <h1 className="text-3xl font-bold m-3 p-5 text-center">User Names</h1>
      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {data.map((elem) => {
          return <User data={elem} key={elem.id}></User>;
        })}
      </div>
    </>
  );
};

export default Listing;
export const getStaticProps = async (context) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = await res.data;
    return {
      props: { data: data },
    };
  } catch (error) {
    return {
      props: { data: error },
    };
  }
};
