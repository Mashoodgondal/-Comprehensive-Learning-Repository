"use client";
import axios from "axios";
import { useState } from "react";

const ApiCalling = () => {
  const [data, setdata] = useState([]);

  // const dataCall = async () => {
  //   let response = await axios.get("https://api.github.com/users/naveed-rana");
  //   setdata(response.data);
  //   console.log(response);
  // };
  const dataCall = async () => {
    let response = await axios.get(
      "https://api.github.com/users/naveed-rana/followers"
    );
    setdata(response.data);
    console.log(response);
  };

  return (
    <div>
      {data.map((item) => {
        return <> followers:{item.login}</>;
      })}

      <h1 className="mt-10 text-4xl text-center font-bold text-indigo-600">
        Call Rest API
      </h1>

      {/* <div className="text-center font-bold">
        <h2>Githun Name:{data.name} </h2>
        <h3>Followers:{data.followers}</h3>
      </div> */}

      <div className="text-center">
        <button
          className="bg-gray-300 rounded  hover:bg-gray-500  mt-4 p-2"
          onClick={dataCall}
        >
          Load Data
        </button>
      </div>
    </div>
  );
};

export default ApiCalling;
