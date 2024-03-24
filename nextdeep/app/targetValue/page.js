"use client";
import { useState } from "react";

const Getvalue = () => {
  const [name, setname] = useState("");
  const changehandler = (e) => {
    setname(e.target.value);
  };
  return (
    <div>
      <div className="m-4 text-center ">
        <input
          className="border border-gray-600 rounded focuc:outline-blue-400"
          type="text"
          onChange={changehandler}
        ></input>
        <h2 className="mt-2 font-bolt text-gray-500">output:{name}</h2>
      </div>
    </div>
  );
};

export default Getvalue;
