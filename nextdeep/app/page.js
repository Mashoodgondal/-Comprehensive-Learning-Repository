// import State from "./ifState/page";
import ApiCalling from "./callApi/page";
import MapFunc from "./mapFunc/page";
import Counting from "./simpleCounter/page";

export default function Home() {
  return (
    <>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="mt-20">
          <Counting />
        </div>

        {/* <State /> */}
        <div>
          <MapFunc />
        </div>
      </div>
      <ApiCalling />
    </>
  );
}
