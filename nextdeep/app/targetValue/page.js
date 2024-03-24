"use client";
import { useState } from "react";

const Getvalue = () => {
  const [name, setname] = useState("");
  const changehandler = (e) => {
    setname(e.target.value);
  };
  return (
    <div>
      {" "}
      <div className="m-4 text-center ">
        <input
          className="border border-gray-600 rounded"
          type="text"
          onChange={changehandler}
        ></input>
        <h2>output:{name}</h2>
      </div>
    </div>
  );
};

export default Getvalue;
